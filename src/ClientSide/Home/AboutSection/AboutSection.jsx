// import Image1 from "/Images/featured-image-8.jpg";
// import Image2 from "/Images/featured-image-9.jpg";

// const AboutSection = () => {
//   return (
//     <section className="relative bg-white py-28">
//       <div className="absolute left-0 top-0 h-full w-1/2 bg-[#f4f5f8] -ml-[410px] z-0" />
//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
//         {/* Image Column */}
//         <div className="relative flex flex-col items-start">
//           <div className="absolute left-0 top-0 h-[280px] w-[15px] bg-[#ffae00] rounded-md" />
//           <div className="ml-[110px] mb-8 rounded-md overflow-hidden">
//             <img
//               src={Image1}
//               alt="Team Discussion"
//               className="w-full grayscale rounded-md"
//             />
//           </div>
//           <div className="mr-[140px] -mt-[170px] rounded-md overflow-hidden">
//             <img
//               src={Image2}
//               alt="Team Collaboration"
//               className="w-full grayscale rounded-md"
//             />
//           </div>
//         </div>

//         {/* Text Column */}
//         <div className="relative z-10 pl-0 xl:pl-12">
//           <div className="mb-9">
//             <h2 className="text-4xl font-bold leading-snug mb-4">
//               We’re the best agency <br /> in downtown
//               <span className="text-[#ffae00]">.</span>
//             </h2>
//             <div className="text-[#ffae00] text-lg font-light uppercase mb-4">
//               We are committed to providing our customers with exceptional
//               service while offering our employees the best training.
//             </div>
//           </div>
//           <p className="text-[#555] mb-8">
//             Lorem Ipsum is simply dummy text of free available in market the
//             printing and typesetting industry has been the industry's standard
//             dummy text ever.
//           </p>
//           <div className="flex flex-wrap items-start gap-8">
//             <ul className="space-y-3 text-sm text-[#444]">
//               <li className="pl-6 relative before:absolute before:left-0 before:top-[6px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#ffae00]">
//                 Suspe ndisse suscipit sagittis leo.
//               </li>
//               <li className="pl-6 relative before:absolute before:left-0 before:top-[6px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#ffae00]">
//                 Entum estibulum dignissim posuere.
//               </li>
//               <li className="pl-6 relative before:absolute before:left-0 before:top-[6px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#ffae00]">
//                 If you are going to use a passage.
//               </li>
//             </ul>

//             <div className="relative mt-2 ml-6">
//               <div className="w-[90px] h-[90px] bg-black text-white text-sm uppercase font-bold rounded-full flex flex-col items-center justify-center text-center">
//                 Since <br /> 2008
//               </div>
//               <div className="absolute left-[-42px] top-0 h-full border-l-2 border-[#ffae00]" />
//             </div>
//           </div>

//           <div className="pt-10">
//             <a
//               href="#"
//               className="inline-block px-8 py-4 bg-[#ffae00] text-black font-semibold text-sm uppercase tracking-wider rounded hover:opacity-90 transition"
//             >
//               Discover More
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import { FaCheck } from "react-icons/fa";
import Image1 from "/Images/featured-image-1.jpg";
import Image2 from "/Images/featured-image-2.jpg";

