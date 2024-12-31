

// const Hero = () => {
//   return (

import SearchBar from "./SearchBar";


  //   <div className="bg-white flex flex-col items-center  py-1">
  //   {/* Hero Section */}
  //   <div className="container mx-auto flex flex-col lg:flex-row items-center justify-evenly space-y-6 lg:space-y-0 lg:space-x-8 mb-10">
  //     {/* Text Section */}
  //     <div className="lg:w-1/2 text-center lg:text-left">
  //       <h1 className="text-5xl font-bold text-black leading-tight">
  //         Hotel for every moment rich in emotion
  //       </h1>
  //       <p className="text-lg text-gray-500 mt-4">
  //         Every moment feels like the first time in paradise view
  //       </p>
  //       <div className="mt-8 flex justify-center lg:justify-start space-x-4">
  //         <button className="bg-[#6A5631] text-white px-6 py-3 rounded-md text-lg hover:bg-opacity-90">
  //           Book Now
  //         </button>
  //         <button className="px-6 py-3 text-lg text-black border border-gray-300 rounded-md hover:bg-gray-100 transition">
  //           Take a Tour
  //         </button>
  //       </div>
  //     </div>

  //     {/* Image Section */}
  //     <div className="lg:w-1/2">
  //       <img
  //         src="..\..\src\assets\heroImg.png"
  //         alt="Paradise View Resort"
  //         className="rounded-lg shadow-md"
  //       />
  //     </div>
  //   </div>
    
  // </div>

  
//   <div className="bg-white flex flex-col items-center py-4">
//   {/* Hero Section */}
//   <div className="container mx-auto flex flex-col lg:flex-row items-center justify-evenly px-6 md:px-12 space-y-8 lg:space-y-0 lg:space-x-12 mb-12">
//     {/* Text Section */}
//     <div className="lg:w-1/2 text-center lg:text-left">
//       <h1 className="text-4xl md:text-5xl font-bold text-black leading-snug">
//         Hotel for Every Moment Rich in Emotion
//       </h1>
//       <p className="text-base md:text-lg text-gray-600 mt-4">
//         Every moment feels like the first time with a paradise view.
//       </p>
//       <div className="mt-8 flex justify-center lg:justify-start space-x-4">
//         <button className="bg-[#6A5631] text-white px-6 py-3 rounded-md text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg">
//           Book Now
//         </button>
//         {/* <button className="px-6 py-3 text-lg text-black border border-gray-300 rounded-md hover:bg-gray-100 transition-all duration-300">
//           Take a Tour
//         </button> */}
//       </div>
//     </div>

//     {/* Image Section */}
//     <div className="lg:w-1/2">
//       <img
//         src="..\..\src\assets\heroImg.png"
//         alt="Paradise View Resort"
//         className="w-full h-auto rounded-lg shadow-md object-cover"
//       />
//     </div>
//   </div>
// </div>




// <div className="bg-white flex flex-col items-center py-0">
//   {/* Hero Section */}
//   <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-0 md:px-0 space-y-8 lg:space-y-0 lg:space-x-0 mb-12">
//     {/* Text Section */}
//     <div className="lg:w-1/2 text-center lg:text-left">
//       <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-snug">
//         Hotel for Every Moment Rich in Emotion
//       </h1>
//       <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4">
//         Every moment feels like the first time with a paradise view.
//       </p>
//       <div className="mt-8 flex justify-center lg:justify-start space-x-4">
//         <button className="bg-[#6A5631] text-white px-6 py-3 rounded-md text-sm sm:text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg">
//           Book Now
//         </button>
//         {/* Optional Button */}
//         {/* <button className="px-6 py-3 text-sm sm:text-lg text-black border border-gray-300 rounded-md hover:bg-gray-100 transition-all duration-300">
//           Take a Tour
//         </button> */}
//       </div>
//     </div>

//     {/* Image Section */}
//     <div className="lg:w-1/2">
//       <img
//         src="..\..\src\assets\heroImg.png"
//         alt="Paradise View Resort"
//         className="w-full h-auto max-h-[400px] sm:max-h-[500px] rounded-lg shadow-md object-cover"
//       />
//     </div>
//   </div>
// </div>


//   );
// };


// export default Hero;




const Hero = () => {
  return (
    <div
  className="min-h-screen flex flex-col items-center  lg:justify-center md:justify-center sm:justify-start"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../../src/assets/hotel1.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '80vh',
  }}
>
  {/* Hero Section */}
  <div className="text-center bg-opacity-75 p-6 rounded-md mt-0 sm:mt-10 lg:mt-0">
    <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
      Hotel for Every Moment Rich in Emotion
    </h1>
    <p className="text-sm sm:text-base md:text-lg text-white mt-4">
      Every moment feels like the first time with a paradise view.
    </p>
    <div className="mt-4 space-x-4">
      <button className=" bg-black rounded-lg border-gray-600 border-2 text-white px-5 py-2 rounded-md text-sm sm:text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg">
        Book Now
      </button>
      {/* Optional Button */}
      {/* <button className="px-6 py-3 text-sm sm:text-lg text-black border border-gray-300 rounded-md hover:bg-gray-100 transition-all duration-300">
        Take a Tour
      </button> */}
    </div>
  </div>
</div>

  
  

  );
};

export default Hero;



