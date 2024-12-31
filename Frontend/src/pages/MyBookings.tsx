import { useQuery } from "react-query";
import * as apiClient from "../api-client";

const MyBookings = () => {
  const {
    data: hotels,
    isLoading,
    error,
  } = useQuery("fetchMyBookings", apiClient.fetchMyBookings);

  // Loading and Error handling
  if (isLoading) {
    return <span className="text-xl text-center">Loading...</span>;
  }

  if (error) {
    return (
      <span className="text-xl text-center text-red-500">
        Error: {error.message}
      </span>
    );
  }

  // No bookings found
  if (!hotels || hotels.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-2xl font-semibold text-gray-600">
          No bookings found
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-5 p-5">
      <h1 className="text-3xl font-bold text-center mb-6">My Bookings</h1>
      {hotels.map((hotel) => (
        <div
          key={hotel.id}
          className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] border border-slate-300 rounded-lg shadow-lg p-8 gap-5 mb-6 hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="lg:w-full lg:h-[250px]">
            <img
              src={hotel.imageUrls[0]}
              alt={hotel.name}
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[300px]">
            <div className="text-2xl font-bold text-gray-800">
              {hotel.name}
              <div className="text-sm font-normal text-gray-500">
                {hotel.city}, {hotel.country}
              </div>
            </div>
            {hotel.bookings.map((booking, index) => (
              <div key={index} className="mt-3">
                <div>
                  <span className="font-semibold text-gray-700 mr-2">
                    Dates:{" "}
                  </span>
                  <span className="text-gray-600">
                    {new Date(booking.checkIn).toDateString()} -{" "}
                    {new Date(booking.checkOut).toDateString()}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700 mr-2">
                    Guests:
                  </span>
                  <span className="text-gray-600">
                    {booking.roomCount} rooms
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
