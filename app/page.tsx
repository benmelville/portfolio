'use client';
import Link from "next/link";
import styles from "./page.module.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Canvas } from "@react-three/fiber";
import { PointLight } from "three";

export default function Home() {

  return (
    

      <Parallax pages={4}>
      <ParallaxLayer speed ={0.5}>
      <div className={styles.container}>
        <Link href="/about">
          <h1 className={styles.title}>
            <span>b</span>
            <span>e</span>
            <span>n</span>
            <span className={styles.hoverTitle}>me</span>
            <span>l</span>
            <span>v</span>
            <span>i</span>
            <span>l</span>
            <span>l</span>
            <span>e</span>
          </h1>
        </Link>
        <Canvas>
        <pointLight position={[0, 0, 0]} color="green" intensity={100} />
        <mesh scale={2.5}>
            <sphereGeometry/>
          </mesh>
          <mes
        </Canvas>
    </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={1.5}>
        <h2>web dev is fun!</h2>
      </ParallaxLayer>


      </Parallax>
  );
}
