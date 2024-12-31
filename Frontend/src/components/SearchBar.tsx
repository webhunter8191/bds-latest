// import { FormEvent, useState } from "react";
// import { useSearchContext } from "../contexts/SearchContext";
// import { MdTravelExplore } from "react-icons/md";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useNavigate } from "react-router-dom";

// const SearchBar = () => {
//   const navigate = useNavigate();
//   const search = useSearchContext();

//   const [destination, setDestination] = useState<string>(search.destination);
//   const [checkIn, setCheckIn] = useState<Date | null>(search.checkIn);
//   const [checkOut, setCheckOut] = useState<Date | null>(search.checkOut);
//   const [roomCount, setRoomCount] = useState<number>(search.roomCount);
 

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();

//     if (checkIn && checkOut) {
//       // Only save the values if both checkIn and checkOut are valid dates
//       search.saveSearchValues(
//         destination,
//         checkIn,
//         checkOut,
//      roomCount
//       );
//       navigate("/search");
//     } else {
//       alert("Please select valid check-in and check-out dates.");
//     }
//   };

//   const handleClear = () => {
//     setDestination("");
//     setCheckIn(null);
//     setCheckOut(null);
//     setRoomCount(1);
//   };

//   const minDate = new Date();
//   const maxDate = new Date();
//   maxDate.setFullYear(maxDate.getFullYear() + 1);

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="-mt-8 p-5 bg-white rounded-lg shadow-md grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 items-center gap-4 animate__animated animate__fadeInUp"
//     >
//       <div className="flex flex-row items-center flex-1 bg-white p-2 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
//         <MdTravelExplore size={25} className="mr-2" />
//         <input
//           placeholder="Where are you going?"
//           className="text-md w-full focus:outline-none"
//           value={destination}
//           onChange={(event) => setDestination(event.target.value)}
//         />
//       </div>

//       <div className="flex bg-white px-2 py-1 gap-2 rounded-lg">
//         <label className="items-center flex">
//           Rooms:
//           <input
//             className="w-full p-1 focus:outline-none font-bold"
//             type="number"
//             min={1}
//             max={20}
//             value={roomCount}
//             onChange={(event) => setRoomCount(parseInt(event.target.value))}
//           />
//         </label>
//       </div>

//       <div >
//         <DatePicker
//           selected={checkIn}
//           onChange={(date) => setCheckIn(date as Date | null)} // Allow null
//           selectsStart
//           startDate={checkIn}
//           endDate={checkOut}
//           minDate={minDate}
//           maxDate={maxDate}
//           placeholderText="Check-in Date"
//           className="min-w-full bg-white p-2 focus:outline-none rounded-lg"
//           wrapperClassName="min-w-full"
//         />
//       </div>

//       <div >
//         <DatePicker
//           selected={checkOut}
//           onChange={(date) => setCheckOut(date as Date | null)} // Allow null
//           selectsStart
//           startDate={checkIn}
//           endDate={checkOut}
//           minDate={minDate}
//           maxDate={maxDate}
//           placeholderText="Check-out Date"
//           className="min-w-full bg-white p-2 focus:outline-none rounded-lg"
//           wrapperClassName="min-w-full"
//         />
//       </div>

//       <div className="flex gap-3">
//         <button className="w-2/3 bg-blue-600 text-white h-full p-2 font-bold text-xl hover:bg-blue-500 transition-all duration-300 rounded-lg">
//           Search
//         </button>
//         <button
//           type="button"
//           className="w-1/3 bg-red-600 text-white h-full p-2 font-bold text-xl hover:bg-red-500 transition-all duration-300 rounded-lg"
//           onClick={handleClear}
//         >
//           Clear
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SearchBar;

// import { FormEvent, useState } from "react";
// import { useSearchContext } from "../contexts/SearchContext";
// import { MdTravelExplore } from "react-icons/md";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useNavigate } from "react-router-dom";

// const SearchBar = () => {
//   const navigate = useNavigate();
//   const search = useSearchContext();

