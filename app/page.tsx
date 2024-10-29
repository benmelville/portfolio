'use client';
import Link from "next/link";
import styles from "./page.module.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Canvas } from "@react-three/fiber";
import { PointLight } from "three";
import Scene from "@/components/Ben/scene";
import dynamic from "next/dynamic";

const BenScene = dynamic(() => import("@/components/Ben/scene"), {
   ssr: false // only render client-side
  })

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
    </div>
    <aside>
      hi, im ben welcome to my website!
    </aside>
    <BenScene />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={1.5}>
        <h2>web dev is fun!</h2>
      </ParallaxLayer>


      </Parallax>
  );
}
