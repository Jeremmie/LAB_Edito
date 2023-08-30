import React from "react"
import * as THREE from 'three'
import { OrbitControls } from "@react-three/drei"
import { useControls } from 'leva'

export default function Scene() {
    const { position, color, generalLight, directionalLight } = useControls({
        position: {
            value: { x: 0, y: 0 },
            min: - 10,
            max: 10,
            step: 0.01,
            joystick: 'invertY',
        },
        color: '#ff0000',
        generalLight: {
            value: 2,
            min: - 10,
            max: 10,
            step: 0.01,
        },
        directionalLight: {
            value: 1.5,
            min: - 10,
            max: 10,
            step: 0.01,
        }
    })
    return (<>
        <OrbitControls />
        <ambientLight intensity={generalLight} />
        <directionalLight position={[1, 2, 3]} intensity={directionalLight} />
        <mesh position={[position.x, position.y, 0]} scale={1}>
            <torusKnotGeometry />
            <meshToonMaterial color={color} />
        </mesh>
    </>)
}