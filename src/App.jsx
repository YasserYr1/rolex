import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { heroVd, rolex1, rolex2, rolex3 } from "./assets";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { TbShoppingBag } from "react-icons/tb";


import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from "react";
import Model from "./components/Model";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);


function App() {
  const titleRef = useRef();
  const paraRef = useRef();
  const buttonRef = useRef();
  const videoRef = useRef();

  useGSAP(() => {
    const title = titleRef.current;
    const paragraph = paraRef.current;
    const button = buttonRef.current;
    const video = videoRef.current;

    const tl = gsap.timeline();
  
    tl.to(title, { opacity: 1, x: 0, duration: 1, delay: 1, ease: 'power1.inOut' })
      .to(button, { opacity: 1, y: 0, duration: 1, ease: 'power1.inOut' }, "-=1")
      .to(paragraph, { opacity: 1, x: 0, duration: 1, ease: 'power1.inOut' }, "-=2");
  
    ScrollTrigger.create({
      trigger: '#content',
      start: 'top bottom',
      end: 'bottom bottom',
      animation: tl,

    });

    ScrollTrigger.create({
      trigger: '#videoDiv',
      start: 'top bottom',
      end: 'bottom bottom',
      onEnter: () => {
        video.play();
      },
      onLeaveBack: () => {
        video.pause();
      },
    });

  }, [])


  return (
    <main className=" h-screen w-full bg-black">
      <header className=' w-full h-[8%] flex items-center'>
        <nav className="w-full h-full flex items-center justify-between">
          <h1 className=" text-white font-bold text-xl pl-28 max-sm:pl-8 font-rubik">C-Watch</h1>

          <div className=" max-md:hidden flex items-center gap-14">
            <a href="#" className=" text-gray-400 text-xl hover:text-white ease-in">Home</a>
            <a href="#" className=" text-gray-400 text-xl hover:text-white ease-in">Product</a>
            <a href="#" className=" text-gray-400 text-xl hover:text-white ease-in">Highlights</a>
            <a href="#" className=" text-gray-400 text-xl hover:text-white ease-in">About-us</a>
            <a href="#" className=" text-gray-400 text-xl hover:text-white ease-in">Features</a>
          </div>

          <div className=" flex items-center justify-center gap-4">
            <TbShoppingBag className=" text-4xl text-white" />
            <button className=" py-2 px-4 bg-white text-zinc font-bold rounded-full mr-28 max-sm:mr-8">Y</button>
          </div>
        </nav>
      </header>

      <section className="h-[92%] flex items-center justify-center flex-col w-full">
        <div className="h-full w-full py-[110px] px-8 grid items-center gap-24 max-[330px]:me-4 max-[330px]:ms-4 relative">
          <div className="relative grid">
            <div className="absolute inset-0 w-[500px] h-[500px] max-[330px]:h[340px] max-[330px]:w-[340px] border-[3px] border-slate-100 rounded-full ms-auto me-auto grid place-items-center">
              <div className="w-[466px] h-[466px] max-[330px]:h[306px] max-[330px]:w-[306px] border-[12px] border-slate-100 rounded-full"></div>
              <h1 className="absolute text-[7.3rem] font-pacifico font-semibold text-slate-400">C-Watch</h1>
            </div>
            <Swiper
              modules={[Navigation]}
              loop={true}
              grabCursor={false}
              slidesPerView="auto"
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              centeredSlides={true}
              breakpoints={{
                768: {
                  centeredSlides: false,
                },
                1152: {
                  centeredSlides: false,
                },
              }}
              effect="slide"
              speed={800}
            >
              <SwiperSlide className="text-center">
                <img
                  src={rolex1}
                  alt=""
                  className={`w-[490px] drop-shadow(-8px 8px 16px hsla(34, 51%, 8%, .4)) mx-auto max-[330px]:w-[300px] max-[330px]:mb-[3rem] mb-24`}
                />
                <h2 className="text-xl font-bold mb-1 max-[330px]:text-[5rem]">Gold Rolex</h2>
                <h3 className="text-lg font-bold mb-1 max-[330px]:text-[5rem]">2799$</h3>
              </SwiperSlide>
              <SwiperSlide className="text-center">
                <img
                  src={rolex3}
                  alt=""
                  className={`w-[490px] drop-shadow(-8px 8px 16px hsla(34, 51%, 8%, .4)) mx-auto max-[330px]:w-[300px] max-[330px]:mb-[3rem] mb-24`}
                />
                <h2 className="text-xl font-bold mb-1 max-[330px]:text-[5rem]">Metal Omega</h2>
                <h3 className="text-lg font-bold mb-1 max-[330px]:text-[5rem]">4000$</h3>
              </SwiperSlide>
              <SwiperSlide className="text-center">
                <img
                  src={rolex2}
                  alt=""
                  className={`w-[490px] drop-shadow(-8px 8px 16px hsla(34, 51%, 8%, .4)) mx-auto max-[330px]:w-[300px] max-[330px]:mb-[3rem] mb-24`}
                />
                <h2 className="text-xl font-bold mb-1 max-[330px]:text-[5rem]">Diamond Rolex</h2>
                <h3 className="text-lg font-bold mb-1 max-[330px]:text-[5rem]">3190$</h3>
              </SwiperSlide>
            </Swiper>
            <div className=" swiper-button-prev absolute text-slate-100">
              <FaArrowLeft />
            </div>
            <div className=" swiper-button-next absolute text-slate-100">
              <FaArrowRight />
            </div>
          </div>
          <footer className="flex justify-between items-center px-[103px]">
            <div className="flex text-lg">ES | EN</div>
            <div className="flex gap-4">
              <a href="" className="text-xl text-slate-100">
                A
              </a>
              <a href="" className="text-xl text-slate-100">
                B
              </a>
              <a href="" className="text-xl text-slate-100">
                C
              </a>
            </div>
          </footer>
        </div>
      </section>

      <section className=" h-full w-full flex items-center justify-between py-20">
        <div id="videoDiv" className=" w-1/2 h-full flex items-center justify-center">
          <div className=" w-[600px] h-[600px]">
            <video ref={videoRef} autoPlay muted playsInline={true} className=" object-cover w-full h-full">
              <source src={heroVd} type="video/mp4"/>
            </video>
          </div>
        </div>
        <div id="content" className=" w-1/2 flex items-start justify-center flex-col px-20 gap-10">
          <h1 ref={titleRef} className=" text-4xl font-bold text-slate-100 translate-x-28 opacity-0 mt-12 font-rubik">DRYDEN AUTOMATIC</h1>
          <p ref={paraRef} className=" text-lg text-slate-200 translate-x-28 opacity-0">
            Introducing the Dryden Automatic, a timepiece that embodies elegance, precision, and timeless sophistication. 
            Crafted with meticulous attention to detail, 
            the Dryden Automatic watch combines classic design with modern innovation to redefine luxury horology.
          
            Engineered with an automatic movement, the Dryden watch boasts exceptional accuracy and reliability, 
            ensuring that every moment is captured with precision. Its sleek stainless steel case exudes understated refinement, 
            while the sapphire crystal lens provides durability and clarity, allowing you to admire the intricate inner workings of the watch.
          </p>
          <button ref={buttonRef} className=" px-5 py-3 text-slate-100 text-xl rounded-2xl bg-blue translate-y-28 opacity-0">Buy Now</button>
        </div>
      </section>

      <Model />
      <Footer />
    </main>
  )
} 

export default App
