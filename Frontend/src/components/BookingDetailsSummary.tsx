import { HotelType } from "../../../backend/src/shared/types";

type Props = {
  checkIn: Date;
  checkOut: Date;
  roomCount: number;
  numberOfNights: number;
  hotel: HotelType;
};

const BookingDetailsSummary = ({
  checkIn,
  checkOut,
roomCount,
  numberOfNights,
  hotel,
}: Props) => {
  return (
    <div className="grid gap-4 rounded-lg border border-slate-300 p-5 h-fit">
      <h2 className="text-xl font-bold">Your Booking Details</h2>
      <div className="border-b py-2">
        Location:
        <div className="font-bold">{`${hotel.name}, ${hotel.city}, ${hotel.country}`}</div>
      </div>
      <div className="flex justify-between">
        <div>
          Check-in
          <div className="font-bold"> {checkIn.toDateString()}</div>
        </div>
        <div>
          Check-out
          <div className="font-bold"> {checkOut.toDateString()}</div>
        </div>
      </div>
      <div className="border-t border-b py-2">
        Total length of stay:
        <div className="font-bold">{numberOfNights} nights</div>
      </div>

      <div>
        Rooms{" "}
        <div className="font-bold">
          {roomCount} Rooms
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsSummary;
// import { HotelType } from "../../../backend/src/shared/types";

// type Props = {
//   checkIn: Date;
//   checkOut: Date;
//   roomCount:number
//   numberOfNights: number;
//   hotel: HotelType;
// };

// const BookingDetailsSummary = ({
//   checkIn,
//   checkOut,
//  roomCount
//   numberOfNights,
//   hotel,
// }: Props) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 max-w-md mx-auto">
//       <div className="bg-blue-500 text-white p-4 rounded-t-lg">
//         <h2 className="text-2xl font-bold">Your Booking Details</h2>
//       </div>
//       <div className="p-4">
//         <div className="mb-4">
//           <div className="text-gray-700">Location:</div>
//           <div className="font-semibold text-xl text-gray-900">
//             {`${hotel.name}, ${hotel.city}, ${hotel.country}`}
//           </div>
//         </div>
//         <div className="flex justify-between mb-4">
//           <div>
//             <div className="text-gray-700">Check-in</div>
//             <div className="font-semibold text-lg text-blue-700">
//               {checkIn.toLocaleDateString()}
//             </div>
//           </div>
//           <div>
//             <div className="text-gray-700">Check-out</div>
//             <div className="font-semibold text-lg text-blue-700">
//               {checkOut.toLocaleDateString()}
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-gray-300 pt-4">
//           <div className="text-gray-700">Total length of stay:</div>
//           <div className="font-semibold text-lg text-green-600">
//             {numberOfNights} nights
//           </div>
//         </div>
//         <div className="pt-4">
//           <div className="text-gray-700">Guests</div>
//           <div className="font-semibold text-lg text-gray-900">
//             {roomCount
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingDetailsSummary;

