import { useState } from "react";
import Image1 from "/Images/1.jpg";
import Image2 from "/Images/2.jpg";
import Image3 from "/Images/3.jpg";
import Image4 from "/Images/4.jpg";
import Image5 from "/Images/5.jpg";
import Image6 from "/Images/6.jpg";

const filters = [
  { label: "All", value: "all", count: 6 },
  { label: "Branding", value: "branding", count: 3 },
  { label: "Illustration", value: "illustration", count: 3 },
  { label: "Photography", value: "photography", count: 3 },
  { label: "Web Design", value: "web-design", count: 4 },
];

const galleryItems = [
  { id: 1, categories: ["all", "web-design"], image: Image1 },
  { id: 2, categories: ["all", "photography", "web-design"], image: Image2 },
  { id: 3, categories: ["all", "branding", "web-design"], image: Image3 },
  { id: 4, categories: ["all", "branding", "illustration"], image: Image4 },
  {
    id: 5,
    categories: [
      "all",
      "branding",
      "illustration",
      "photography",
      "web-design",
    ],
    image: Image5,
  },
  { id: 6, categories: ["all", "illustration", "photography"], image: Image6 },
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <section className="pt-[100px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
          <h2 className="text-4xl font-bold mb-6 lg:mb-0">
            Work Showcase<span className="text-[#ffae00]">.</span>
          </h2>
          <ul className="flex flex-wrap gap-6 text-sm lg:text-base font-light uppercase">
            {filters.map((filter) => (
              <li
                key={filter.value}
                className={`relative cursor-pointer transition-all pb-1 ${
                  activeFilter === filter.value
                    ? "text-black font-medium border-b-2 border-[#ffae00]"
                    : "text-gray-500 hover:text-black"
                }`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
                <sup className="ml-1 text-xs opacity-70">[{filter.count}]</sup>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems
            .filter((item) =>
              activeFilter === "all"
                ? true
                : item.categories.includes(activeFilter)
            )
            .map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-md"
              >
                <img
                  src={item.image}
                  alt="gallery"
                  className="w-full grayscale group-hover:grayscale-0 transition duration-500 rounded-md"
                />
                <div className="absolute left-5 right-5 bottom-5 translate-y-[200px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <div className="bg-black text-white p-6 rounded-md">
                    <div className="text-xs uppercase tracking-widest mb-2">
                      <span className="relative pr-12">
                        Graphic
                        <span className="absolute right-0 top-1/2 w-10 border-b-2 border-[#ffae00] -translate-y-1/2" />
                      </span>
                    </div>
                    <h5 className="text-lg font-semibold uppercase">
                      <a href="#" className="hover:underline">
                        Fimlor Experience
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
