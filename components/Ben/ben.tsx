import { MeshTransmissionMaterial, Text, useGLTF } from "@react-three/drei"
import { useThree, useFrame } from "@react-three/fiber"
import { useControls } from "leva";
import React, { useRef } from "react"


export default function Ben() {
    const { scene, nodes } = useGLTF('/donut.glb')
    const { viewport } = useThree();
    const mesh = useRef();
    console.log("HERE ARE THE NODES")
    console.log(nodes)

    useFrame(() => {
        mesh.current.rotation.x += 0.01
        // mesh.current.rotation.y += 0.02
        mesh.current.rotation.z += 0.02
    })

    const materialProps = useControls({
        thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
        roughness: { value: 0.0, min: 0, max: 1, step: 0.1 },
        transmission: { value: 1, min: 0, max: 1, step: 0.05 },
        ior: { value: 1.2, min: 0, max: 3, step: 0.05 },
        chromaticAbe: { value: 0.2, min: 0, max: 1, step: 0.05 },
        backside: { value: true},
    })

    return (
        <group scale={viewport.width / 20}>
            <Text position={[0, 0, -0.5]}>
                hello my name is ben
            </Text>
            <mesh ref={mesh} geometry={nodes.Torus001.geometry} scale={2}>
                <MeshTransmissionMaterial {...materialProps}/>
            </mesh>
        </group>
    )
}