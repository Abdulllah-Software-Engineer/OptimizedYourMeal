import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMealWeek } from "../features/meal/mealSlice";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const WeekSelectionModal: FC<ModalProps> = ({ isOpen, closeModal }) => {
  const [selectedWeek, setSelectedWeek] = useState<string>("");
  const dispatch = useDispatch();
  const selectedMeals = useSelector((state: any) => state.meal.selectedMeals);

  const handleSave = () => {
    if (selectedWeek) {
      dispatch(selectMealWeek({ week: selectedWeek, meals: selectedMeals }));
      closeModal();
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl text-center font-semibold mb-4">Select Week</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedWeek("Week 1")}
              className={`btn ${
                selectedWeek === "Week 1" ? "bg-blue-300" : "bg-gray-200"
              } hover:bg-blue-400 text-white rounded px-4 py-2`}
            >
              Week 1
            </button>
            <button
              onClick={() => setSelectedWeek("Week 2")}
              className={`btn ${
                selectedWeek === "Week 2" ? "bg-blue-300" : "bg-gray-200"
              } hover:bg-blue-400 text-white rounded px-4 py-2`}
            >
              Week 2
            </button>
            <button
              onClick={() => setSelectedWeek("Week 3")}
              className={`btn ${
                selectedWeek === "Week 3" ? "bg-blue-300" : "bg-gray-200"
              } hover:bg-blue-400 text-white rounded px-4 py-2`}
            >
              Week 3
            </button>
            <button
              onClick={() => setSelectedWeek("Week 4")}
              className={`btn ${
                selectedWeek === "Week 4" ? "bg-blue-300" : "bg-gray-200"
              } hover:bg-blue-400 text-white rounded px-4 py-2`}
            >
              Week 4
            </button>
          </div>
          <div className="flex justify-center mt-10">
            <button onClick={closeModal} className="btn bg-gray-500 hover:bg-gray-600 text-white rounded px-4 py-2">
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="btn bg-blue-900 hover:bg-light-blue-600 text-white rounded px-4 py-2 ml-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default WeekSelectionModal;
