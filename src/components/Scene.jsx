import React from "react"
import * as THREE from 'three'

export default function Scene() {

    return (<>

        <mesh scale={3} rotation-y={2.5}>
            <boxGeometry />
        </mesh>
    </>)
}