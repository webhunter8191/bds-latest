// import { Link } from "react-router-dom";
// import { HotelType } from "../../../backend/src/shared/types";
// import { AiFillStar } from "react-icons/ai";

// type Props = {
//   hotel: HotelType;
// };

// const SearchResultsCard = ({ hotel }: Props) => {
//   return (
//     <div className="flex flex-col border border-slate-200 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-xs mx-auto">
//       <div className="w-full h-[200px] rounded-lg overflow-hidden mb-4">
//         <img
//           src={hotel.imageUrls[0]}
//           alt={`${hotel.name} image`}
//           className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
//         />
//       </div>

//       <div className="flex flex-col justify-between gap-4 flex-grow">
//         <div>
//           <div className="flex items-center gap-2 mb-2">
//             <span className="flex text-yellow-400">
//               {Array.from({ length: hotel.starRating }).map((_, index) => (
//                 <AiFillStar key={index} />
//               ))}
//             </span>
//             <span className="text-sm text-gray-500 capitalize">
//               {hotel.type}
//             </span>
//           </div>
//           <Link
//             to={`/detail/${hotel._id}`}
//             className="text-xl font-bold text-blue-800 hover:text-blue-600 transition-colors duration-200"
//           >
//             {hotel.name}
//           </Link>
//         </div>

//         <div>
//           <p className="text-gray-600 line-clamp-4 mb-4">{hotel.description}</p>
//         </div>

//         <div className="flex flex-wrap gap-2 items-center mb-4">
//           {hotel.facilities.slice(0, 3).map((facility, index) => (
//             <span
//               key={index}
//               className="bg-blue-100 text-blue-600 px-2 py-1 rounded-lg font-semibold text-xs whitespace-nowrap"
//             >
//               {facility}
//             </span>
//           ))}
//           {hotel.facilities.length > 3 && (
//             <span className="text-xs text-gray-500">{`+${
//               hotel.facilities.length - 3
//             } more`}</span>
//           )}
//         </div>

//         <div className="flex justify-between items-center mt-auto">
//           <div className="text-left">
//             <span className="block font-bold text-lg text-blue-800">
//               £{hotel.pricePerNight}
//             </span>
//             <span className="text-sm font-normal text-gray-500">per night</span>
//           </div>
//           <Link
//             to={`/detail/${hotel._id}`}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-blue-500 transition-colors duration-200"
//             style={{ minWidth: "100px" }}
//           >
//             View More
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchResultsCard;


import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";
import { AiFillStar } from "react-icons/ai";

type Props = {
  hotel: HotelType;
};

const SearchResultsCard = ({ hotel }: Props) => {
  return (
    // <div className="flex flex-col border border-slate-200 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-xs md:max-w-md lg:max-w-lg mx-auto">
    //   <div className="w-full h-[200px] md:h-[250px] lg:h-[300px] rounded-lg overflow-hidden mb-4">
    //     <img
    //       src={hotel.imageUrls[0]}
    //       alt={`${hotel.name} image`}
    //       className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
    //     />
    //   </div>

    //   <div className="flex flex-col justify-between gap-4 flex-grow">
    //     <div>
    //       <div className="flex items-center gap-2 mb-2">
    //         <span className="flex text-yellow-400">
    //           {Array.from({ length: hotel.starRating }).map((_, index) => (
    //             <AiFillStar key={index} />
    //           ))}
    //         </span>
    //         <span className="text-sm text-gray-500 capitalize">
    //           {hotel.type}
    //         </span>
    //       </div>
    //       <Link
    //         to={`/detail/${hotel._id}`}
    //         className="text-lg md:text-xl font-bold text-blue-800 hover:text-blue-600 transition-colors duration-200"
    //       >
    //         {hotel.name}
    //       </Link>
    //     </div>

    //     <div>
    //       <p className="text-gray-600 line-clamp-4 mb-4 text-sm md:text-base">
    //         {hotel.description}
    //       </p>
    //     </div>

    //     <div className="flex flex-wrap gap-2 items-center mb-4">
    //       {hotel.facilities.slice(0, 3).map((facility, index) => (
    //         <span
    //           key={index}
    //           className="bg-blue-100 text-blue-600 px-2 py-1 rounded-lg font-semibold text-xs md:text-sm whitespace-nowrap"
    //         >
    //           {facility}
    //         </span>
    //       ))}
    //       {hotel.facilities.length > 3 && (
    //         <span className="text-xs md:text-sm text-gray-500">{`+${
    //           hotel.facilities.length - 3
    //         } more`}</span>
    //       )}
    //     </div>

    //     <div className="flex justify-between items-center mt-auto">
    //       <div className="text-left">
    //         <span className="block font-bold text-lg md:text-xl text-blue-800">
    //           £{hotel.pricePerNight}
    //         </span>
    //         <span className="text-sm font-normal text-gray-500">per night</span>
    //       </div>
    //       <Link
    //         to={`/detail/${hotel._id}`}
    //         className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-blue-500 transition-colors duration-200"
    //         style={{ minWidth: "100px" }}
    //       >
    //         View More
    //       </Link>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col border border-slate-200 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-xs md:max-w-md lg:max-w-lg mx-auto">
  {/* Image Container */}
  <div className="w-full h-[200px] md:h-[250px] lg:h-[300px] rounded-lg overflow-hidden mb-4">
    <img
      src={hotel.imageUrls[0]}
      alt={`${hotel.name} image`}
      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
    />
  </div>

  {/* Details Container */}
  <div className="flex flex-col justify-between gap-4 flex-grow">
    {/* Hotel Name and Rating */}
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="flex text-yellow-400">
          {Array.from({ length: hotel.starRating }).map((_, index) => (
            <AiFillStar key={index} />
          ))}
        </span>
        <span className="text-sm text-gray-500 capitalize">
          {hotel.type}
        </span>
      </div>
      <Link
        to={`/detail/${hotel._id}`}
        className="text-lg md:text-xl font-bold text-blue-800 hover:text-blue-600 transition-colors duration-200"
      >
        {hotel.name}
      </Link>
    </div>

    {/* Hotel Description */}
    <div>
      <p className="text-gray-600 line-clamp-4 mb-4 text-sm md:text-base">
        {hotel.description}
      </p>
    </div>

    {/* Facilities */}
    <div className="flex flex-wrap gap-2 items-center mb-4">
      {hotel.facilities.slice(0, 3).map((facility, index) => (
        <span
          key={index}
          className="bg-blue-100 text-blue-600 px-2 py-1 rounded-lg font-semibold text-xs md:text-sm whitespace-nowrap"
        >
          {facility}
        </span>
      ))}
      {hotel.facilities.length > 3 && (
        <span className="text-xs md:text-sm text-gray-500">
          {`+${hotel.facilities.length - 3} more`}
        </span>
      )}
    </div>

    {/* Price and CTA */}
    <div className="flex justify-between items-center mt-auto">
      <div className="text-left">
        <span className="block font-bold text-lg md:text-xl text-blue-800">
          £{hotel.pricePerNight}
        </span>
        <span className="text-sm font-normal text-gray-500">per night</span>
      </div>
      <Link
        to={`/detail/${hotel._id}`}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-blue-500 transition-colors duration-200"
        style={{ minWidth: "100px" }}
      >
        View More
      </Link>
    </div>
  </div>
</div>

  );
};

export default SearchResultsCard;

