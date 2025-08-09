"use client"

import { useEffect, useState } from "react"
import { useGLTF } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import * as THREE from "three"

export default function PlantViewer({ plant }) {
  const [modelPath, setModelPath] = useState("")

  // This would be replaced with your actual model paths
  useEffect(() => {
    // For demonstration, we're using a placeholder model
    // In a real app, you would map plant.id to the correct model path
    // Example mapping:
    const modelMap = {
      tulsi: "/models/tulsi/tulsi.gltf",
      ashwagandha: "/models/ashwagandha/ashwagandha.gltf",
      neem: "/models/neem/neem.gltf",
      aloe_vera: "/models/aloe/aloe.gltf",
      turmeric: "/models/Turmeric/turmeric.gltf",
      ginger: "/models/Ginger/Ginger.gltf",
      amla: "/models/amla/amla.gltf",
      aswatha: "/models/Aswatha/aswatha.gltf",
      brahmi: "/models/Brahmi/Brahmi.gltf",
      gotu_kola: "/models/Gotu_kola/Gotu_kola.gltf",
      guggul: "/models/Guggul/Guggul.gltf",
      haritaki: "/models/Haritaki/Haritaki.gltf",
      jatamansi: "/models/Jatamansi/jatamansi.gltf",
      punarnava: "/models/Punarnava/Punarnava.gltf",
      shankhpushpi: "/models/Shankhpushpi/shankhpushpi.gltf",
      shilajit: "/models/Shilajit/Shilajit.gltf",
      shatavari: "/models/Shatavari/Shatavari.gltf",
      boswellia: "/models/Boswellia/Boswellia.gltf",
      chamomile: "/models/Chamomile/Chamomile.gltf",
      dandelion: "/models/Dandelion/Dandelion.gltf",
      eucalyptus: "/models/Eucalyptus/Eucalyptus.gltf",
      hibiscus: "/models/Hibiscus/Hibiscus.gltf",
      mulethi: "/models/Mulethi/Mulethi.gltf",
      nettle: "/models/Nettle/Nettle.gltf",
      giloy: "/models/giloy/giloy.gltf",
      arjuna: "/models/arjuna/arjuna.gltf",
      katuki: "/models/katuki/katuki.gltf",
      kapikacchu: "/models/kapikachhu/kapikachhu.gltf",
      peppermint: "/models/peppermint/peppermint.gltf"
      // Add mappings for all your plants
    }

    // If the plant's model exists in the map, use it, otherwise use the placeholder
    setModelPath(modelMap[plant.id] || "/models/Amla/Amla.gltf")
  }, [plant])

  if (!modelPath) return null

  return <Model path={modelPath} scale={plant.scale || 1} />
}

function Model({ path, scale = 1 }) {
  const { scene } = useGLTF(path)
  const { camera } = useThree()

  useEffect(() => {
    // Center the model in the scene
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())

    // Position the model at the center of the scene
    scene.position.x = -center.x
    scene.position.y = -center.y
    scene.position.z = -center.z

    // Adjust camera to fit the model
    const maxDim = Math.max(size.x, size.y, size.z)
    const fov = camera.fov * (Math.PI / 180)
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2))
    cameraZ *= 1.5 // Add some margin

    camera.position.z = cameraZ

    const minZ = box.min.z
    const cameraToFarEdge = minZ < 0 ? -minZ + cameraZ : cameraZ - minZ

    camera.far = cameraToFarEdge * 3
    camera.updateProjectionMatrix()
  }, [scene, camera])

  // Clone the scene to avoid modifying the cached original
  const model = scene.clone()

  return <primitive object={model} scale={scale} />
}

