import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Guests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-100 p-6 rounded-lg">
        <label className="text-gray-700 text-sm font-semibold">
          Rooms
          <input
            className="border rounded w-full py-2 px-3 mt-2"
            type="number"
            min={1}
            {...register("roomCount", {
              required: "This field is required",
            })}
          />
          {errors.roomCount?.message && (
            <span className="text-red-500 text-sm font-medium mt-2 inline-block">
              {errors.roomCount?.message}
            </span>
          )}
        </label>
       
      </div>
    </div>
  );
};

export default GuestsSection;
