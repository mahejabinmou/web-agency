import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaEnvelope,
} from "react-icons/fa";
import logo from "/Images/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0b0c10] bg-cover bg-center text-[#999b9f] pt-[50px]">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {/* Logo Column */}
          <div>
            <div className="mb-6">
              <a href="/">
                <img src={logo} alt="Footer Logo" className="h-10" />
              </a>
            </div>
            <p className="mb-4">
              Welcome to our web design agency. Lorem ipsum simply free text
              dolor sited amet cons cing elit.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1c1e22] flex items-center justify-center hover:bg-[#ffae00] hover:text-white transition"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1c1e22] flex items-center justify-center hover:bg-[#ffae00] hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1c1e22] flex items-center justify-center hover:bg-[#ffae00] hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1c1e22] flex items-center justify-center hover:bg-[#ffae00] hover:text-white transition"
              >
                <FaPinterestP />
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h6 className="text-white text-xl font-semibold uppercase mb-6">
              Explore
            </h6>
            <div className="flex gap-6">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Meet Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Our Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Latest News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h6 className="text-white text-xl font-semibold uppercase mb-6">
              Contact
            </h6>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="text-[#ffae00] font-semibold block">
                  Address:
                </span>
                66 Broklyn Street, New York, United States of America
              </li>
              <li>
                <span className="text-[#ffae00] font-semibold block">
                  Phone:
                </span>
                <a href="tel:666888000" className="hover:text-white transition">
                  666 888 000
                </a>
              </li>
              <li>
                <span className="text-[#ffae00] font-semibold block">
                  Email:
                </span>
                <a
                  href="mailto:needhelp@linoor.com"
                  className="hover:text-white transition"
                >
                  needhelp@linoor.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h6 className="text-white text-xl font-semibold uppercase mb-6">
              Newsletter
            </h6>
            <form className="relative mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 pr-14 py-4 text-sm text-white bg-[#1c1e22] border border-[#1c1e22] rounded-md focus:outline-none focus:border-[#ffae00]"
              />
              <button
                type="submit"
                className="absolute top-2 right-2 w-10 h-10 bg-[#ffae00] text-black rounded-full flex items-center justify-center hover:bg-white hover:text-[#ffae00] transition"
              >
                <FaEnvelope className="text-sm" />
              </button>
            </form>
            <p className="text-sm">
              Sign up for our latest news & articles. We won’t give you spam
              mails.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 text-center py-6 text-sm text-[#999b9f]">
        © Copyright 2022 by Layerdrops.com
      </div>
    </footer>
  );
};

export default Footer;
