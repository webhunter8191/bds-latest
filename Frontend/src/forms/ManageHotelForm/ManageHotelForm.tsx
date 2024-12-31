import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypeSection";
import FacilitiesSection from "./FacilitiesSection";
import GuestsSection from "./GuestsSection";
import ImagesSection from "./ImagesSection";
import { HotelType } from "../../../../backend/src/shared/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export type HotelFormData = {
  name: string;

  type: string;
  pricePerNight: number;
  facilities: string[];
  imageFiles: FileList;
  imageUrls: string[];
roomCount:number,
  nearbyTemple: string[];
};

type Props = {
  hotel?: HotelType;
  onSave: (hotelFormData: FormData) => void;
  isLoading: boolean;
};
const ManageHotelForm = ({ onSave, isLoading, hotel }: Props) => {
  const formMethods = useForm<HotelFormData>();
  const { handleSubmit, reset } = formMethods;
  const navigate = useNavigate();

  useEffect(() => {
    reset(hotel);
  }, [hotel, reset]);

  const onSubmit = handleSubmit((formDataJson: HotelFormData) => {
    const formData = new FormData();
    if (hotel) {
      formData.append("hotelId", hotel._id);
    }
    formData.append("name", formDataJson.name);
    formData.append("type", formDataJson.type);
    formData.append("pricePerNight", formDataJson.pricePerNight.toString());
    formDataJson.nearbyTemple.forEach((temple) => {
      formData.append("nearByTemple[]", temple); // Allow multiple entries
    });

    formData.append("roomCount", formDataJson.roomCount.toString());
  

    formDataJson.facilities.forEach((facility, index) => {
      formData.append(`facilities[${index}]`, facility);
    });

    if (formDataJson.imageUrls) {
      formDataJson.imageUrls.forEach((url, index) => {
        formData.append(`imageUrls[${index}]`, url);
      });
    }

    Array.from(formDataJson.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });

    console.log("formadata is", formData);
    onSave(formData);
  });


   return (
     <FormProvider {...formMethods}>
       <form
         className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
         onSubmit={onSubmit}
       >
         <h1 className="text-3xl font-semibold text-center mb-6">
           Manage Hotel
         </h1>
         <DetailsSection />
         <TypeSection />
         <FacilitiesSection />
         <GuestsSection />
         <ImagesSection />
         <div className="flex justify-end mt-6 space-x-4">
           <button
             type="button"
             onClick={() => navigate("/my-hotels")}
             className="bg-gray-600 text-white py-2 px-4 font-semibold rounded-md hover:bg-gray-500"
           >
             Back
           </button>
           <button
             disabled={isLoading}
             type="submit"
             className="bg-blue-600 text-white py-2 px-4 font-semibold rounded-md hover:bg-blue-500 disabled:bg-gray-300"
           >
             {isLoading ? "Saving..." : "Save"}
           </button>
         </div>
       </form>
     </FormProvider>
   );
};

export default ManageHotelForm;
