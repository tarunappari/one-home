import React from 'react'
import { useGLTF, Clone } from '@react-three/drei'

export function Room(props) {
  const { scene } = useGLTF('/models/living_room.glb')

  return <Clone object={scene} castShadow receiveShadow {...props} />
}

useGLTF.preload('/models/living_room.glb')
