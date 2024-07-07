import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import ModelViewer from "./ModelViewer";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
gsap.registerPlugin(ScrollTrigger);


const Model = () => {


  // camera control for the model view
  const cameraControlWatch = useRef();

  // model
  const watch = useRef(new THREE.Group());
  const divRef = useRef()


  // rotation
  const [watchRotation, setWatchRotation] = useState(0);


  useGSAP(() => {
    const div = divRef.current

    gsap.to('#heading1', { 
        y: 0, 
        opacity: 1,
        scrollTrigger: {
            trigger: div,
            start: 'top bottom',
            end: 'bottom bottom-=10%',
            ease: "linear",
            scrub:true,
        } 
    })
  }, []);

  return (
    <section className="common-padding w-full h-full flex items-center justify-center">
      <div ref={divRef} className="w-[50%]">
        <h1 id="heading1" className="section-heading">
          The New Seiko Watch.
        </h1>

        <div className="flex flex-col items-center mt-24">
          <div className="w-full h-[45vh] md:h-[60vh] overflow-hidden relative">
            <ModelViewer 
              index={1}
              groupRef={watch}
              gsapType="view1"
              controlRef={cameraControlWatch}
              setRotationState={setWatchRotation}

            />  

            <Canvas
              className="w-full h-full"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden'
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>
          
          <div className=" flex items-center justify-center gap-8 md:gap-20">
              <h3 className=" text-xl underline text-slate-200 font-rubik">Elegant</h3>
              <h3 className=" text-xl underline text-slate-200 font-rubik">Sophisticated</h3>
              <h3 className=" text-xl underline text-slate-200 font-rubik">Timeless</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model