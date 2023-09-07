import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Scene from './components/Scene'
import { Canvas } from '@react-three/fiber'

function App() {


  return (
    <>
      <Canvas className='h-screen bg-melon'>
        <Scene />
      </Canvas>
    </>
  )
}

export default App
