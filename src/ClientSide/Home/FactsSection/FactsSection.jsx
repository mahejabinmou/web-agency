// import CountUp from "react-countup";
// import BgImage from "/Images/image-1.jpg";
// import Image5 from "../../../../public/Images/featured-image-5.jpg";

// const FactsSection = () => {
//   const facts = [
//     { title: "Projects Completed", end: 8705, duration: 4 },
//     { title: "Active clients", end: 480, duration: 3 },
//     { title: "cups of coffee", end: 626, duration: 3 },
//     { title: "happy clients", end: 9704, duration: 4 },
//   ];

//   return (
//     <section className="relative text-white">
//       {/* Background */}
//       <div className="relative bg-[#1c1e22] pt-28 pb-[120px]">
//         <img
//           src={BgImage}
//           alt="Background"
//           className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale z-0"
//         />
//         <div className="relative z-10 max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16">
//             {facts.map((fact, index) => (
//               <div key={index} className="text-center relative">
//                 <div className="relative pt-12">
//                   <div className="absolute top-0 left-0 right-0 h-1 bg-[#ffae00] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
//                   <h3 className="text-[80px] font-light leading-none">
//                     <CountUp end={fact.end} duration={fact.duration} />
//                   </h3>
//                   <p className="uppercase text-sm tracking-wider mt-2">
//                     {fact.title}
//                   </p>
//                 </div>
//                 {index !== facts.length - 1 && (
//                   <div className="hidden lg:block absolute top-0 right-0 bottom-7 w-px bg-white bg-opacity-15" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Trusted Section */}
//       <div className="bg-white text-black relative z-10 -mt-[240px] pb-20">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10">
//           {/* Left Column */}
//           <div className="lg:w-[40%] flex-shrink-0">
//             <div className="bg-[#ffae00] rounded-tl-lg rounded-tr-lg text-center px-10 py-20 text-xl font-semibold relative">
//               <span>We’re Committed To Deliver High Quality Projects.</span>
//               <div className="absolute -bottom-10 left-0 w-[50px] h-[40px] bg-[url('/images/icons/curve-down-left.png')] bg-no-repeat"></div>
//             </div>

//             <div className="divide-y divide-gray-200">
//               {[
//                 "TOTAL DESIGN FREEDOM FOR EVERYONE",
//                 "BASIC RULES OF RUNNING WEB AGENCY",
//               ].map((text, i) => (
//                 <div key={i} className="flex items-start gap-6 px-8 py-10">
//                   <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#ffae0033] text-[#ffae00] text-2xl font-bold">
//                     {`0${i + 1}`}
//                   </div>
//                   <div>
//                     <h5 className="font-semibold text-lg mb-2">{text}</h5>
//                     <div className="text-sm uppercase tracking-widest text-gray-500">
//                       core features
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="lg:w-[60%] bg-white rounded-tl-lg pt-28 pl-20 pr-10">
//             <div className="mb-10">
//               <h2 className="text-4xl font-bold leading-tight mb-4">
//                 We’re trusted by more <br /> than{" "}
//                 <span className="text-[#ffae00]">6260</span> clients
//                 <span className="text-[#ffae00]">.</span>
//               </h2>
//               <p className="text-gray-600">
//                 There are many variations of passages of Lorem Ipsum available,
//                 but the majority have suffered alteration in some form, simply
//                 free text by injected humour, or randomised.
//               </p>
//             </div>

//             <div className="flex gap-6 items-start">
//               <img
//                 src={Image5}
//                 alt="Feature"
//                 className="w-[250px] rounded-lg grayscale"
//               />
//               <ul className="space-y-3 text-sm text-[#444]">
//                 {[
//                   "Suspe ndisse sagittis leo.",
//                   "Entum estibulum is posuere.",
//                   "If you are going to use passage.",
//                   "Lorem Ipsum on the tend to repeat.",
//                 ].map((item, i) => (
//                   <li
//                     key={i}
//                     className="pl-6 relative before:absolute before:left-0 before:top-[6px] before:w-4 before:h-4 before:text-[#ffae00] before:content-['\2713'] before:font-bold"
//                   >
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FactsSection;

import CountUp from "react-countup";
import BgImage from "/Images/image-1.jpg";
import Image5 from "/Images/featured-image-5.jpg";

const FactsSection = () => {
  const facts = [
    { title: "Projects Completed", end: 8705, duration: 4 },
    { title: "Active clients", end: 480, duration: 3 },
    { title: "cups of coffee", end: 626, duration: 3 },
    { title: "happy clients", end: 9704, duration: 4 },
  ];

  return (
    <section className="relative text-white">
      {/* Background */}
      <div className="relative bg-[#1c1e22] pt-28 pb-[120px]">
        <img
          src={BgImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale z-0"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16">
            {facts.map((fact, index) => (
              <div key={index} className="text-center relative">
                <div className="relative pt-12">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#ffae00] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
                  <h3 className="text-[80px] font-light leading-none">
                    <CountUp end={fact.end} duration={fact.duration}>
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </h3>
                  <p className="uppercase text-sm tracking-wider mt-2">
                    {fact.title}
                  </p>
                </div>
                {index !== facts.length - 1 && (
                  <div className="hidden lg:block absolute top-0 right-0 bottom-7 w-px bg-white bg-opacity-15" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted Section */}
      <div className="bg-white text-black relative z-10 -mt-[220px] pb-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10">
          {/* Left Column */}
          <div className="lg:w-[40%] flex-shrink-0">
            <div className="bg-[#ffae00] rounded-tl-lg rounded-tr-lg text-center px-10 py-20 text-xl font-semibold relative">
              <span>We’re Committed To Deliver High Quality Projects.</span>
              <div className="absolute -bottom-10 left-0 w-[50px] h-[40px] bg-[url('/images/icons/curve-down-left.png')] bg-no-repeat"></div>
            </div>

            <div className="divide-y divide-gray-200">
              {[
                "TOTAL DESIGN FREEDOM FOR EVERYONE",
                "BASIC RULES OF RUNNING WEB AGENCY",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-6 px-8 py-10">
                  <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#ffae0033] text-[#ffae00] text-2xl font-bold">
                    {`0${i + 1}`}
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg mb-2">{text}</h5>
                    <div className="text-sm uppercase tracking-widest text-gray-500">
                      core features
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-[60%] bg-white rounded-tl-lg pt-28 pl-20 pr-10">
            <div className="mb-10">
              <h2 className="text-4xl font-bold leading-tight mb-4">
                We’re trusted by more <br /> than{" "}
                <span className="text-[#ffae00]">6260</span> clients
                <span className="text-[#ffae00]">.</span>
              </h2>
              <p className="text-gray-600">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, simply
                free text by injected humour, or randomised.
              </p>
            </div>

            <div className="flex gap-6 items-start">
              <img
                src={Image5}
                alt="Feature"
                className="w-[250px] rounded-lg grayscale"
              />
              <ul className="space-y-3 text-sm text-[#444]">
                {[
                  "Suspe ndisse sagittis leo.",
                  "Entum estibulum is posuere.",
                  "If you are going to use passage.",
                  "Lorem Ipsum on the tend to repeat.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="pl-6 relative before:absolute before:left-0 before:top-[6px] before:w-4 before:h-4 before:text-[#ffae00] before:content-['\2713'] before:font-bold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