const AboutSection = () => {
  return (
    <section>
      <div className="relative bg-white pt-[100px] hidden lg:block">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-[#f4f5f8] -ml-[410px] z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative flex flex-col items-start">
            <div className="absolute left-0 top-0 h-[280px] w-[15px] bg-[#ffae00] rounded-md" />
            <div className="ml-[110px] mb-8 rounded-md overflow-hidden">
              <img
                src={Image1}
                alt="Team Discussion"
                className="w-full grayscale rounded-md"
              />
            </div>
            <div className="mr-[140px] -mt-[170px] rounded-md overflow-hidden">
              <img
                src={Image2}
                alt="Team Collaboration"
                className="w-full grayscale rounded-md"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="relative z-10 pl-0 xl:pl-12">
            <div className="mb-9">
              <h2 className="text-4xl font-bold leading-snug mb-4">
                We’re the best agency <br /> in downtown
                <span className="text-[#ffae00]">.</span>
              </h2>
              <div className="text-[#ffae00] text-lg font-light uppercase mb-4">
                We are committed to providing our customers with exceptional
                service while offering our employees the best training.
              </div>
            </div>
            <p className="text-[#555] mb-8">
              Lorem Ipsum is simply dummy text of free available in market the
              printing and typesetting industry has been the industry's standard
              dummy text ever.
            </p>
            <div className="flex flex-wrap items-start gap-8">
              <ul className="space-y-3 text-sm text-[#444]">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-[#ffae00] mt-1" />
                  Suspe ndisse suscipit sagittis leo.
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-[#ffae00] mt-1" />
                  Entum estibulum dignissim posuere.
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-[#ffae00] mt-1" />
                  If you are going to use a passage.
                </li>
              </ul>

              <div className="relative mt-2 ml-6">
                <div className="w-[90px] h-[90px] bg-black text-white text-sm uppercase font-bold rounded-full flex flex-col items-center justify-center text-center">
                  Since <br /> 2008
                </div>
                <div className="absolute left-[-42px] top-0 h-full border-l-2 border-[#ffae00]" />
              </div>
            </div>

            <div className="pt-10">
              <a
                href="#"
                className="inline-block px-8 py-4 bg-[#ffae00] text-black font-semibold text-sm uppercase tracking-wider rounded hover:opacity-90 transition"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white pt-[100px] hidden:lg block">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-[#f4f5f8] -ml-[410px] z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* Image Column */}

          {/* Text Column */}
          <div className="relative z-10 pl-0 xl:pl-12">
            <div className="mb-9">
              <h2 className="text-4xl font-bold leading-snug mb-4">
                We’re the best agency <br /> in downtown
                <span className="text-[#ffae00]">.</span>
              </h2>
              <div className="text-[#ffae00] text-lg font-light uppercase mb-4">
                We are committed to providing our customers with exceptional
                service while offering our employees the best training.
              </div>
            </div>
            <p className="text-[#555] mb-8">
              Lorem Ipsum is simply dummy text of free available in market the
              printing and typesetting industry has been the industry's standard
              dummy text ever.
            </p>
            <div className="flex flex-wrap items-start gap-8">
              <ul className="space-y-3 text-sm text-[#444]">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-[#ffae00] mt-1" />
                  Suspe ndisse suscipit sagittis leo.
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-[#ffae00] mt-1" />
                  Entum estibulum dignissim posuere.
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-[#ffae00] mt-1" />
                  If you are going to use a passage.
                </li>
              </ul>

              <div className="relative mt-2 ml-6">
                <div className="w-[90px] h-[90px] bg-black text-white text-sm uppercase font-bold rounded-full flex flex-col items-center justify-center text-center">
                  Since <br /> 2008
                </div>
                <div className="absolute left-[-42px] top-0 h-full border-l-2 border-[#ffae00]" />
              </div>
            </div>

            <div className="pt-10">
              <a
                href="#"
                className="inline-block px-8 py-4 bg-[#ffae00] text-black font-semibold text-sm uppercase tracking-wider rounded hover:opacity-90 transition"
              >
                Discover More
              </a>
            </div>
          </div>

          <div className=" flex flex-col items-start">
            {/* <div className=" left-0 top-0 h-[280px] w-[15px] bg-[#ffae00] rounded-md" /> */}
            <div className="mb-8 rounded-md overflow-hidden">
              <img
                src={Image1}
                alt="Team Discussion"
                className="w-full grayscale rounded-md"
              />
            </div>
            <div className=" rounded-md overflow-hidden">
              <img
                src={Image2}
                alt="Team Collaboration"
                className="w-full grayscale rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
