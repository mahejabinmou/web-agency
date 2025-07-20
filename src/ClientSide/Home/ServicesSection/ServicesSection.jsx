// ServicesSection.jsx with Tailwind equivalents

// import { HiOutlineDesktopComputer } from "react-icons/hi";

// const services = [
//   {
//     title: "Website Development",
//     icon: <HiOutlineDesktopComputer />,
//   },
//   {
//     title: "Graphic Designing",
//     icon: <HiOutlineDesktopComputer />,
//   },
//   {
//     title: "Digital Marketing",
//     icon: <HiOutlineDesktopComputer />,
//   },
//   {
//     title: "SEO & Content Writing",
//     icon: <HiOutlineDesktopComputer />,
//   },
//   {
//     title: "App Development",
//     icon: <HiOutlineDesktopComputer />,
//   },
//   {
//     title: "UI/UX Designing",
//     icon: <HiOutlineDesktopComputer />,
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section className="relative py-[120px] bg-[url('/images/background/pattern-1.png')] bg-repeat bg-top bg-black text-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
//           <div>
//             <h2 className="text-4xl font-bold leading-snug mb-4">
//               We Shape the Perfect <br /> Solutions
//               <span className="text-[#ffae00]">.</span>
//             </h2>
//             <p className="text-[#999b9f] text-lg">
//               We are committed to providing our customers with exceptional
//               service while offering our employees the best training.
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="relative group bg-[#111111] rounded-lg p-10 overflow-hidden transition-all duration-500 hover:bg-[#ffae00]"
//             >
//               <div className="absolute left-6 top-6 text-[32px] md:text-[40px] text-white/10 font-bold">
//                 0{idx + 1}
//               </div>

//               <div className="text-[#ffae00] group-hover:text-black text-5xl mb-6 transition-all duration-500 z-10 relative">
//                 {service.icon}
//               </div>

//               <h6 className="text-base font-semibold uppercase tracking-wide text-white group-hover:text-black transition-all duration-500">
//                 <a
//                   href="#"
//                   className="block transition-all duration-500 group-hover:underline"
//                 >
//                   {service.title}
//                 </a>
//               </h6>

//               <div className="absolute bottom-0 right-[-70px] w-[100px] h-[80%] bg-black opacity-20 transform scale-x-0 skew-x-0 group-hover:scale-x-100 group-hover:skew-x-[-35deg] transition-all duration-500 ease-in-out" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

// import { HiOutlineDesktopComputer } from "react-icons/hi";

// const services = [
//   {
//     title: "Website Development",
//     icon: <HiOutlineDesktopComputer />,
//   },
//   {
//     title: "Graphic Designing",
//     icon: <HiOutlineDesktopComputer />,
//   },
//   {
//     title: "Digital Marketing",
//     icon: <HiOutlineDesktopComputer />,
//   },
//   {
//     title: "SEO & Content Writing",
//     icon: <HiOutlineDesktopComputer />,
//   },
//   {
//     title: "App Development",
//     icon: <HiOutlineDesktopComputer />,
//   },
//   {
//     title: "UI/UX Designing",
//     icon: <HiOutlineDesktopComputer />,
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section className="relative py-[120px] bg-[url('/images/background/pattern-1.png')] bg-repeat bg-top bg-black text-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
//           <div>
//             <h2 className="text-4xl font-bold leading-snug mb-4">
//               We Shape the Perfect <br /> Solutions
//               <span className="text-[#ffae00]">.</span>
//             </h2>
//             <p className="text-[#999b9f] text-lg">
//               We are committed to providing our customers with exceptional
//               service while offering our employees the best training.
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="relative group bg-[#111111] rounded-lg p-10 overflow-hidden transition-all duration-500 hover:bg-[#ffae00]"
//             >
//               <div className="flex justify-between items-start relative z-10">
//                 <div className="text-[32px] md:text-[40px] text-white/10 font-bold">
//                   0{idx + 1}
//                 </div>
//                 <div className="text-[#ffae00] group-hover:text-black text-5xl transition-all duration-500">
//                   {service.icon}
//                 </div>
//               </div>

