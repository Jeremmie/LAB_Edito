import { useGLTF } from '@react-three/drei'
import { MeshToonMaterial } from 'three';
import { useControls } from 'leva';

export default function Terrain() {
    const modelTerrain = useGLTF('../src/assets/model/terrain.glb')

    const { color } = useControls({
        color: '#ff0000',
    })

    return (<>
        <mesh scale={10} geometry={modelTerrain.nodes.terrain.geometry}>
            <meshToonMaterial color={color} />
        </mesh>
    </>)
}