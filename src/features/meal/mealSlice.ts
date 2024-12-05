import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MealState {
  selectedMeals: any[]; // Store meal IDs for selected meals
  selectedItemsWeekOne: any[];
  selectedItemsWeekTwo: any[];
  selectedItemsWeekThree: any[];
  selectedItemsWeekFour: any[];
}

const initialState: MealState = {
  selectedMeals: [],
  selectedItemsWeekOne: [],
  selectedItemsWeekTwo: [],
  selectedItemsWeekThree: [],
  selectedItemsWeekFour: [],
};

const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {
    selectMeal: (state, action: PayloadAction<any>) => {
      if (!state.selectedMeals.includes(action.payload)) {
        state.selectedMeals.push(action.payload);
      }
    },
    selectMealWeek: (
      state,
      action: PayloadAction<{ week: string; meals: any[] }>
    ) => {
      const { week, meals } = action.payload;
      const allMeals = [
        ...state.selectedItemsWeekOne,
        ...state.selectedItemsWeekTwo,
        ...state.selectedItemsWeekThree,
        ...state.selectedItemsWeekFour,
      ];

      // Filter out any meal that's already selected in another week or within the same week
      const newMeals = meals.filter(
        (meal) => !allMeals.some((existingMeal) => existingMeal.id === meal.id)
      );

      // Assign the filtered meals to the appropriate week
      switch (week) {
        case "Week 1":
          state.selectedItemsWeekOne = [
            ...state.selectedItemsWeekOne,
            ...newMeals,
          ];
          break;
        case "Week 2":
          state.selectedItemsWeekTwo = [
            ...state.selectedItemsWeekTwo,
            ...newMeals,
          ];
          break;
        case "Week 3":
          state.selectedItemsWeekThree = [
            ...state.selectedItemsWeekThree,
            ...newMeals,
          ];
          break;
        case "Week 4":
          state.selectedItemsWeekFour = [
            ...state.selectedItemsWeekFour,
            ...newMeals,
          ];
          break;
        default:
          break;
      }
    },
    unselectMeal: (state, action: PayloadAction<any>) => {
      state.selectedMeals = state.selectedMeals.filter(
        (selectedMeal) => selectedMeal.id !== action.payload.id // Compare by `id`
      );
    },
    unselectItem: (
      state,
      action: PayloadAction<{ week: string; id: number }>
    ) => {
      switch (action.payload.week) {
        case "Week 1":
          state.selectedItemsWeekOne = state.selectedItemsWeekOne.filter(
            (item) => item.id !== action.payload.id
          );
          break;
        case "Week 2":
          state.selectedItemsWeekTwo = state.selectedItemsWeekTwo.filter(
            (item) => item.id !== action.payload.id
          );
          break;
        case "Week 3":
          state.selectedItemsWeekThree = state.selectedItemsWeekThree.filter(
            (item) => item.id !== action.payload.id
          );
          break;
        case "Week 4":
          state.selectedItemsWeekFour = state.selectedItemsWeekFour.filter(
            (item) => item.id !== action.payload.id
          );
          break;
        default:
          break;
      }
    },
    // unselectItem: (state, action: PayloadAction<number>) => {
    //   state.selectedItemsWeekOne = state.selectedItemsWeekOne.filter(
    //     (item) => item.id !== action.payload
    //   );
    // },
    clearMeals: (state) => {
      state.selectedMeals = [];
    },
  },
});

export const {
  selectMeal,
  unselectItem,
  selectMealWeek,
  unselectMeal,
  clearMeals,
} = mealSlice.actions;
export default mealSlice.reducer;
