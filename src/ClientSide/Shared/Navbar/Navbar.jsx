/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isDropdown2Open, setIsDropdown2Open] = useState(false);

  const toggleDropdown2 = () => {
    setIsDropdown2Open(!isDropdown2Open);
  };

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleMenu = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const menuClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="font-rubik">
      {/* large screen nav */}
      <nav className="hidden lg:block w-full lg:z-50 absolute inset-x-0 bg-transparent ">
        {/* <div className="flex justify-between bg-transparent items-center"> */}
        <div className="largeScreenMenu  py-[50px]  flex justify-between place-content-baseline">
          <div className="headerLogo">
            <Link to="/">
              <img
                className="h-full w-full object-cover"
                src="/Images/Linoor.png"
                alt="brand logo"
              />
            </Link>
          </div>

          <div>
            <div className="mobileMenuParent">
              <Link to="/" onClick={menuClose}>
                <li
                  className={`text-[#FFFFFF] hover:border-b hover:border-b-[#FE8E38] px-3 py-1 ${
                    isActive("/") ? "border-b border-b-[#FE8E38]" : ""
                  }`}
                >
                  HOME
                </li>
              </Link>

              <Link to="/aboutUs" onClick={menuClose}>
                <li
                  className={`text-[#FFFFFF] hover:border-b hover:border-b-[#FE8E38] px-3 py-1 ${
                    isActive("/About") ? "border-b border-b-[#FE8E38]" : ""
                  }`}
                >
                  ABOUT US
                </li>
              </Link>

              <Link to="/service" onClick={menuClose}>
                <li
                  className={`text-[#FFFFFF] hover:border-b hover:border-b-[#FE8E38] px-3 py-1 ${
                    isActive("/courses") ? "border-b border-b-[#FE8E38]" : ""
                  }`}
                >
                  PAGES
                </li>
              </Link>

              <Link to="/service" onClick={menuClose}>
                <li
                  className={`text-[#FFFFFF] hover:border-b hover:border-b-[#FE8E38] px-3 py-1 ${
                    isActive("/courses") ? "border-b border-b-[#FE8E38]" : ""
                  }`}
                >
                  SERVICES
                </li>
              </Link>

              <Link to="/portfolio" onClick={menuClose}>
                <li
                  className={`text-[#FFFFFF] hover:border-b hover:border-b-[#FE8E38] px-3 py-1 ${
                    isActive("/whatsnew") ? "text-[#444649]" : ""
                  }`}
                >
                  PORTFOLIO
                </li>
              </Link>
              <Link to="/contact" onClick={menuClose}>
                <li
                  className={`text-[#FFFFFF] hover:border-b hover:border-b-[#FE8E38] px-3 py-1 ${
                    isActive("/contact") ? "border-b border-b-[#FE8E38]" : ""
                  }`}
                >
                  SHOP
                </li>
              </Link>
              <Link to="/contact" onClick={menuClose}>
                <li
                  className={`text-[#FFFFFF] hover:border-b hover:border-b-[#FE8E38] px-3 py-1 ${
                    isActive("/contact") ? "border-b border-b-[#FE8E38]" : ""
                  }`}
                >
                  BLOG
                </li>
              </Link>

              <Link to="/contact" onClick={menuClose}>
                <li
                  className={`text-[#FFFFFF] hover:border-b hover:border-b-[#FE8E38] px-3 py-1 ${
                    isActive("/contact") ? "border-b border-b-[#FE8E38]" : ""
                  }`}
                >
                  CONTACT
                </li>
              </Link>
              <Link to="/cart" onClick={menuClose}>
                <li
                  className={`text-[#FFFFFF] hover:border-b hover:border-b-[#FE8E38] px-3 py-1 ${
                    isActive("/cart") ? "border-b border-b-[#FE8E38]" : ""
                  }`}
                >
                  <CiShoppingCart />
                </li>
              </Link>
              <Link to="/cart" onClick={menuClose}>
                <li
                  className={`text-[#FFFFFF] hover:border-b hover:border-b-[#FE8E38] px-3 py-1 ${
                    isActive("/cart") ? "border-b border-b-[#FE8E38]" : ""
                  }`}
                >
                  <AiOutlineSearch />
                </li>
              </Link>

              <div className="flex justify-center items-center gap-[20px]">
                <div className="Logo">
                  <img
                    className="h-full w-full object-cover brightness-90 contrast-110 "
                    src="/Images/chat-icon-dark.8228201e.png"
                    alt=""
                  />
                </div>
                <div className="text-white ">
                  <p className="text-[10px]">CALL ANYTIME</p>
                  <p className="text-[12px]">666 888 0000 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </nav>

      {/* Fixed Navbar */}
      <nav
        className={`lg:hidden absolute inset-0 z-50 fix ${
          scrolled ? "hidden" : ""
        }`}
      >
        <div className="navbarLeftRightSpace bg-transparent flex justify-between items-center   font-normal">
          <ul className="flex justify-between items-center gap-[10px]">
            <div className="headerLogo">
              <Link to="/">
                <img
                  className="h-full w-full object-cover"
                  src="/Images/Linoor.png"
                  alt="brand logo"
                />
              </Link>
            </div>

            <Link to="/cart" onClick={menuClose}>
              <li
                className={`text-[#FFFFFF] hover:border-b hover:border-b-[#FE8E38] px-3 py-1 ${
                  isActive("/cart") ? "border-b border-b-[#FE8E38]" : ""
                }`}
              >
                <CiShoppingCart />
              </li>
            </Link>
            <Link to="/cart" onClick={menuClose}>
              <li
                className={`text-[#FFFFFF] hover:border-b hover:border-b-[#FE8E38] px-3 py-1 ${
                  isActive("/cart") ? "border-b border-b-[#FE8E38]" : ""
                }`}
              >
                <AiOutlineSearch />
              </li>
            </Link>
          </ul>

          <div>
            <IoMenu
              className="text-[#FFAA17]   md:h-[35px] h-[28px] w-full"
              onClick={handleMenu}
            ></IoMenu>
          </div>
          {open && (
            <ul className="px-[32px] py-[12px] absolute top-0 right-0 bg-[#ECEEEF] w-[100%] z-50 transition-transform duration-1000 ease-in-out">
              <div className="pb-[30px] flex justify-between items-center border-b-2 border-gray-200">
                <div
                  className="md:text-[38px] text-[35px] font-title"
                  onClick={handleClose}
                >
                  <MdClose className="border-b border-b-[#FE8E38]" />
                </div>
              </div>
              <div className="mobileMenuParent23">
                <Link to="/" onClick={menuClose}>
                  <li
                    className={`mt-2 px-4 py-2 ${
                      isActive("/")
                        ? "text-black  font-bold "
                        : "text-[#797878]  "
                    }`}
                  >
                    HOME
                  </li>
                </Link>
                <Link to="/aboutUs" onClick={menuClose}>
                  <li
                    className={`mt-2 px-4 py-2 ${
                      isActive("/about")
                        ? "text-black  font-bold "
                        : "text-[#797878]  "
                    }`}
                  >
                    ABOUT US
                  </li>
                </Link>

                <li className="relative">
                  <Link to="/service">
                    <button
                      onClick={toggleDropdown2}
                      className={`flex items-center w-full text-left px-4 py-2 mt-2 ${
                        isActive("/courses")
                          ? "text-black  font-bold "
                          : "text-[#797878]  "
                      }`}
                    >
                      PAGES
                    </button>
                  </Link>
                </li>

                <li className="relative">
                  <Link to="/service">
                    <button
                      onClick={toggleDropdown2}
                      className={`flex items-center w-full text-left px-4 py-2 mt-2 ${
                        isActive("/courses")
                          ? "text-black  font-bold "
                          : "text-[#797878]  "
                      }`}
                    >
                      SERVICES
                    </button>
                  </Link>
                </li>
                <li className="relative">
                  <button
                    onClick={toggleDropdown}
                    className={`flex items-center w-full text-left px-4 py-2 mt-2 ${
                      isActive("/portfolio")
                        ? "text-black  font-bold "
                        : "text-[#797878]  "
                    }`}
                  >
                    <Link to="/portfolio">PORTFOLIO </Link>
                  </button>
                </li>

                <Link to="/contact" onClick={menuClose}>
                  <li
                    className={`mt-2 mb-2 px-4 py-2 ${
                      isActive("/contact")
                        ? "text-black  font-bold "
                        : "text-[#797878]  "
                    }`}
                  >
                    SHOP
                  </li>
                </Link>

                <Link to="/contact" onClick={menuClose}>
                  <li
                    className={`mt-2 mb-2 px-4 py-2 ${
                      isActive("/contact")
                        ? "text-black  font-bold "
                        : "text-[#797878]  "
                    }`}
                  >
                    BLOG
                  </li>
                </Link>

                <Link to="/contact" onClick={menuClose}>
                  <li
                    className={`mt-2 mb-2 px-4 py-2 ${
                      isActive("/contact")
                        ? "text-black  font-bold "
                        : "text-[#797878]  "
                    }`}
                  >
                    CONTACT
                  </li>
                </Link>
              </div>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
