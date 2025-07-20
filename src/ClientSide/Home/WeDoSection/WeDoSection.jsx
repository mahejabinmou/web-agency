import { useState } from "react";
import Image4 from "/Images/featured-image-4.jpg";

const accordionData = [
  {
    id: 1,
    title: "We help to create visual strategies",
    content:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    id: 2,
    title: "Motion Graphics & Animations",
    content:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    id: 3,
    title: "We help to achieve mutual goals",
    content:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
];

const WeDoSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="relative bg-white bg-[url('/images/background/pattern-2.png')] bg-repeat pt-[100px] ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="relative">
          <div className="mb-10">
            <h2 className="text-[20px] lg:text-4xl uppercase font-bold leading-snug mb-6">
              We do more then ever <br /> platforms
              <span className="text-[#ffae00]">.</span>
            </h2>
            <div className="flex flex-col lg:flex-row items-start gap-6">
              <div className=" w-[300px]   lg:w-[200px] shrink-0 rounded overflow-hidden">
                <img
                  src={Image4}
                  alt="Featured"
                  className="grayscale w-full rounded"
                />
              </div>
              <p className="text-[#444] text-base leading-[34px]">
                There are many variatns of passages the majority have suffered
                alteration in some foor randomised words believable.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Accordion */}
        <div className="relative">
          <div className="space-y-4">
            {accordionData.map((item) => (
              <div
                key={item.id}
                className={`rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.05)] overflow-hidden transition-all`}
              >
                <div
                  className={`cursor-pointer px-10 py-6 text-lg font-semibold uppercase tracking-wide relative flex items-start justify-between ${
                    activeIndex === item.id ? "bg-white" : "bg-white"
                  }`}
                  onClick={() => toggleAccordion(item.id)}
                >
                  <span>
                    <span className="text-[#ffae00] pr-2">{item.id}.</span>
                    {item.title}
                  </span>
                  <span className="text-[#ffae00] text-sm mt-1">
                    {activeIndex === item.id ? "-" : "+"}
                  </span>
                </div>
                {activeIndex === item.id && (
                  <div className="px-10 pb-6 text-[#555] text-sm leading-7">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeDoSection;
