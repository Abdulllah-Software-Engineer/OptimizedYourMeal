// import { useEffect, useState } from "react";
// import axios from "axios";

// const Recipes = () => {
//   const [recipes, setRecipes] = useState([]);

//   // Fetch recipes from the API
//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await axios.get("https://dummyjson.com/recipes");
//         setRecipes(response.data.recipes); // Extract recipes array from API response
//       } catch (error) {
//         console.error("Error fetching recipes:", error);
//       }
//     };
//     fetchRecipes();
//   }, []);

//   return (
//     // <div className="max-w-screen-xl mx-auto p-6">
//     //   {/* Tabs Section */}
//     //   <div className="flex items-center justify-between mb-6">
//     //     <div className="flex space-x-4">
//     //       <button className="border-b-2 border-blue-500 text-blue-500 font-medium">
//     //         All Meals
//     //       </button>
//     //       <button className="text-gray-500 hover:text-blue-500">Week 1</button>
//     //       <button className="text-gray-500 hover:text-blue-500">Week 2</button>
//     //       <button className="text-gray-500 hover:text-blue-500">Week 3</button>
//     //       <button className="text-gray-500 hover:text-blue-500">Week 4</button>
//     //     </div>
//     //     <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
//     //       Add to Week
//     //     </button>
//     //   </div>

//     //   {/* Recipe Cards */}
//     //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//     //     {recipes.map((recipe) => (
//     //       <div
//     //         key={recipe?.id}
//     //         className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
//     //       >
//     //         {/* Recipe Image */}
//     //         <div className="relative">
//     //           <img
//     //             src={recipe.image}
//     //             alt={recipe.name}
//     //             className="w-full h-48 object-cover"
//     //           />
//     //           <span className="absolute top-2 right-2 bg-black text-white text-xs px-3 py-1 rounded-full">
//     //             {recipe.mealType[0]}
//     //           </span>
//     //         </div>

//     //         {/* Recipe Content */}
//     //         <div className="p-4">
//     //           <h2 className="text-lg font-semibold text-gray-800">
//     //             {recipe.name}
//     //           </h2>
//     //           <p className="text-sm text-gray-600 mt-2 line-clamp-3">
//     //             {recipe.instructions.join(" ")}
//     //           </p>
//     //           <div className="mt-4 flex justify-between items-center">
//     //             <p className="text-sm font-medium">
//     //               Cuisine:{" "}
//     //               <span className="text-gray-800">{recipe.cuisine}</span>
//     //             </p>
//     //             <p className="text-sm font-medium flex items-center">
//     //               Rating:{" "}
//     //               <span className="text-yellow-500 ml-1">
//     //                 {"★".repeat(Math.round(recipe.rating))}
//     //               </span>
//     //             </p>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     ))}
//     //   </div>
//     // </div>
//   );
// };

// export default Recipes;
