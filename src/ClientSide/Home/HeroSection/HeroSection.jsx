/* eslint-disable no-unused-vars */
// // import { useEffect, useState } from "react";
// // import { GoArrowDown, GoArrowUp } from "react-icons/go";
// // import { MdArrowOutward } from "react-icons/md";

// // // Sample Slide Data
// // const slides = [
// //   {
// //     id: 1,
// //     bgImage: "/Images/8.jpg",
// //     title: "Transform Your Space with Style",
// //     description:
// //       "Explore our extensive range of high-quality products and services tailored just for you. Whether you're looking for interior design we’ve got everything you need to make your experience unforgettable. Start your journey now and discover what makes us stand out.",
// //     buttonText: "Contact us",
// //   },
// //   {
// //     id: 2,
// //     bgImage: "/Images/9.jpg",
// //     title: "Transform Your Space with Style",
// //     description:
// //       "Explore our extensive range of high-quality products and services tailored just for you. Whether you're looking for interior design we’ve got everything you need to make your experience unforgettable. Start your journey now and discover what makes us stand out.",
// //     buttonText: "Contact us",
// //   },
// // ];

// // const HeroSection = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);

// //   // Handle Slide Change
// //   const handleSlideChange = (direction) => {
// //     if (direction === "up") {
// //       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
// //     } else if (direction === "down") {
// //       setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
// //     }
// //   };

// //   // Auto-slide functionality
// //   useEffect(() => {
// //     const autoSlide = setInterval(() => {
// //       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
// //     }, 5000); // Change slide every 5 seconds

// //     // Clear the interval when the component unmounts
// //     return () => clearInterval(autoSlide);
// //   }, []);

// //   const { bgImage, title, description, buttonText } = slides[currentSlide];

// //   return (
// //     <div className="relative h-[676px] overflow-hidden">
// //       {/* Background Image */}
// //       <div
// //         style={{
// //           backgroundImage: `url(${bgImage})`,
// //         }}
// //         className="bg-no-repeat bg-center bg-cover w-full h-full transition-all duration-500 ease-in-out"
// //       ></div>

// //       {/* Content Section */}
// //       <div
// //         className="absolute inset-0  md:text-left sectionGap md:sectionGap
// //       flex flex-col justify-center items-center  text-center"
// //       >
// //         <div className="hidden lg:block">
// //           <div className="flex items-center mt-[12px] ">
// //             <div className="w-[120px] h-[1px] bg-gray-300"></div>
// //             <h1 className="text-[#FFFFFF] pb-[16px] heroHead  text-center mx-4">
// //               {title}
// //             </h1>
// //             <div className="w-[120px] h-[1px] bg-gray-300"></div>
// //           </div>
// //         </div>

// //         <div className=" lg:hidden  block   text-[#FFFFFF] pb-[16px] heroHead  text-center">
// //           {title}
// //         </div>

// //         <p className="text-[#FFFFFF]/80 pb-[40px] heroPara text-center font-Inter max-w-[768px]">
// //           {description}
// //         </p>
// //         <div className="globalBtnDiv  mx-auto">
// //           <button className="globalBtn ">
// //             {buttonText} <MdArrowOutward />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Scroll Arrows */}
// //       <div className=" hidden lg:block ">
// //         <div className="absolute   right-[30px] top-[320px] transform -translate-y-1/2 flex flex-col items-center gap-4 z-50">
// //           {/* Up Arrow */}
// //           <button
// //             onClick={() => handleSlideChange("up")}
// //             className="bg-transparent border border-[#FFFFFF] text-white p-3 rounded-full hover:bg-gray-700 transition duration-300"
// //           >
// //             <GoArrowUp className="w-6 h-6" />
// //           </button>

// //           {/* Down Arrow */}
// //           <button
// //             onClick={() => handleSlideChange("down")}
// //             className="bg-transparent border border-[#FFFFFF] text-white p-3 rounded-full hover:bg-gray-700 transition duration-300"
// //           >
// //             <GoArrowDown className="w-6 h-6" />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HeroSection;

// import { useRef } from "react";
// import Slider from "react-slick";
// import { GoArrowDown, GoArrowUp } from "react-icons/go";
// import { MdArrowOutward } from "react-icons/md";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Slide Data
// const slides = [
//   {
//     id: 1,
//     bgImage: "/Images/8.jpg",
//     title: "WELCOME TO LINOOR AGENCY",
//     description: "SMART WEB DESIGN AGENCY",
//     buttonText: "Discover More",
//   },
//   {
//     id: 2,
//     bgImage: "/Images/9.jpg",
//     title: "WELCOME TO LINOOR AGENCY",
//     description: "SMART WEB DESIGN AGENCY",
//     buttonText: "Discover More",
//   },
// ];

// const HeroSection = () => {
//   const sliderRef = useRef(null);

//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     speed: 700,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     pauseOnHover: false,
//   };

//   const handleSlideChange = (direction) => {
//     if (!sliderRef.current) return;
//     direction === "up"
//       ? sliderRef.current.slickNext() // 👉 go right
//       : sliderRef.current.slickPrev(); // 👈 go left
//   };

