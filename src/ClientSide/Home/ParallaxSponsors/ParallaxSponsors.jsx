import { FaAppStore } from "react-icons/fa";
import client1 from "/Images/1.png";
import client2 from "/Images/1.png";
import client3 from "/Images/1.png";
import client4 from "/Images/1.png";
import client5 from "/Images/1.png";
import bgImage from "/Images/image-2.jpg";

const clients = [client1, client2, client3, client4, client5];

const ParallaxSponsors = () => {
  return (
    <>
      {/* Parallax Section */}
      <section className="relative text-white text-center py-32 bg-[#1c1e22] overflow-hidden">
        <img
          src={bgImage}
          alt="Parallax Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="relative w-28 h-28 mx-auto mb-12">
            <div className="absolute left-1/2 top-1/2 w-20 h-20 bg-white opacity-30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute inset-0 bg-[#ffae00] rounded-full flex items-center justify-center text-4xl">
              <FaAppStore className="text-black z-10" />
            </div>
          </div>
          <h2 className="text-[16px] leading-[30px] lg:text-4xl md:text-5xl font-semibold uppercase lg:leading-tight">
            Great things in business are never done by one person. <br />
            <span className="text-[#ffae00] leading-[30px] text-[16px] lg:text-4xl">
              They’re done by a team of people.
            </span>
          </h2>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-white py-10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {clients.map((logo, index) => (
              <div
                key={index}
                className="opacity-20 hover:opacity-100 transition"
              >
                <a href="#">
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="mx-auto"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 lg:hidden block">
        <div className="max-w-7xl mx-auto px-4">
          <div className=" ">
            <div className="opacity-20 hover:opacity-100 transition">
              <a href="#">
                <img src="/Images/1.png" alt="" className="mx-auto" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParallaxSponsors;
