import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/sofa_chair.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material.001']}
        scale={[0.94, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['Material.001']}
        scale={[0.93, 0.99, 0.99]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials['Material.001']}
        position={[0, 0.23, 0.04]}
        scale={[0.86, 1.02, 0.91]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials['Material.002']}
        position={[0, 0.02, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.material_0}
        position={[0.01, 0.68, -0.48]}
        rotation={[1.24, -0.01, -0.1]}
        scale={[0.4, 0.29, 0.35]}
      />
    </group>
  )
}

useGLTF.preload('/models/sofa_chair.glb')