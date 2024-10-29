'use client'

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Center, Environment } from "@react-three/drei"
import Ben from "./ben"


export default function Scene() {
    return (
    <Canvas gl={{antialias: true}} dpr={[1, 1.5]}>
        <Environment preset="dawn"/>
        <directionalLight position={[0,3,2]} intensity={2} />
        <Suspense fallback={null}>
            <Center>
                <Ben />
            </Center>
        </Suspense>
    </Canvas>
    )
}