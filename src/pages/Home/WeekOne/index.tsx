import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unselectItem } from "../../../features/meal/mealSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
interface Recipe {
  id: number;
  name: string;
  image: string;
  mealType: string[];
  instructions: string[];
  cuisine: string;
  rating: number;
}

interface RootState {
  meal: {
    selectedItemsWeekOne: Recipe[];
  };
}

const WeekOne: FC = () => {
  const dispatch = useDispatch();
  const selectedItemsWeekOne = useSelector(
    (state: RootState) => state.meal.selectedItemsWeekOne
  );

  const handleDelete = (id: number) => {
    dispatch(unselectItem({ week: "Week 1", id }));
  };

  return (
    <div className="container-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 py-10">
      {selectedItemsWeekOne.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white relative p-4 rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300"
        >
          <button
            onClick={() => handleDelete(recipe.id)}
            className="mt-2 bg-pink-100 rounded-3xl p-1 absolute z-10 left-8 text-red-600 hover:text-red-800"
          >
            <RiDeleteBin6Line />
          </button>
          <div className="relative">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <span className="absolute top-2 right-2 bg-black text-white text-xs px-3 py-1 rounded-full">
              {recipe.mealType[0]}
            </span>
          </div>

          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {recipe.name}
            </h2>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {recipe.instructions.join(" ")}
            </p>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-sm font-medium">
                Cuisine: <span className="text-gray-800">{recipe.cuisine}</span>
              </p>
              <p className="text-sm font-medium flex items-center">
                Rating:{" "}
                <span className="text-yellow-500 ml-1">
                  {"★".repeat(Math.round(recipe.rating))}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekOne;
