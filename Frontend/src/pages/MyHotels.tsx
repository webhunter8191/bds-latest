import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {},
    }
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Page Content */}
      <div className="flex-1 p-5">
        <span className="flex justify-between">
          <h1 className="text-3xl font-bold">My Hotels</h1>
          <Link
            to="/add-hotel"
            className="flex items-center bg-blue-600 text-white text-xl font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-500 transition duration-300"
          >
            Add Hotel
          </Link>
        </span>

        {/* Check if hotels data exists */}
        {hotelData && hotelData.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 mt-5">
            {hotelData.map((hotel) => (
              <div
                key={hotel._id}
                data-testid="hotel-card"
                className="flex flex-col justify-between border border-slate-300 rounded-lg p-8 gap-5 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-800">
                  {hotel.name}
                </h2>
                <div className="text-gray-600">{hotel.description}</div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                  <div className="border border-slate-300 rounded-sm p-3 flex items-center space-x-2">
                    <BsMap className="text-xl text-blue-600" />
                    <span className="text-sm">
                      {hotel.city}, {hotel.country}
                    </span>
                  </div>
                  <div className="border border-slate-300 rounded-sm p-3 flex items-center space-x-2">
                    <BsBuilding className="text-xl text-blue-600" />
                    <span className="text-sm">{hotel.type}</span>
                  </div>
                  <div className="border border-slate-300 rounded-sm p-3 flex items-center space-x-2">
                    <BiMoney className="text-xl text-blue-600" />
                    <span className="text-sm">
                      £{hotel.pricePerNight} per night
                    </span>
                  </div>
                  <div className="border border-slate-300 rounded-sm p-3 flex items-center space-x-2">
                    <BiHotel className="text-xl text-blue-600" />
                    <span className="text-sm">
                      {hotel.roomCount} rooms
                    </span>
                  </div>
                  <div className="border border-slate-300 rounded-sm p-3 flex items-center space-x-2">
                    <BiStar className="text-xl text-yellow-500" />
                    <span className="text-sm">
                      {hotel.starRating} Star Rating
                    </span>
                  </div>
                </div>

                <span className="flex justify-end mt-4">
                  <Link
                    to={`/edit-hotel/${hotel._id}`}
                    className="flex items-center bg-blue-600 text-white text-xl font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-500 transition duration-300"
                  >
                    View Details
                  </Link>
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-[300px]">
            <span className="text-2xl font-semibold text-gray-600">
              No Hotels found
            </span>
          </div>
        )}
      </div>

     
    </div>
  );
};

export default MyHotels;
