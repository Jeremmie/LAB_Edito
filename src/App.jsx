import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Scene from './components/Scene'
import { Canvas, useFrame } from "@react-three/fiber";
import { Gltf, ScrollControls, useScroll } from "@react-three/drei";
import { getProject, val } from "@theatre/core";

import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";

function App() {
  const sheet = getProject("Fly Through").sheet("Scene");


  return (
    <>
      <Canvas gl={{ preserveDrawingBuffer: true }} className='h-screen bg-melon'>
        <ScrollControls pages={5}>
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </>
  )
}

export default App