//               <h6 className="mt-20 text-base font-semibold uppercase tracking-wide text-white group-hover:text-black transition-all duration-500">
//                 <a
//                   href="#"
//                   className="block transition-all duration-500 group-hover:underline"
//                 >
//                   {service.title}
//                 </a>
//               </h6>

//               <div className="absolute bottom-0 right-[-70px] w-[100px] h-[80%] bg-black opacity-20 transform scale-x-0 skew-x-0 group-hover:scale-x-100 group-hover:skew-x-[-35deg] transition-all duration-500 ease-in-out" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import { HiOutlineDesktopComputer } from "react-icons/hi";

const services = [
  {
    title: "Website Development",
    icon: <HiOutlineDesktopComputer />,
  },
  {
    title: "Graphic Designing",
    icon: <HiOutlineDesktopComputer />,
  },
  {
    title: "Digital Marketing",
    icon: <HiOutlineDesktopComputer />,
  },
  {
    title: "SEO & Content Writing",
    icon: <HiOutlineDesktopComputer />,
  },
  {
    title: "App Development",
    icon: <HiOutlineDesktopComputer />,
  },
  {
    title: "UI/UX Designing",
    icon: <HiOutlineDesktopComputer />,
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-[120px] bg-[url('/Images/we-do-section-bg-dark.jpg')] bg-repeat bg-top bg-black text-white ">
      <div className="max-w-7xl mx-auto px-6">
        {/* content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 mb-16">
          <div className="lg:col-span-2">
            <h2 className="globalHead mb-4">
              We Shape the Perfect <br /> Solutions
              <span className="text-[#ffae00]">.</span>
            </h2>
            <p className="text-[#999b9f] text-lg">
              We are committed to providing our customers with exceptional
              service while offering our employees the best training.
            </p>
          </div>

          {/* First two service cards aligned next to content */}
          {services.slice(0, 2).map((service, idx) => (
            <div
              key={idx}
              className="relative group bg-[#111111] rounded-lg px-10 pt-10 pb-16 overflow-hidden transition-all duration-500 hover:bg-[#ffae00]"
            >
              <div className="absolute left-10 top-10 text-[32px] md:text-[40px] text-white/10 font-bold z-0">
                0{idx + 1}
              </div>
              <div className="absolute right-10 top-10 text-[#ffae00] group-hover:text-black text-5xl transition-all duration-500 z-10">
                {service.icon}
              </div>

              <div className="relative z-20 mt-28">
                <h6 className="text-base font-semibold uppercase tracking-wide text-white group-hover:text-black transition-all duration-500">
                  <a
                    href="#"
                    className="block transition-all duration-500 group-hover:underline"
                  >
                    {service.title}
                  </a>
                </h6>
              </div>

              <div className="absolute bottom-0 right-[-70px] w-[100px] h-[80%] bg-black opacity-20 transform scale-x-0 skew-x-0 group-hover:scale-x-100 group-hover:skew-x-[-35deg] transition-all duration-500 ease-in-out" />
            </div>
          ))}
        </div>

        {/* Remaining cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(2).map((service, idx) => (
            <div
              key={idx + 2}
              className="relative group bg-[#111111] rounded-lg px-10 pt-10 pb-16 overflow-hidden transition-all duration-500 hover:bg-[#ffae00]"
            >
              <div className="absolute left-10 top-10 text-[32px] md:text-[40px] text-white/10 font-bold z-0">
                0{idx + 3}
              </div>
              <div className="absolute right-10 top-10 text-[#ffae00] group-hover:text-black text-5xl transition-all duration-500 z-10">
                {service.icon}
              </div>

              <div className="relative z-20 mt-28">
                <h6 className="text-base font-semibold uppercase tracking-wide text-white group-hover:text-black transition-all duration-500">
                  <a
                    href="#"
                    className="block transition-all duration-500 group-hover:underline"
                  >
                    {service.title}
                  </a>
                </h6>
              </div>

              <div className="absolute bottom-0 right-[-70px] w-[100px] h-[80%] bg-black opacity-20 transform scale-x-0 skew-x-0 group-hover:scale-x-100 group-hover:skew-x-[-35deg] transition-all duration-500 ease-in-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
