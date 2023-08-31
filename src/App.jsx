import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Scene from './components/Scene'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'



function App() {

  const { bgColor } = useControls({
    bgColor: '#6FD2FF',
  })

  return (
    <>
      <Canvas className='h-screen'>
        <color args={[bgColor]} attach="background" />
        <Scene />
      </Canvas>
    </>
  )
}

export default App
