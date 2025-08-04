import { useEffect, useRef } from "react";

declare global {
  interface Window {
    THREE: any;
  }
}

interface HeroRobotSceneProps {
  className?: string;
}

export default function HeroRobotScene({ className = "" }: HeroRobotSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const robotRef = useRef<any>(null);
  const animationIdRef = useRef<number>(0);
  const composerRef = useRef<any>(null);
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current || !window.THREE) return;

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
    renderer.toneMappingExposure = 1;
    container.appendChild(renderer.domElement);

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0x00D4FF, 1);
    mainLight.position.set(10, 10, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    scene.add(mainLight);

    const fillLight = new THREE.PointLight(0x1ECBFF, 0.8, 50);
    fillLight.position.set(-10, 5, 10);
    scene.add(fillLight);

    const accentLight = new THREE.SpotLight(0x00FFFF, 1, 30, Math.PI / 6, 0.5);
    accentLight.position.set(0, 15, 0);
    accentLight.target.position.set(0, 0, 0);
    scene.add(accentLight);
    scene.add(accentLight.target);

    // Create enhanced hero robot
    const robot = createHeroRobot(THREE);
    scene.add(robot);

    // Enhanced particle system
    const particleSystem = createParticleSystem(THREE);
    scene.add(particleSystem);

    // Camera positioning
    camera.position.set(0, 5, 15);

    // Orbit controls
    let controls: any = null;
    if (window.THREE.OrbitControls) {
      controls = new window.THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.maxPolarAngle = Math.PI / 2;
      controls.minPolarAngle = Math.PI / 4;
    }

    // Post-processing for bloom effect
    let composer: any = null;
    if (window.THREE.EffectComposer && window.THREE.RenderPass && window.THREE.UnrealBloomPass) {
      composer = new window.THREE.EffectComposer(renderer);
      const renderPass = new window.THREE.RenderPass(scene, camera);
      composer.addPass(renderPass);

      const bloomPass = new window.THREE.UnrealBloomPass(
        new THREE.Vector2(container.clientWidth, container.clientHeight),
        0.5, // strength
        0.4, // radius
        0.85 // threshold
      );
      composer.addPass(bloomPass);
    }

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Update controls
      if (controls) {
        controls.update();
      }

      // Robot animations
      if (robot) {
        robot.rotation.y += 0.005;
        robot.position.y = Math.sin(Date.now() * 0.001) * 0.3;
        
        // Animate arms
        robot.children.forEach((child: any, index: number) => {
          if (child.userData && child.userData.isArm) {
            child.rotation.z = Math.sin(Date.now() * 0.002 + index) * 0.3;
          }
        });

        // Pulse glow effect
        const glowIntensity = (Math.sin(Date.now() * 0.003) + 1) * 0.5;
        robot.children.forEach((child: any) => {
          if (child.material && child.material.emissive) {
            child.material.emissiveIntensity = 0.1 + glowIntensity * 0.2;
          }
        });
      }

      // Particle animations
      if (particleSystem) {
        particleSystem.rotation.y += 0.001;
        const positions = particleSystem.geometry.attributes.position.array;
        for (let i = 1; i < positions.length; i += 3) {
          positions[i] += Math.sin(Date.now() * 0.001 + i) * 0.001;
        }
        particleSystem.geometry.attributes.position.needsUpdate = true;
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
    robotRef.current = robot;
    composerRef.current = composer;
    controlsRef.current = controls;

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      if (controls) {
        controls.dispose();
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className={`three-container ${className}`} />;
}

// Helper function for creating hero robot
function createHeroRobot(THREE: any) {
  const robot = new THREE.Group();

  // Main body with PBR materials
  const bodyGeometry = new THREE.BoxGeometry(2, 3, 1.5);
  const bodyMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x2A2A2A,
    metalness: 0.7,
    roughness: 0.2,
    emissive: 0x001133,
    emissiveIntensity: 0.1
  });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.castShadow = true;
  body.receiveShadow = true;
  robot.add(body);

  // Glowing head
  const headGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.2);
  const headMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x00D4FF,
    metalness: 0.8,
    roughness: 0.1,
    emissive: 0x00D4FF,
    emissiveIntensity: 0.3
  });
  const head = new THREE.Mesh(headGeometry, headMaterial);
  head.position.y = 2.2;
  head.castShadow = true;
  robot.add(head);

  // Arms with joints
  for (let side = -1; side <= 1; side += 2) {
    const armGroup = new THREE.Group();
    armGroup.userData = { isArm: true };
    
    const shoulderGeometry = new THREE.SphereGeometry(0.3);
    const shoulderMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x00FFFF,
      metalness: 1,
      roughness: 0,
      emissive: 0x00FFFF,
      emissiveIntensity: 0.2
    });
    const shoulder = new THREE.Mesh(shoulderGeometry, shoulderMaterial);
    shoulder.position.set(side * 1.5, 1, 0);
    
    const armGeometry = new THREE.BoxGeometry(0.5, 2, 0.5);
    const armMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xC0C0C0,
      metalness: 0.9,
      roughness: 0.1
    });
    const arm = new THREE.Mesh(armGeometry, armMaterial);
    arm.position.set(side * 1.5, -0.5, 0);
    arm.castShadow = true;
    
    armGroup.add(shoulder);
    armGroup.add(arm);
    robot.add(armGroup);
  }

  // Glowing eyes
  const eyeGeometry = new THREE.SphereGeometry(0.1, 8, 6);
  const eyeMaterial = new THREE.MeshPhongMaterial({
    color: 0x00FFFF,
    emissive: 0x00FFFF,
    emissiveIntensity: 1
  });

  const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  leftEye.position.set(-0.3, 2.3, 0.6);
  robot.add(leftEye);

  const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  rightEye.position.set(0.3, 2.3, 0.6);
  robot.add(rightEye);

  robot.position.set(5, 0, 0);
  return robot;
}

function createParticleSystem(THREE: any) {
  const particleGeometry = new THREE.BufferGeometry();
  const particleCount = 150;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 40;
    positions[i + 1] = (Math.random() - 0.5) * 40;
    positions[i + 2] = (Math.random() - 0.5) * 40;
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particleMaterial = new THREE.PointsMaterial({
    color: 0x00D4FF,
    size: 0.1,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  });

  return new THREE.Points(particleGeometry, particleMaterial);
}