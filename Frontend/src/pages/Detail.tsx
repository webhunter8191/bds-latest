// import { useQuery } from "react-query";
// import { useParams } from "react-router-dom";
// import * as apiClient from "./../api-client";
// import { AiFillStar } from "react-icons/ai";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import GuestInfoForm from "../forms/GuestInfoForm/GuestInfoForm";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Custom Next Arrow Component
// const NextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition duration-200 shadow-lg"
//       style={{ zIndex: 1 }}
//     >
//       <FaArrowRight />
//     </button>
//   );
// };

// // Custom Prev Arrow Component
// const PrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition duration-200 shadow-lg"
//       style={{ zIndex: 1 }}
//     >
//       <FaArrowLeft />
//     </button>
//   );
// };

// const Detail = () => {
//   const { hotelId } = useParams();

//   const { data: hotel } = useQuery(
//     ["fetchHotelById", hotelId],
//     () => apiClient.fetchHotelById(hotelId || ""),
//     {
//       enabled: !!hotelId,
//     }
//   );

//   if (!hotel) {
//     return <></>;
//   }

//   // Slider settings with custom arrows
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     adaptiveHeight: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   return (
//     <div className="space-y-12 p-6 bg-gray-50 min-h-screen">
//       <div className="flex flex-col items-start gap-4">
//         <div className="flex items-center gap-1">
//           {Array.from({ length: hotel.starRating }).map((_, index) => (
//             <AiFillStar
//               key={index}
//               className="fill-yellow-400 text-xl transition transform hover:scale-125"
//             />
//           ))}
//           <span className="text-gray-500 text-sm">{hotel.type}</span>
//         </div>
//         <h1 className="text-4xl font-bold text-blue-800 animate-fadeIn">
//           {hotel.name}
//         </h1>
//       </div>

//       {/* Image Slider */}
//       <div className="relative lg:w-4/5 mx-auto shadow-xl rounded-lg overflow-hidden">
//         <Slider {...sliderSettings}>
//           {hotel.imageUrls.map((image, index) => (
//             <div key={index} className="h-[400px]">
//               <img
//                 src={image}
//                 alt={hotel.name}
//                 className="rounded-md w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Facilities */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//         {hotel.facilities.map((facility, index) => (
//           <div
//             key={index}
//             className="border border-slate-300 rounded-md p-3 text-center bg-white shadow-md hover:bg-blue-50 transition duration-200 transform hover:scale-105"
//           >
//             {facility}
//           </div>
//         ))}
//       </div>

//       {/* Description and Guest Info Form */}
//       {/* Description and Guest Info Form */}
// <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
//   <div className="whitespace-pre-line text-gray-700 leading-relaxed animate-fadeIn">
//     {hotel.description}
//   </div>
//   <div
//     className={`p-6 border border-slate-200 rounded-md shadow-lg bg-white 
//       lg:static lg:transform-none lg:shadow-lg transition-shadow duration-200 
//       fixed bottom-0 left-0 right-0 z-10 md:sticky md:top-auto md:bottom-4`}
//   >
//     <GuestInfoForm
//       pricePerNight={hotel.pricePerNight}
//       hotelId={hotel._id}
//     />
//   </div>
// </div>

//     </div>
//   );
// };

// export default Detail;





// import { useQuery } from "react-query";
// import { useParams } from "react-router-dom";
// import * as apiClient from "./../api-client";
// import { AiFillStar } from "react-icons/ai";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import GuestInfoForm from "../forms/GuestInfoForm/GuestInfoForm";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Custom Next Arrow Component
// const NextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition duration-200 shadow-lg"
//       style={{ zIndex: 1 }}
//     >
//       <FaArrowRight />
//     </button>
//   );
// };

// // Custom Prev Arrow Component
// const PrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition duration-200 shadow-lg"
//       style={{ zIndex: 1 }}
//     >
//       <FaArrowLeft />
//     </button>
//   );
// };

// const Detail = () => {
//   const { hotelId } = useParams();

//   const { data: hotel } = useQuery(
//     ["fetchHotelById", hotelId],
//     () => apiClient.fetchHotelById(hotelId || ""),
//     {
//       enabled: !!hotelId,
//     }
//   );

//   if (!hotel) {
//     return <></>;
//   }

//   // Slider settings with custom arrows
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     adaptiveHeight: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   return (
//     <div className="space-y-12 p-0  min-h-screen">
//       {/* Hotel Header */}
//       <div className="flex flex-col items-start gap-4">
//         <div className="flex items-center gap-1">
//           {Array.from({ length: hotel.starRating }).map((_, index) => (
//             <AiFillStar
//               key={index}
//               className="fill-yellow-400 text-xl transition transform hover:scale-125"
//             />
//           ))}
//           <span className="text-gray-500 text-sm">{hotel.type}</span>
//         </div>
//         <h1 className="text-4xl font-bold text-blue-800 animate-fadeIn">
//           {hotel.name}
//         </h1>
//       </div>

//       {/* Image Slider */}
//       <div className="relative  mx-auto shadow-xl rounded-lg overflow-hidden">
//         <Slider {...sliderSettings}>
//           {hotel.imageUrls.map((image, index) => (
//             <div key={index} className="h-[600px]">
//               <img
//                 src={image}
//                 alt={hotel.name}
//                 className="rounded-md w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Content Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
//         <div className="space-y-8">
//           {/* Hotel Description */}
//           <div className="bg-white shadow-md rounded-md p-6">
//             <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
//               About the Hotel
//             </h2>
//             <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//               {hotel.description}
//               </p>
//           </div>

//           {/* Facilities */}
//           <div className="bg-white shadow-md rounded-md p-6">
//             <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
//               Amenities
//             </h2>
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//               {hotel.facilities.map((facility, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-2 p-3 border rounded-md bg-blue-50 hover:bg-blue-100 transition duration-200"
//                 >
//                   <span className="text-blue-600 font-medium text-lg">{facility}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Guest Info Form */}
//         <div className="sticky top-4">
//           <div className="p-6 border border-slate-200 rounded-md shadow-lg bg-white">
//             <GuestInfoForm
//               pricePerNight={hotel.pricePerNight}
//               hotelId={hotel._id}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Detail;


import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "./../api-client";
import { AiFillStar } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GuestInfoForm from "../forms/GuestInfoForm/GuestInfoForm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow Component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition duration-200 shadow-lg"
      style={{ zIndex: 1 }}
    >
      <FaArrowRight />
    </button>
  );
};

