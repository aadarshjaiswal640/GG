import { useEffect, useRef } from "react";

declare global {
  interface Window {
    THREE: any;
  }
}

export default function RobotScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const robotRef = useRef<any>(null);
  const animationIdRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current || !window.THREE) return;

    const THREE = window.THREE;
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00D4FF, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Create robot
    const robot = new THREE.Group();

    // Robot body
    const bodyGeometry = new THREE.BoxGeometry(2, 3, 1.5);
    const bodyMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x2A2A2A,
      shininess: 100
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    robot.add(body);

    // Robot head
    const headGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.2);
    const headMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x00D4FF,
      shininess: 100
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 2.2;
    robot.add(head);

    // Robot arms
    const armGeometry = new THREE.BoxGeometry(0.5, 2, 0.5);
    const armMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xC0C0C0,
      shininess: 100
    });

    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-1.5, 0, 0);
    robot.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(1.5, 0, 0);
    robot.add(rightArm);

    // Robot eyes
    const eyeGeometry = new THREE.SphereGeometry(0.1, 8, 6);
    const eyeMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x00FFFF,
      emissive: 0x00FFFF,
      emissiveIntensity: 0.5,
      shininess: 100
    });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.3, 2.3, 0.6);
    robot.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.3, 2.3, 0.6);
    robot.add(rightEye);

    robot.position.set(5, 0, 0);
    scene.add(robot);

    // Particle system
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 50;
      positions[i + 1] = (Math.random() - 0.5) * 50;
      positions[i + 2] = (Math.random() - 0.5) * 50;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00D4FF,
      size: 0.1,
      transparent: true,
      opacity: 0.6
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 15;
    camera.position.y = 5;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - window.innerWidth / 2;
      mouseY = event.clientY - window.innerHeight / 2;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Robot animation
      robot.rotation.y += 0.01;
      robot.position.y = Math.sin(Date.now() * 0.001) * 0.5;
      robot.rotation.x = mouseY * 0.0005;
      robot.rotation.z = mouseX * 0.0005;

      // Particle animation
      particleSystem.rotation.y += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;
    robotRef.current = robot;

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="three-container" />;
}
