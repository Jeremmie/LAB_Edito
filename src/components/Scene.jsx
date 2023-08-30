import React from "react"
import * as THREE from 'three'
import { Html, OrbitControls } from "@react-three/drei"
import { useControls } from 'leva'

export default function Scene() {
    const { position, positionText, color, generalLight, directionalLight } = useControls({
        position: {
            value: { x: 0, y: 0 },
            min: - 10,
            max: 10,
            step: 0.01,
            joystick: 'invertY',
        },
        positionText: {
            value: { x: 1, y: -0.2, z: 1 },
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
            <Html distanceFactor={10} position={[positionText.x, positionText.y, positionText.z]} className="bg-gunmetal p-5 rounded-lg text-melon w-fit opacity-75

">
                <h1>Coucou</h1>
                <p>ici on peut raconter l'histoire de la CGN</p>
            </Html>
            <meshToonMaterial color={color} />
        </mesh>
    </>)
}