// Custom Prev Arrow Component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition duration-200 shadow-lg"
      style={{ zIndex: 1 }}
    >
      <FaArrowLeft />
    </button>
  );
};

const Detail = () => {
  const { hotelId } = useParams();

  const { data: hotel } = useQuery(
    ["fetchHotelById", hotelId],
    () => apiClient.fetchHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  if (!hotel) {
    return <></>;
  }

  // Slider settings with custom arrows
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="space-y-5 p-4 sm:p-6 mx-auto min-h-screen">
      {/* Hotel Header */}
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-1">
          {Array.from({ length: hotel.starRating }).map((_, index) => (
            <AiFillStar
              key={index}
              className="fill-yellow-400 text-xl transition transform hover:scale-125"
            />
          ))}
          <span className="text-gray-500 text-sm">{hotel.type}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 animate-fadeIn">
          {hotel.name}
        </h1>
      </div>

      {/* Image Slider */}
      <div className="relative mx-auto shadow-xl rounded-lg overflow-hidden">
        <Slider {...sliderSettings}>
          {hotel.imageUrls.map((image, index) => (
            <div key={index} className="h-[300px] sm:h-[400px] md:h-[400px] lg:h-[600px]">
              <img
                src={image}
                alt={hotel.name}
                className="rounded-md w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
        <div className="space-y-8">
          {/* Hotel Description */}
          <div className="bg-white shadow-md rounded-md p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
              About the Hotel
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {hotel.description}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptate exercitationem placeat a. Provident quibusdam cum nihil soluta qui, eveniet maiores. Aliquid consectetur, sint aliquam quam excepturi deserunt a esse magnam at tenetur sit impedit corrupti recusandae sequi doloremque accusamus natus repellendus provident aperiam enim quos eveniet molestias. Rerum iste, et ipsam quidem ratione consequuntur totam! Labore esse culpa dolor molestiae odio, reprehenderit temporibus corporis blanditiis aspernatur, ipsum voluptates, dolorem harum quaerat recusandae doloribus molestias quos minima ullam corrupti iure? Adipisci voluptate beatae eos at repellendus a recusandae dolorem dolor, nihil nisi, libero obcaecati fugiat minima ipsa exercitationem, totam deleniti corporis dignissimos? Ad vel expedita, minima maxime laborum iure, vitae explicabo excepturi hic officiis non. Aliquid ratione excepturi animi dolorem. Nam, magnam deserunt numquam perferendis perspiciatis, quo incidunt eos expedita dolores minus amet reprehenderit omnis ex facilis libero illo tenetur, delectus ipsum at distinctio voluptatem? Ut perspiciatis voluptas perferendis voluptatibus repellendus asperiores, aut ducimus impedit voluptatem, accusamus incidunt delectus amet quo? Unde beatae nisi ullam rerum facere saepe magnam incidunt libero dignissimos, tempore esse cum. Tempore assumenda, illum iste ducimus quisquam esse eos officia earum, dolorem fugiat placeat aut corrupti distinctio a, magni maiores necessitatibus numquam labore quibusdam sed! Deserunt autem minima natus veniam. Id, qui modi! Vel sit labore amet omnis officia inventore impedit officiis nisi aspernatur quidem, commodi cum vitae veniam voluptas laudantium non quisquam aut maxime! Incidunt, voluptatibus eaque veniam architecto, pariatur maxime molestias nostrum sapiente neque ea, aliquam aspernatur. Fuga dolor sequi dicta perspiciatis, officia magnam autem, a unde in natus magni quos officiis eaque ipsa blanditiis asperiores voluptatem doloremque nesciunt alias. Omnis atque consequuntur labore iure asperiores sed sequi unde minima ad enim sapiente, magni nesciunt quisquam id maiores laborum autem modi porro minus. At odio sapiente vero dolor amet deserunt. Doloribus quis dolor illum aut repellat excepturi provident voluptatum, ab accusantium tenetur totam assumenda deleniti quibusdam veniam dignissimos voluptatibus ratione explicabo esse quasi est repellendus laboriosam! Culpa, architecto ratione vero blanditiis cumque et voluptate animi dolores porro assumenda est! Quod porro ratione, inventore repellat distinctio quidem quos doloribus magnam nulla ex blanditiis voluptatibus fugit rerum error labore! Et molestias cupiditate dicta nulla sequi autem, quod asperiores recusandae eius ratione quas architecto sunt est corrupti sint, porro esse voluptates aliquid saepe laborum vitae consectetur totam beatae. Sint eum vitae error, culpa praesentium nemo iusto quo at harum mollitia porro, optio eaque alias adipisci ipsam tempore. Minus consequatur praesentium reprehenderit libero non iusto recusandae quia quisquam laborum deleniti ipsa alias, voluptas ex mollitia? Rerum, unde ab odit velit eveniet omnis iusto quibusdam enim corporis saepe doloremque cum dicta voluptas? Rem aut culpa atque tempore, rerum, aliquam temporibus id natus eum consequuntur aspernatur obcaecati quas voluptatum explicabo, doloremque consequatur? Aliquam saepe sed repudiandae quibusdam reiciendis dolor. Debitis necessitatibus rerum accusantium natus iste odit unde repellendus perferendis, eveniet suscipit nobis velit cum fugiat optio? Culpa eaque reprehenderit consequuntur commodi molestiae nemo excepturi eos ut autem. Voluptatum velit labore eaque sunt rerum, eveniet ullam deserunt dolores necessitatibus nisi iure?
            </p>
          </div>

          {/* Facilities */}
          <div className="bg-white shadow-md rounded-md p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
              Amenities
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {hotel.facilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 border rounded-md bg-blue-50 hover:bg-blue-100 transition duration-200"
                >
                  <span className="text-blue-600 font-medium text-lg">
                    {facility}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guest Info Form */}
        <div className="sticky top-4">
          <div className="p-4 sm:p-6 border border-slate-200 rounded-md shadow-lg bg-white">
            <GuestInfoForm
              pricePerNight={hotel.pricePerNight}
              hotelId={hotel._id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
