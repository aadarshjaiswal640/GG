import { useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    THREE: any;
  }
}

interface FeatureSceneProps {
  className?: string;
}

export default function FeatureScene({ className = "" }: FeatureSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const robotArmRef = useRef<any>(null);
  const animationIdRef = useRef<number>(0);
  const composerRef = useRef<any>(null);
  const isInitializedRef = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const initializeScene = useCallback(() => {
    if (!containerRef.current || !window.THREE || isInitializedRef.current) return;

    const THREE = window.THREE;
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xFFFFFF, 1.2);
    mainLight.position.set(15, 15, 10);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    scene.add(mainLight);

    const accentLight = new THREE.PointLight(0x00D4FF, 0.8, 30);
    accentLight.position.set(-10, 10, 5);
    scene.add(accentLight);

    // Create robotic arm assembly
    const robotArm = createRoboticArm(THREE);
    scene.add(robotArm);

    // Create assembly components
    const assemblyParts = createAssemblyParts(THREE);
    scene.add(assemblyParts);

    // Camera positioning
    camera.position.set(12, 8, 12);
    camera.lookAt(0, 0, 0);

    // Post-processing for bloom effect
    let composer: any = null;
    if (window.THREE.EffectComposer && window.THREE.RenderPass && window.THREE.UnrealBloomPass) {
      composer = new window.THREE.EffectComposer(renderer);
      const renderPass = new window.THREE.RenderPass(scene, camera);
      composer.addPass(renderPass);

      const bloomPass = new window.THREE.UnrealBloomPass(
        new THREE.Vector2(container.clientWidth, container.clientHeight),
        0.3, // strength
        0.3, // radius
        0.8 // threshold
      );
      composer.addPass(bloomPass);
    }

    // Animation loop
    const animate = () => {
      if (!isInitializedRef.current) return;
      animationIdRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Robotic arm animation
      if (robotArm) {
        // Base rotation
        robotArm.rotation.y = Math.sin(time * 0.3) * 0.5;
        
        // Animate arm segments
        robotArm.children.forEach((segment: any, index: number) => {
          if (segment.userData && segment.userData.isSegment) {
            const phase = index * 0.5;
            segment.rotation.z = Math.sin(time * 0.5 + phase) * 0.3;
            segment.rotation.x = Math.cos(time * 0.3 + phase) * 0.2;
          }
        });

        // Animate end effector
        const endEffector = robotArm.children.find((child: any) => child.userData?.isEndEffector);
        if (endEffector) {
          endEffector.rotation.y = time * 2;
          
          // Picking up parts animation
          const pickupCycle = Math.sin(time * 0.8) * 0.5 + 0.5;
          endEffector.children.forEach((child: any) => {
            if (child.userData?.isGripper) {
              child.rotation.z = pickupCycle * 0.5;
            }
          });
        }
      }

      // Assembly parts animation
      if (assemblyParts) {
        assemblyParts.children.forEach((part: any, index: number) => {
          if (part.userData && part.userData.isPart) {
            const phase = index * 0.8;
            part.position.y = Math.sin(time * 0.6 + phase) * 0.2 + part.userData.originalY;
            part.rotation.y += 0.01;
          }
        });
      }

      // Render
      if (composer) {
        composer.render();
      } else {
        renderer.render(scene, camera);
      }
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      
      if (composer) {
        composer.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;
    robotArmRef.current = robotArm;
    composerRef.current = composer;
    isInitializedRef.current = true;

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      isInitializedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Intersection observer for lazy initialization
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInitializedRef.current) {
          initializeScene();
        }
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      isInitializedRef.current = false;
    };
  }, [initializeScene]);

  return <div ref={containerRef} className={`three-container ${className}`} />;
}

// Helper function for creating robotic arm
function createRoboticArm(THREE: any) {
  const armGroup = new THREE.Group();

  // Base
  const baseGeometry = new THREE.CylinderGeometry(1.5, 2, 1, 12);
  const baseMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x2A2A2A,
    metalness: 0.8,
    roughness: 0.2
  });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  base.castShadow = true;
  base.receiveShadow = true;
  armGroup.add(base);

  // Arm segments
  const segmentColors = [0x00D4FF, 0x1ECBFF, 0x00FFFF];
  let currentY = 0.5;
  
  for (let i = 0; i < 3; i++) {
    const segmentGroup = new THREE.Group();
    segmentGroup.userData = { isSegment: true };
    
    // Joint
    const jointGeometry = new THREE.SphereGeometry(0.5);
    const jointMaterial = new THREE.MeshPhysicalMaterial({
      color: segmentColors[i],
      metalness: 1,
      roughness: 0.1,
      emissive: segmentColors[i],
      emissiveIntensity: 0.1
    });
    const joint = new THREE.Mesh(jointGeometry, jointMaterial);
    joint.position.y = currentY;
    joint.castShadow = true;
    
    // Arm segment
    const armGeometry = new THREE.BoxGeometry(0.6, 3, 0.6);
    const armMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xC0C0C0,
      metalness: 0.9,
      roughness: 0.1
    });
    const armSegment = new THREE.Mesh(armGeometry, armMaterial);
    armSegment.position.y = currentY + 1.5;
    armSegment.castShadow = true;
    
    segmentGroup.add(joint);
    segmentGroup.add(armSegment);
    segmentGroup.position.y = currentY;
    
    armGroup.add(segmentGroup);
    currentY += 3;
  }

  // End effector with grippers
  const endEffectorGroup = new THREE.Group();
  endEffectorGroup.userData = { isEndEffector: true };
  
  const gripperGeometry = new THREE.BoxGeometry(0.3, 1, 0.1);
  const gripperMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xFF6B35,
    metalness: 0.7,
    roughness: 0.3,
    emissive: 0xFF6B35,
    emissiveIntensity: 0.1
  });
  
  for (let side = -1; side <= 1; side += 2) {
    const gripper = new THREE.Mesh(gripperGeometry, gripperMaterial);
    gripper.position.set(side * 0.3, 0, 0);
    gripper.userData = { isGripper: true };
    gripper.castShadow = true;
    endEffectorGroup.add(gripper);
  }
  
  endEffectorGroup.position.y = currentY;
  armGroup.add(endEffectorGroup);

  return armGroup;
}

function createAssemblyParts(THREE: any) {
  const partsGroup = new THREE.Group();
  
  const partGeometries = [
    new THREE.BoxGeometry(1, 0.5, 1),
    new THREE.CylinderGeometry(0.3, 0.3, 1),
    new THREE.SphereGeometry(0.4),
    new THREE.TorusGeometry(0.5, 0.2)
  ];
  
  const partColors = [0xFF6B35, 0x00D4FF, 0x1ECBFF, 0x00FFFF];
  
  for (let i = 0; i < 4; i++) {
    const partMaterial = new THREE.MeshPhysicalMaterial({
      color: partColors[i],
      metalness: 0.6,
      roughness: 0.4,
      emissive: partColors[i],
      emissiveIntensity: 0.05
    });
    
    const part = new THREE.Mesh(partGeometries[i], partMaterial);
    part.position.set(
      (Math.random() - 0.5) * 8,
      Math.random() * 2 + 1,
      (Math.random() - 0.5) * 8
    );
    part.castShadow = true;
    part.userData = { 
      isPart: true, 
      originalY: part.position.y 
    };
    
    partsGroup.add(part);
  }
  
  return partsGroup;
}