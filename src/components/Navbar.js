import React, { useState } from "react";
import Logo from "../assets/logo1.png";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex bg-[#0a192f] items-center justify-between px-4 text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
      </div>

      <ul className="hidden md:flex ">
        <li>
          {" "}
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          {" "}
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          {" "}
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-[#0a192f] top-0 left-0 w-full h-screen items-center flex flex-col justify-center"
        }
      >
        <li className="py-4 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-4 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/ankit-sharma-490859193/"
              target="blank"
              className="flex justify-between items-center w-full text-gray-300 "
            >
              LinkedIn <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/ankit-new"
              target="blank"
              className="flex justify-between items-center w-full text-gray-300 "
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="https://mail.google.com/mail/u/1/#inbox"
              target="blank"
              className="flex justify-between items-center w-full text-gray-300 "
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