//   const [destination, setDestination] = useState<string>(search.destination);
//   const [checkIn, setCheckIn] = useState<Date | null>(search.checkIn);
//   const [checkOut, setCheckOut] = useState<Date | null>(search.checkOut);
//   const [roomCount, setRoomCount] = useState<number>(search.roomCount);

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     if (checkIn && checkOut) {
//       search.saveSearchValues(destination, checkIn, checkOut, roomCount);
//       navigate("/search");
//     } else {
//       alert("Please select valid check-in and check-out dates.");
//     }
//   };

//   const handleClear = () => {
//     setDestination("");
//     setCheckIn(null);
//     setCheckOut(null);
//     setRoomCount(1);
//   };

//   const minDate = new Date();
//   const maxDate = new Date();
//   maxDate.setFullYear(maxDate.getFullYear() + 1);

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="p-5 bg-white rounded-lg shadow-lg grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center animate__animated animate__fadeInUp"
//     >
//       {/* Destination Input */}
//       <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
//         <MdTravelExplore size={25} className="text-gray-600 mr-2" />
//         <input
//           placeholder="Where are you going?"
//           className="text-md w-full bg-transparent focus:outline-none"
//           value={destination}
//           onChange={(event) => setDestination(event.target.value)}
//         />
//       </div>

//       {/* Rooms Input */}
//       <div className="flex w-auto items-center bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
//         <label className="text-gray-600 font-medium mr-3">Rooms:</label>
//         <input
//           type="number"
//           min={1}
//           max={20}
//           className="w-auto bg-transparent focus:outline-none text-left font-bold"
//           value={roomCount}
//           onChange={(event) => setRoomCount(parseInt(event.target.value))}
//         />
//       </div>

//       {/* Check-in Date */}
//       <div className="relative flex gap-4 ">
//         <DatePicker
//           selected={checkIn}
//           onChange={(date) => setCheckIn(date as Date | null)}
//           selectsStart
//           startDate={checkIn}
//           endDate={checkOut}
//           minDate={minDate}
//           maxDate={maxDate}
//           placeholderText="Check-in Date"
//           className="w-full bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-lg focus:outline-none transition-all duration-300"
//         />
         
//         <DatePicker
//           selected={checkOut}
//           onChange={(date) => setCheckOut(date as Date | null)}
//           selectsEnd
//           startDate={checkIn}
//           endDate={checkOut}
//           minDate={checkIn || minDate}
//           maxDate={maxDate}
//           placeholderText="Check-out Date"
//           className="w-full bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-lg focus:outline-none transition-all duration-300"
//         />
//       </div>

      
//       {/* Buttons */}
//       <div className="flex gap-3">
//         <button
//           type="submit"
//           className="w-2/3 bg-blue-600 text-white py-3 font-bold text-lg hover:bg-blue-500 transition-all duration-300 rounded-lg"
//         >
//           Search
//         </button>
//         <button
//           type="button"
//           onClick={handleClear}
//           className="w-1/3 bg-red-600 text-white py-3 font-bold text-lg hover:bg-red-500 transition-all duration-300 rounded-lg"
//         >
//           Clear
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SearchBar;





import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { MdTravelExplore } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useSearchContext();

  const [destination, setDestination] = useState<string>(search.destination);
  const [checkIn, setCheckIn] = useState<Date | null>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date | null>(search.checkOut);
  const [roomCount, setRoomCount] = useState<number>(search.roomCount);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (checkIn && checkOut) {
      search.saveSearchValues(destination, checkIn, checkOut, roomCount);
      navigate("/search");
    } else {
      alert("Please select valid check-in and check-out dates.");
    }
  };

  const handleClear = () => {
    setDestination("");
    setCheckIn(null);
    setCheckOut(null);
    setRoomCount(1);
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded-lg shadow-lg grid gap-3 md:grid-cols-2 lg:grid-cols-4 items-center animate__animated animate__fadeInUp"
    >
      {/* Destination Input */}
      <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
        <MdTravelExplore size={25} className="text-gray-600 mr-2" />
        <input
          placeholder="Where are you going?"
          className="text-md w-full bg-transparent focus:outline-none"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      {/* Rooms Input */}
      <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
        <label className="text-gray-600 font-medium mr-3">Rooms:</label>
        <input
          type="number"
          min={1}
          max={20}
          className="w-full bg-transparent focus:outline-none text-left font"
          value={roomCount}
          placeholder="How many rooms do you want? "
          onChange={(event) => setRoomCount(parseInt(event.target.value))}
        />
      </div>

      {/* Check-in and Check-out Date Inputs */}
      <div className="flex w-full flex-row sm:flex-row gap-4 sm:gap-2 w-full">
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date as Date | null)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-in Date"
          className="w-full bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-lg focus:outline-none transition-all duration-300"
        />
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date as Date | null)}
          selectsEnd
          startDate={checkIn}
          endDate={checkOut}
          minDate={checkIn || minDate}
          maxDate={maxDate}
          placeholderText="Check-out Date"
          className="w-full bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-lg focus:outline-none transition-all duration-300"
        />
      </div>
      

      {/* Buttons */}
      <div className="flex ">
        <button
          type="submit"
          className="w-full bg-[#6A5631] text-white py-3 font-bold text-lg hover:bg-opacity-90 transition-all duration-300 rounded-lg"
        >
          Search
        </button>
        {/* <button
          type="button"
          onClick={handleClear}
          className="w-1/3 bg-red-600 text-white py-3 font-bold text-lg hover:bg-red-500 transition-all duration-300 rounded-lg"
        >
          Clear
        </button> */}
      </div>
    </form>
  );
};

export default SearchBar;
