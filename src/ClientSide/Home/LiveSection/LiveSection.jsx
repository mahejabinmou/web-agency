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

        <div className="relative  overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center grayscale"
            style={{
              backgroundImage: "url('/Images/8.jpg')",
            }}
          ></div>

          <div className="relative py-5 z-10 flex justify-center lg:justify-end">
            <div className="relative w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] rounded-sm lg:rounded-full bg-[#ffae00] p-[20px] lg:p-[50px] lg:pt-[190px]">
              {/* Play Button */}
              <a
                href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                target="_blank"
                className="absolute left-[30px] top-[60px] lg:top-[25px] w-[50px] h-[50px] lg:w-[84px] lg:h-[84px] flex items-center justify-center bg-black text-white text-xl rounded-full hover:bg-white hover:text-[#ffae00] transition"
              >
                <span className="relative">
                  <FaPlay />
                  <span className="absolute inset-[-8px] border border-black/30 rounded-full"></span>
                </span>
              </a>

              {/* Title */}
              <div className="text-black  text-[12px] leading-[20px] lg:text-xl font-bold uppercase lg:leading-tight mb-4">
                <h3>
                  agency that gets <br /> excited about
                </h3>
              </div>

              {/* Read More Link */}
              <div className="text-right  ">
                <a
                  href="#"
                  className="text-black text-[12px] leading-[20px] lg:text-lg font-medium uppercase border-b-2 border-black hover:border-black/30 hover:text-black/30 transition"
                >
                  Read More
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