//   return (
//     <div className="relative h-[676px] overflow-hidden">
//       <Slider ref={sliderRef} {...settings}>
//         {slides.map(({ id, bgImage, title, description, buttonText }) => (
//           <div key={id}>
//             <div
//               style={{ backgroundImage: `url(${bgImage})` }}
//               className="bg-no-repeat bg-center bg-cover w-full h-[676px] transition-all duration-500 ease-in-out relative"
//             >
//               {/* Content */}
//               <div className="absolute inset-0 flex flex-col justify-center items-start sectionGap md:sectionGap text-left z-10 bg-black/40 px-6 md:px-20">
//                 <div className=" text-white pb-[16px] heroHead">{title}</div>
//                 <div className=" text-white pb-[16px] text-[100px] leading-[100px] max-w-[1000px] font-bold">
//                   {description}
//                 </div>

//                 <div className="globalBtnDiv">
//                   <button className="globalBtn">{buttonText}</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>

//       {/* Custom Arrows (Still Up/Down, but controlling Left/Right slides) */}
//       <div className="hidden lg:block">
//         <div className="absolute right-[30px] top-[320px] transform -translate-y-1/2 flex flex-col items-center gap-4 z-50">
//           <button
//             onClick={() => handleSlideChange("up")}
//             className="bg-transparent border border-white text-white p-3 rounded-full hover:bg-gray-700 transition duration-300"
//           >
//             <GoArrowUp className="w-6 h-6" />
//           </button>
//           <button
//             onClick={() => handleSlideChange("down")}
//             className="bg-transparent border border-white text-white p-3 rounded-full hover:bg-gray-700 transition duration-300"
//           >
//             <GoArrowDown className="w-6 h-6" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// HeroSection.jsx with animated content on every slide
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  GoArrowDown,
  GoArrowLeft,
  GoArrowRight,
  GoArrowUp,
} from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Slide Data
const slides = [
  {
    id: 1,
    bgImage: "/Images/8.jpg",
    curvedOverlay: "/Images/right-curved-bg.png",
    title: "WELCOME TO LINOOR AGENCY",
    description: "SMART WEB DESIGN AGENCY",
    buttonText: "Discover More",
  },
  {
    id: 2,
    bgImage: "/Images/9.jpg",
    curvedOverlay: "/Images/right-curved-bg.png",
    title: "WELCOME TO LINOOR AGENCY",
    description: "SMART WEB DESIGN AGENCY",
    buttonText: "Discover More",
  },
];

const HeroSection = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const handleSlideChange = (direction) => {
    if (!sliderRef.current) return;
    direction === "up"
      ? sliderRef.current.slickNext()
      : sliderRef.current.slickPrev();
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative h-[65vh] md:h-[100vh] overflow-hidden bg-transparent">
      <Slider ref={sliderRef} {...settings}>
        {slides.map(
          (
            { id, bgImage, curvedOverlay, title, description, buttonText },
            index
          ) => (
            <div key={id}>
              <div
                style={{ backgroundImage: `url(${bgImage})` }}
                className="bg-no-repeat bg-center bg-cover w-full h-[65vh] md:h-[100vh] pt-16 transition-all duration-500 ease-in-out relative"
              >
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left z-10 bg-black/40 px-4 sm:px-8 md:px-20">
                  {currentSlide === index && (
                    <>
                      <motion.div
                        className="text-white pb-[16px] font-rubik text-[12px] lg:text-[16px] lg:mx-[5%]"
                        initial="hidden"
                        animate="visible"
                        variants={animationVariants}
                        custom={1}
                      >
                        {title}
                      </motion.div>

                      <motion.div
                        className="text-white font-teko  pb-[16px] text-[30px] leading-[40px]  xl:text-[80px] xl:leading-[80px] max-w-[500px] font-bold lg:mx-[5%]"
                        initial="hidden"
                        animate="visible"
                        variants={animationVariants}
                        custom={2}
                      >
                        {description}
                      </motion.div>

                      <motion.div
                        className="globalBtnDiv lg:mx-[5%] mt-10"
                        initial="hidden"
                        animate="visible"
                        variants={animationVariants}
                        custom={3}
                      >
                        <button className="globalBtn">{buttonText}</button>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 700 }}
                        animate={
                          currentSlide === index ? { opacity: 1, x: 0 } : {}
                        }
                        transition={{
                          duration: 0.8,
                          delay: 0.5,
                          ease: "easeInOut",
                        }}
                        className="hidden lg:block right-0 top-0 h-full w-[655px] max-w-full absolute z-20 bg-no-repeat bg-right-bottom"
                        style={{
                          backgroundImage: `url(${curvedOverlay})`,
                          backgroundPosition: "right bottom",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </Slider>
      <div className="hidden lg:block ">
        <div className=" absolute  left-[5px] top-[300px] text-white font-bold flex flex-col gap-[50px]">
          {/* Rotated Text */}
          <p className="transform -rotate-90 heroSecSubHead mb-[30px] whitespace-nowrap">
            9AM-7AM
          </p>
          <p className="transform -rotate-90 heroSecSubHead mb-[30px] whitespace-nowrap">
            MON-FRI
          </p>
        </div>
      </div>

      {/* Custom Arrows */}
      <div className="hidden lg:block">
        <div className="absolute right-[16%] top-[55%] transform -translate-y-1/2 flex flex-col items-center gap-3 z-50">
          <button
            onClick={() => handleSlideChange("up")}
            className="bg-gray-300 text-black p-3 rounded-full hover:bg-white transition duration-300 opacity-30"
          >
            <GoArrowLeft className="size-8 p-1.5" />
          </button>
          <button
            onClick={() => handleSlideChange("down")}
            className="bg-gray-300 text-black p-3 rounded-full hover:bg-white transition duration-300 opacity-30"
          >
            <GoArrowRight className="size-8 p-1.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
