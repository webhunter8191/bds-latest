import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const TypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  const typeWatch = watch("type");

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Hotel Type</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {hotelTypes.map((type) => (
          <label
            key={type}
            className={`cursor-pointer bg-gray-200 text-gray-700 text-sm rounded-full px-4 py-2 font-semibold transition-all duration-300 ease-in-out ${
              typeWatch === type
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-100"
            }`}
          >
            <input
              type="radio"
              value={type}
              {...register("type", { required: "Please select a hotel type" })}
              className="hidden"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>

      {errors.type && (
        <span className="text-red-500 text-sm font-medium mt-2 inline-block">
          {errors.type.message}
        </span>
      )}
    </div>
  );
};

export default TypeSection;
