import axios from "axios";
import { FC, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { selectMeal, unselectMeal } from "../../../features/meal/mealSlice";
interface Recipe {
  id: number;
  name: string;
  image: string;
  mealType: string[];
  instructions: string[];
  cuisine: string;
  rating: number;
}

const AllMeal: FC = () => {
  const dispatch = useDispatch();
  const selectedMeals = useSelector((state: any) => state.meal.selectedMeals);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6;

  // Fetch recipes from the API
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/recipes");
        setRecipes(response.data.recipes); // Extract recipes array from API response
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  // Calculate the index of the first and last recipe on the current page
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

  // Get the recipes for the current page
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const handleSelectMeal = (meal: Recipe) => {
    if (
      selectedMeals.some((selectedMeal: Recipe) => selectedMeal.id === meal.id)
    ) {
      dispatch(unselectMeal(meal)); // Unselect the meal
    } else {
      dispatch(selectMeal(meal)); // Select the meal
    }
  };

  return (
    <>
      <div className="container-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 py-10">
        {currentRecipes.map((recipe) => (
          <div
            onClick={() => handleSelectMeal(recipe)}
            key={recipe.id}
            className={`bg-white p-4 rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 ${
              selectedMeals.some(
                (selectedMeal: Recipe) => selectedMeal.id === recipe.id
              )
                ? " outline border-blue-900 transform "
                : ""
            }`}
          >
            {/* Recipe Image */}
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

            {/* Recipe Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {recipe.name}
              </h2>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {recipe.instructions.join(" ")}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-sm font-medium">
                  Cuisine:{" "}
                  <span className="text-gray-800">{recipe.cuisine}</span>
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

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-3 bg-blue-600 hover:bg-blue-900 text-white rounded-full mr-2 disabled:opacity-50"
        >
          <IoIosArrowBack />
        </button>
        <span className="px-4 py-2 text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-3 bg-blue-600 hover:bg-blue-900 text-white  rounded-full ml-2 disabled:opacity-50"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </>
  );
};

export default AllMeal;
