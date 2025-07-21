/* eslint-disable no-unused-vars */
import shape1 from "/Images/call-to-shape-1.png";
import shape2 from "/Images/call-to-shape-2.png";

const CallToSection = () => {
  return (
    <section className="relative z-[1] mt-[-60px] mb-[-60px]">
      {/* Background shapes */}
      {/* <div
        className="absolute right-0 top-0 w-[340px] h-full bg-no-repeat bg-right-top z-[1]"
        style={{ backgroundImage: `url(${shape1})` }}
      />
      <div
        className="absolute left-[170px] top-0 w-[410px] h-[54px] bg-no-repeat bg-right-top z-0"
        style={{ backgroundImage: `url(${shape2})` }}
      /> */}

      {/* Content Box */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="relative z-[2] flex flex-col lg:flex-row justify-between items-center bg-[#ffae00] text-black rounded-lg px-20 py-24 overflow-hidden">
          <h2 className="text-[18px] leading-[30px] lg:text-[48px] font-bold uppercase lg:leading-[0.9] text-center lg:text-left mb-8 lg:mb-0">
            Let&apos;s Get Your Project <br /> Started!
          </h2>
          <div>
            <a
              href="#"
              className="inline-block bg-black text-white px-10 py-5 rounded-md text-sm font-semibold hover:bg-white hover:text-[#ffae00] transition uppercase"
            >
              Contact with us
            </a>
          </div>
          <div
            className="absolute right-0 top-0 w-[340px] h-full bg-no-repeat bg-right-top z-[10]"
            style={{ backgroundImage: `url(${shape1})` }}
          />
        </div>
      </div>
    </section>
  );
};

export default CallToSection;
