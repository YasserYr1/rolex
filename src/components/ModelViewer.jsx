import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import * as THREE from 'three';
import Watch from './Watch';
import { Suspense } from 'react';
import Lights from './Lights';
import Loader from "./Loader";

const ModelViewer = ({ groupRef, gsapType, controlRef, setRotationState }) => {

  return (
    <View
      id={gsapType}
      className={`w-full h-full absolute`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0 ,0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      /> 

      <group ref={groupRef} name={'watch'} position={[0, -1 ,0]}>
        <Suspense fallback={<Loader />}>
          <Watch 
            scale={[23, 23, 23] }
          />
        </Suspense>
      </group>
    </View>
  )
};


export default ModelViewer;
