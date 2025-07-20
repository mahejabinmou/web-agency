import { useState } from "react";
import Image6 from "/Images/featured-image-6.jpg";

const tabs = [
  {
    label: "Our Mission",
    content:
      "There are many variations of passages of avaialable but the majority have in some form, by injected humou or words which don't look even slightly believable. There are many variations of but the majority have suffered.",
  },
  {
    label: "Our Vision",
    content:
      "There are many variations of passages of avaialable but the majority have in some form, by injected humou or words which don't look even slightly believable. There are many variations of but the majority have suffered.",
  },
  {
    label: "Our History",
    content:
      "There are many variations of passages of avaialable but the majority have in some form, by injected humou or words which don't look even slightly believable. There are many variations of but the majority have suffered.",
  },
];

const AgencySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-white bg-[url('/Images/pattern-2.png')] bg-repeat bg-left-top">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div className="lg:w-1/2">
            <div className="mb-10">
              <h2 className="text-4xl font-bold leading-tight mb-4">
                Best design Agency <br /> solutions
                <span className="text-[#ffae00]">.</span>
              </h2>
            </div>
            <div>
              <div className="flex  flex-col lg:flex-wrap gap-4 mb-8">
                {tabs.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`py-3 px-6 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all border-b-2 ${
                      activeTab === i
                        ? "bg-[#ffae00] text-white border-[#ffae00]"
                        : "bg-gray-100 text-gray-800 border-transparent hover:bg-[#ffae00] hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="text-gray-600 leading-loose">
                {tabs[activeTab].content}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2">
            <p className="text-gray-600 leading-loose mb-10">
              There are many variations of passages of available but the
              majority have suffered alteration in some form, by injected humou
              or randomised words which don't look even slightly believable.
            </p>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <img
                src={Image6}
                alt="Featured"
                className="w-60 h-60 rounded-full grayscale"
              />
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "Nsectetur cing elit.",
                  "Suspe ndisse suscipit sagittis leo.",
                  "Entum estibulum dignissim posuere.",
                  "If you are going to use a passage.",
                  "Lorem Ipsum on the tend to repeat.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-[#ffae00]"
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

export default AgencySection;
