import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const DetailsSection = () => {
  const {
    register,
    setValue, // Add setValue to update the selected values
    watch, // Use watch to get the selected values for the nearbyTemple
    formState: { errors },
  } = useFormContext<HotelFormData>();

    const nearbyTemples = [
      "Prem Mandir",
      "Banke Bihari",
      "Dwarikadish",
      "ISKON",
      "Nidhi Van",
      "Krishna Janmbhoomi",
      "Mathura",
      "Vrindavan",
      "Gokul",
      "Goverdhan",
      "Barsana",
  ];
  
     const nearbyTempleValues = watch("nearbyTemple") || [];
     const handleTempleChange = (
       event: React.ChangeEvent<HTMLInputElement>
     ) => {
       const { value, checked } = event.target;

       if (checked) {
         // Add the temple if checked
         setValue("nearbyTemple", [...nearbyTempleValues, value]);
       } else {
         // Remove the temple if unchecked
         setValue(
           "nearbyTemple",
           nearbyTempleValues.filter((temple) => temple !== value)
         );
       }
     };


  return (
    <div className="space-y-6">
      <label className="block text-sm font-semibold text-gray-700">
        Name
        <input
          type="text"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          {...register("name", { required: "This field is required" })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </label>

      <div className="flex space-x-6">
        <label className="w-1/2 text-sm font-semibold text-gray-700">
          Price Per Night
          <input
            type="number"
            min={1}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            {...register("pricePerNight", {
              required: "This field is required",
            })}
          />
          {errors.pricePerNight && (
            <span className="text-red-500 text-sm">
              {errors.pricePerNight.message}
            </span>
          )}
        </label>

        <div className="text-gray-700 text-sm font-bold max-w-[50%]">
          <span>Attach a Tag</span>
          {nearbyTemples.map((temple) => (
            <label key={temple} className="flex items-center">
              <input
                type="checkbox"
                value={temple}
                checked={nearbyTempleValues.includes(temple)} // Check if the temple is selected
                onChange={handleTempleChange} // Custom change handler
              />
              <span className="ml-2">{temple}</span>
            </label>
          ))}
          {errors.nearbyTemple && (
            <span className="text-red-500">{errors.nearbyTemple.message}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
