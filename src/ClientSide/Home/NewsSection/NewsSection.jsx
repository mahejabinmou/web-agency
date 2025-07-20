// import news1 from "/Images/news-1.jpg";
// import news2 from "/Images/news-2.jpg";
// import news3 from "/Images/news-3.jpg";
// import { FaClock, FaUserCircle, FaComments } from "react-icons/fa";

// const newsData = [
//   {
//     image: news1,
//     date: "20 Mar",
//     author: "Admin",
//     comments: 2,
//     title: "basic rules of running web agency business",
//     description:
//       "Lorem ipsum is simply free text used by copytyping refreshing.",
//   },
//   {
//     image: news2,
//     date: "20 Mar",
//     author: "Admin",
//     comments: 2,
//     title: "Delivering the best digital marketing",
//     description:
//       "Lorem ipsum is simply free text used by copytyping refreshing.",
//   },
//   {
//     image: news3,
//     date: "20 Mar",
//     author: "Admin",
//     comments: 2,
//     title: "Introducing the latest linoor features",
//     description:
//       "Lorem ipsum is simply free text used by copytyping refreshing.",
//   },
// ];

// const NewsSection = () => {
//   return (
//     <section className="py-28 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold uppercase">
//             Latest news & articles<span className="text-[#ffae00]">.</span>
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {newsData.map((item, index) => (
//             <div key={index} className="group   overflow-hidden relative">
//               <div className="relative">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-auto rounded-lg"
//                 />
//                 <div className="absolute bottom-0 left-0 w-full px-4 pb-3">
//                   <ul className="flex flex-wrap items-center gap-3 text-sm text-[#666] bg-white bg-opacity-90 rounded-md px-4 py-2">
//                     <li className="flex items-center gap-1">
//                       <FaClock className="text-[#ffae00]" /> {item.date}
//                     </li>
//                     <li className="flex items-center gap-1">
//                       <FaUserCircle className="text-[#ffae00]" /> {item.author}
//                     </li>
//                     <li className="flex items-center gap-1">
//                       <FaComments className="text-[#ffae00]" /> {item.comments}{" "}
//                       Comments
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="p-6 text-center">
//                 <h5 className="text-xl font-semibold mb-3 hover:underline">
//                   <a href="#">{item.title}</a>
//                 </h5>
//                 <p className="text-gray-600 text-sm mb-4">{item.description}</p>
//                 <div className="flex justify-center">
//                   <a
//                     href="#"
//                     className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 hover:bg-[#ffae00] text-white text-sm"
//                   >
//                     →
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsSection;

import news1 from "/Images/news-1.jpg";
import news2 from "/Images/news-2.jpg";
import news3 from "/Images/news-3.jpg";
import { FaClock, FaUserCircle, FaComments } from "react-icons/fa";

const newsData = [
  {
    image: news1,
    date: "20 Mar",
    author: "Admin",
    comments: 2,
    title: "basic rules of running web agency business",
    description:
      "Lorem ipsum is simply free text used by copytyping refreshing.",
  },
  {
    image: news2,
    date: "20 Mar",
    author: "Admin",
    comments: 2,
    title: "Delivering the best digital marketing",
    description:
      "Lorem ipsum is simply free text used by copytyping refreshing.",
  },
  {
    image: news3,
    date: "20 Mar",
    author: "Admin",
    comments: 2,
    title: "Introducing the latest linoor features",
    description:
      "Lorem ipsum is simply free text used by copytyping refreshing.",
  },
];

const NewsSection = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase">
            Latest news & articles<span className="text-[#ffae00]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="group  overflow-hidden relative transition duration-500 "
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto rounded-lg transform transition duration-500 group-hover:scale-105 group-hover:grayscale"
                />
                <div className="absolute bottom-0 left-0 w-full px-4 pb-3">
                  <ul className="flex flex-wrap items-center gap-3 text-sm text-[#666] bg-white bg-opacity-90 rounded-md px-4 py-2">
                    <li className="flex items-center gap-1">
                      <FaClock className="text-[#ffae00]" /> {item.date}
                    </li>
                    <li className="flex items-center gap-1">
                      <FaUserCircle className="text-[#ffae00]" /> {item.author}
                    </li>
                    <li className="flex items-center gap-1">
                      <FaComments className="text-[#ffae00]" /> {item.comments}{" "}
                      Comments
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-6 text-center">
                <h5 className="text-xl font-semibold mb-3">
                  <a
                    href="#"
                    className="text-black hover:text-[#ffae00] transition-colors duration-300"
                  >
                    {item.title}
                  </a>
                </h5>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 hover:bg-[#ffae00] text-white text-sm transition duration-300"
                  >
                    →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
