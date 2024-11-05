import logo from "@/assets/logosaas.png";
import SocialInsta from "@/assets/social-insta.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMedium, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#f87bff,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} height={40} alt="SaaS logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          {/* Add any navigation links here if needed */}
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          
          
          <a
            href="https://www.instagram.com/vidyavriksh_online/" // Replace with your Instagram profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.youtube.com/@vidyavriksh2436" // Replace with your YouTube channel URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:red-600 transition duration-300"
          >
            <FaYoutube size={30} />
          </a>
          <a
            href="hhttps://medium.com/@siddharajmopkar" // Replace with your Medium profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition duration-300"
          >
            <FaMedium size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/siddharaj-mopkar-70489823/" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition duration-300"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
        <p className="mt-6">&copy; {new Date().getFullYear()} Vidyavriksh. All rights reserved.
          <br />
          <Link className="hover:text-white transition-all" href="https://github.com/MiladJoodi/Light-Saas-Landing-Page">Made with ❤️ by Dhruv Pai Dukle</Link>
        </p>
      </div>
    </footer>
  );
};