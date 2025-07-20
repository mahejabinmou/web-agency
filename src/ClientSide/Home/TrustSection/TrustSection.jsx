// TrustedSection.jsx
import React from "react";

const TrustSection = () => {
  return (
    <section className="relative bg-transparent pb-20 z-[2]">
      <div className="container mx-auto -mt-[240px]">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div className="w-full lg:w-5/12">
            <div className="text-center">
              <div className="min-h-[240px] px-6 py-20 bg-orange-500 text-2xl lg:text-4xl font-semibold uppercase text-black rounded-t-md relative">
                <span>We’re Committed To Deliver High Quality Projects.</span>
                <div className="absolute bottom-[-39px] left-0 w-[50px] h-[40px] bg-[url('/images/icons/curve-down-left.png')] bg-no-repeat"></div>
              </div>

              {/* Features */}
              <div className="mt-12">
                {[
                  {
                    number: "01",
                    title: "TOTAL DESIGN FREEDOM FOR EVERYONE",
                  },
                  {
                    number: "02",
                    title: "BASIC RULES OF RUNNING WEB AGENCY",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 border-b border-gray-200 py-6 pl-6"
                  >
                    <div className="w-[60px] h-[60px] bg-orange-200 text-orange-500 text-2xl flex items-center justify-center rounded-full">
                      {feature.number}
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-black mb-1">
                        {feature.title}
                      </h5>
                      <p className="uppercase text-sm tracking-wide text-gray-500">
                        core features
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-7/12 relative z-[3]">
            <div className="bg-white p-10 pt-28 rounded-tl-md relative">
              <div className="absolute top-0 right-0 h-full w-[2000px] bg-white -z-10" />

              <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-4">
                We’re trusted by more <br />
                than 6260 clients<span className="text-orange-500">.</span>
              </h2>
              <p className="mb-8 text-gray-600">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, simply
                free text by injected humour, or randomised.
              </p>

              <div className="flex items-start gap-6">
                <img
                  src="/images/resource/featured-image-5.jpg"
                  alt=""
                  className="w-[250px] rounded grayscale"
                />
                <ul className="text-gray-700 space-y-3">
                  <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-orange-500">
                    Suspe ndisse sagittis leo.
                  </li>
                  <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-orange-500">
                    Entum estibulum is posuere.
                  </li>
                  <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-orange-500">
                    If you are going to use passage.
                  </li>
                  <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-orange-500">
                    Lorem Ipsum on the tend to repeat.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
