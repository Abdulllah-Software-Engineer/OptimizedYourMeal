import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./features/meal/mealSlice";

export default configureStore({
  reducer: { meal: mealReducer },
});
