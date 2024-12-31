// import { NavLink, useNavigate } from "react-router-dom";
// import { useAppContext } from "../contexts/AppContext";
// import SignOutButton from "./SignOutButton";
// import { FaUserCircle, FaSearch } from "react-icons/fa";
// import Swal from "sweetalert2";

// const Header = () => {
//   const { isLoggedIn, isAdmin } = useAppContext();
//   const navigate = useNavigate();

//   // Function to handle search button click
//   const handleSearchClick = () => {
   
//     navigate("/search")
//   };

//   return (
//     <div className="bg-white py-6 shadow-md transition duration-500">
//       <div className="container mx-auto flex justify-between items-center animate__animated animate__fadeInDown">
//         {/* Site Logo */}
//         <span className="text-3xl text-black font-bold tracking-tight">
//           <NavLink
//             to="/"
//             className="hover:text-gray-300 transition duration-300"
//           >
//             Brij Divine Stay
//           </NavLink>
//         </span>

//         {/* Navigation Links and Actions */}
//         <span className="flex items-center space-x-4">
//           {/* Always Visible Links */}
//           <button
//             onClick={handleSearchClick}
//             className="flex items-center bg-[#5B3B3B] text-white px-4 py-2 rounded-lg hover:bg-[#4A2D2D] transition duration-300"
//           >
//             <FaSearch className="mr-2" size={18} />
//             Search
//           </button>

//           {isLoggedIn ? (
//             <>
//               {!isAdmin ? (
//                 <NavLink
//                   className={({ isActive }) =>
//                     `flex items-center px-4 py-2 rounded-lg transition duration-300 ${
//                       isActive ? "bg-[#3B4A5B]" : "bg-[#4A5B6A]"
//                     } text-white hover:bg-[#374257]`
//                   }
//                   to="/my-bookings"
//                 >
//                   My Bookings
//                 </NavLink>
//               ) : (
//                 <NavLink
//                   className={({ isActive }) =>
//                     `flex items-center px-4 py-2 rounded-lg transition duration-300 ${
//                       isActive ? "bg-[#6A4A3C]" : "bg-[#7C5C4A]"
//                     } text-white hover:bg-[#5C3E32]`
//                   }
//                   to="/my-hotels"
//                 >
//                   My Hotels
//                 </NavLink>
//               )}
//               <SignOutButton />
//             </>
//           ) : (
//             <NavLink
//               to="/sign-in"
//               className="flex items-center bg-[#4A3B5B] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#372D4A] transition duration-300"
//             >
//               <FaUserCircle className="mr-2" size={20} />
//               Sign In
//             </NavLink>
//           )}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Header;


import { NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import { FaUserCircle, FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const { isLoggedIn, isAdmin } = useAppContext();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle search button click
  const handleSearchClick = () => {
    navigate("/search");
  };

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-white-100 py-4 shadow-md transition duration-500">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Site Logo */}
        <span className="text-2xl sm:text-3xl text-black font-bold tracking-tight">
          <NavLink to="/" className="hover:text-gray-600 transition duration-300">
            Brij Divine Stay
          </NavLink>
        </span>

        {/* Mobile Menu Toggle */}
        <button
          className="block lg:hidden text-black focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <FaBars size={24} />
        </button>

        {/* Navigation Links */}
        <div
          className={`w-full lg:w-auto flex-grow lg:flex items-center justify-end space-y-4 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {/* Search Button */}
          <button
            onClick={handleSearchClick}
            className="flex items-center bg-[#5B3B3B] text-white px-4 py-2 rounded-lg hover:bg-[#4A2D2D] transition duration-300"
          >
            <FaSearch className="mr-2" size={18} />
            Search
          </button>

          {isLoggedIn ? (
            <>
              {!isAdmin ? (
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 rounded-lg transition duration-300 ${
                      isActive ? "bg-[#3B4A5B]" : "bg-[#4A5B6A]"
                    } text-white hover:bg-[#374257]`
                  }
                  to="/my-bookings"
                >
                  My Bookings
                </NavLink>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 rounded-lg transition duration-300 ${
                      isActive ? "bg-[#6A4A3C]" : "bg-[#7C5C4A]"
                    } text-white hover:bg-[#5C3E32]`
                  }
                  to="/my-hotels"
                >
                  My Hotels
                </NavLink>
              )}
              <SignOutButton />
            </>
          ) : (
            <NavLink
              to="/sign-in"
              className="flex items-center bg-[#4A3B5B] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#372D4A] transition duration-300"
            >
              <FaUserCircle className="mr-2" size={20} />
              Sign In
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
