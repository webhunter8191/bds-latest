import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";

type Props = {
  hotel: HotelType;
};

const LatestDestinationCard = ({ hotel }: Props) => {
  return (
    // <Link
    //   to={`/detail/${hotel._id}`}
    //   className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105"
    // >
    //   {/* Image container */}
    //   <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
    //     <img
    //       src={hotel.imageUrls[0]}
    //       alt={hotel.name}
    //       className="w-full h-full object-cover  object-contain object-center object-center"
    //     />
    //   </div>

    //   {/* Overlay with text */}
    //   <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-b-lg">
    //     <span className="text-white font-bold tracking-tight text-lg">
    //       {hotel.name}
    //     </span>
    //   </div>
    // </Link>

    <Link
  to={`/detail/${hotel._id}`}
  className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105"
>
  {/* Image container */}
  <div className="relative w-full h-48 sm:h-56 md:h-55 lg:h-72 xl:h-70 overflow-hidden rounded-t-lg">
    <img
      src={hotel.imageUrls[0]}
      alt={hotel.name}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Overlay with text */}
  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-b-lg">
    <span className="text-white font-bold tracking-tight text-base sm:text-lg md:text-xl lg:text-2xl">
      {hotel.name}
    </span>
  </div>
</Link>

  );
};

export default LatestDestinationCard;
