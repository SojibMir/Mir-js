import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        // Spread particles in a wide area
        posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Create material
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.015,
        color: 0x6366f1, // Indigo-500
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
        mouseX = event.clientX / window.innerWidth - 0.5;
        mouseY = event.clientY / window.innerHeight - 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let frameId: number;
    const animate = () => {
        frameId = requestAnimationFrame(animate);

        // Constant rotation
        particlesMesh.rotation.y += 0.0005;
        particlesMesh.rotation.x += 0.0002;

        // Mouse interaction (parallax effect)
        particlesMesh.rotation.y += 0.05 * (mouseX - particlesMesh.rotation.y);
        particlesMesh.rotation.x += 0.05 * (mouseY - particlesMesh.rotation.x);

        renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(frameId);
        
        if (containerRef.current && renderer.domElement) {
            containerRef.current.removeChild(renderer.domElement);
        }
        
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />;
};

export default ThreeBackground;