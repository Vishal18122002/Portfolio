import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import spacemanScene from "../assets/3d/spaceman.glb";
import CanvasLoader from "./Loader";

const Spaceman = ({ scale, position }) => {
  const spacemanRef = useRef();
  const { scene, animations } = useGLTF(spacemanScene);
  const { actions } = useAnimations(animations, spacemanRef);
  const [targetRotation, setTargetRotation] = useState(0); // Target rotation for smoothness

  // Track and normalize mouse position
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1; // Range from -1 to 1
      setTargetRotation(x * 4); // Adjust to control intensity
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Smooth rotation and floating effect
  useFrame(({ clock }) => {
    if (spacemanRef.current) {
      // Smoothly interpolate the rotation for a gradual movement
      spacemanRef.current.rotation.y += (targetRotation - spacemanRef.current.rotation.y) * 0.05;

      // Floating effect
      spacemanRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime()) * 0.2;
    }
  });

  useEffect(() => {
    if (actions["Idle"]) {
      actions["Idle"].play();
    }
  }, [actions]);

  return (
    <mesh ref={spacemanRef} position={position} scale={scale} rotation={[3, 1.5, 0.2]}>
      <primitive object={scene} />
    </mesh>
  );
};

const SpacemanCanvas = ({ scrollContainer }) => {
  const [scale, setScale] = useState([3, 3, 3]);
  const [position, setPosition] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([1.5, 1.5, 1.5]);
        setPosition([0, -0.7, 0]);
      } else if (window.innerWidth < 1024) {
        setScale([2, 2, 2]);
        setPosition([0, -0.6, 0]);
      } else {
        setScale([2,2,2]);
        setPosition([0, -1.5, 0]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollContainer]);

  return (
    <Canvas className="w-full h-screen bg-transparent z-10" camera={{ near: 0.1, far: 1000 }}>
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

        <Spaceman scale={scale} position={position} />
      </Suspense>
    </Canvas>
  );
};

export default SpacemanCanvas;
