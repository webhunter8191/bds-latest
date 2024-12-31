import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#7C6A46] py-8 shadow-md transition duration-500">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center animate__animated animate__fadeInUp">
        {/* Logo and Title */}
        <span className="text-2xl text-white font-bold tracking-tight">
          <a href="/" className="hover:text-gray-300 transition duration-300">
            Brij Divine Stay
          </a>
        </span>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#"
            className="text-white text-xl hover:text-gray-300 transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-white text-xl hover:text-gray-300 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-white text-xl hover:text-gray-300 transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Footer Links */}
        <div className="text-white flex gap-6 mt-4 md:mt-0">
          <p className="cursor-pointer hover:text-gray-300 transition duration-300">
            Privacy Policy
          </p>
          <p className="cursor-pointer hover:text-gray-300 transition duration-300">
            Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
