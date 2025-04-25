import { useEffect, useRef } from "react";
import * as THREE from "three";
import textureEarth from '../../assets/2k_earth_daymap.jpg';
import spaceBackground from '../../assets/space_background.jpg';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function EarthImg() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

  
    const scene = new THREE.Scene();
    const backgroundTexture = new THREE.TextureLoader().load(spaceBackground);
    scene.background = backgroundTexture;

    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

   
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);

 
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableRotate = false;

  
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    scene.add(directionalLight);

   
    const earthTexture = new THREE.TextureLoader().load(textureEarth);
    const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
    const earthGeometry = new THREE.SphereGeometry(2, 64, 64);
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    earthMesh.castShadow = true;
    earthMesh.receiveShadow = true;
    scene.add(earthMesh);

  
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const rotationSpeed = 0.005;

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      };
      earthMesh.rotation.y += deltaMove.x * rotationSpeed;
      earthMesh.rotation.x += deltaMove.y * rotationSpeed;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseup', onMouseUp);

    const onResize = () => {
      const { innerWidth, innerHeight } = window;
      renderer.setSize(innerWidth, innerHeight);
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);


    const animate = () => {
      requestAnimationFrame(animate);
      earthMesh.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();


    return () => {
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      renderer.domElement.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', onResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div style={{ borderRadius: 16 }} ref={mountRef} />
    </div>
  );
}
