import { FC, useState } from "react";
import AllMeal from "./AllMeal";
import WeekOne from "./WeekOne";
import WeekTwo from "./WeekTwo";
import WeekThree from "./WeekThree";
import WeekFour from "./WeekFour";
import WeekSelectionModal from "../../components/WeekSelectionModal";
import { useSelector } from "react-redux";

const Home: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All Meals");

  const handleTabChange = (tab: string) => setActiveTab(tab);
  const selectedMeals = useSelector((state: any) => state.meal.selectedMeals);

  const renderTabContent = () => {
    switch (activeTab) {
      case "All Meals":
        return <AllMeal />;
      case "Week 1":
        return <WeekOne />;
      case "Week 2":
        return <WeekTwo />;
      case "Week 3":
        return <WeekThree />;
      case "Week 4":
        return <WeekFour />;
      default:
        return null;
    }
  };

  const handleAddToWeek = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      <div className="container-wrapper py-4">
        <h1 className="font-bold text-2xl">Week Orders</h1>
      </div>
      <div className="flex items-center  justify-between border-b border-gray-200 bg-white px-40 py-8">
        <div className="container-wrapper flex space-x-10 text-gray-600">
          {["All Meals", "Week 1", "Week 2", "Week 3", "Week 4"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`${
                activeTab === tab
                  ? "border-b-2 border-blue-900 text-blue-900"
                  : "hover:text-blue-900"
              } px-2 pb-1 text-lg font-bold`}
            >
              {tab}
            </button>
          ))}
        </div>
        <button
          disabled={selectedMeals.length === 0}
          onClick={handleAddToWeek}
          className={`rounded px-3 py-2 text-sm font-bold text-white ${
            selectedMeals.length === 0
              ? "bg-gray-400 cursor-not-allowed opacity-50"
              : "bg-blue-900 hover:bg-blue-800"
          }`}
        >
          Add to Week
        </button>
      </div>
      {renderTabContent()}
      <WeekSelectionModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        // selectedMeals={selectedMeals}
      />
    </>
  );
};

export default Home;
