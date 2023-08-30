import React from "react"
import * as THREE from 'three'
import { OrbitControls } from "@react-three/drei"

export default function Scene() {

    return (<>
        <OrbitControls />
        <mesh scale={3} rotation-y={2.5}>
            <boxGeometry />
        </mesh>
    </>)
}