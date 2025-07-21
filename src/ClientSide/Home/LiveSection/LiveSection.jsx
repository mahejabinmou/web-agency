import { FaPlay } from "react-icons/fa";

const LiveSection = () => {
  return (
    <section className="relative bg-white border-t border-black/5 pt-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Experience us live<span className="text-[#ffae00]">.</span>
          </h2>
        </div>

        {/* Image & Squircle Block */}
        <div className="relative h-[420px] lg:h-[530px] overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center grayscale"
            style={{
              backgroundImage: "url('/Images/8.jpg')",
            }}
          ></div>

          {/* Yellow Block Container */}
          <div className="relative z-10 flex items-center justify-center lg:justify-end h-full">
            <div
              className="relative w-[340px] h-[360px] lg:size-[490px] lg:-mr-5 bg-[#ffae00]
                         rounded-[12px] lg:rounded-full
                         p-[20px] lg:p-[50px]
                         flex flex-col items-center justify-center text-center"
            >
              {/* Play Button */}
              <div className="block lg:hidden">
                <a
                  href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                  target="_blank"
                  className="mb-4 size-20
                           flex items-center justify-center
                           bg-black text-white text-xl rounded-full
                           hover:bg-white hover:text-[#ffae00]
                           transition"
                >
                  <span className="relative">
                    <FaPlay />
                    <span className="absolute inset-[-8px] border border-black/30 rounded-full"></span>
                  </span>
                </a>
              </div>

              {/* Title */}
              <h3 className="text-black text-[22px] leading-[28px] font-bold uppercase lg:text-4xl lg:leading-tight mb-6 lg:mt-20">
                agency that gets excited about
              </h3>

              {/* Read More Link */}
              <a
                href="#"
                className="text-black text-[12px] leading-[20px] lg:text-lg font-medium uppercase
                           border-b-2 border-black hover:border-black/30 hover:text-black/30 transition lg:ml-[60%] w-max"
              >
                Read More
              </a>

              <div className="hidden lg:block absolute top-[6%] left-[7%]">
                <a
                  href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                  target="_blank"
                  className="mb-4 size-24
                           flex items-center justify-center
                           bg-black text-white text-xl rounded-full
                           hover:bg-white hover:text-[#ffae00]
                           transition"
                >
                  <span className="relative">
                    <FaPlay />
                    <span className="absolute inset-[-8px] border border-black/30 rounded-full"></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSection;
