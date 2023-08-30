import { useGLTF } from '@react-three/drei'
import { MeshToonMaterial } from 'three';

export default function Terrain() {
    const modelTerrain = useGLTF('../src/assets/model/terrain.glb')

    return (<>
        <mesh scale={10} geometry={modelTerrain.nodes.terrain.geometry}>
            <meshToonMaterial color={'red'} />
        </mesh>
    </>)
}