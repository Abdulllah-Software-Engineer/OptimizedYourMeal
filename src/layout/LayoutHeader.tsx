import { FC } from "react";

const LayoutHeader: FC = () => {
  return (
    <>
      <header className="relative flex w-[100%] justify-center bg-transparent">
        <section className="h-60 flex overflow-hidden w-full relative">
          <div className="absolute inset-0  bg-gradient-to-r from-[#fbeeee] via-[#d8c3d9] to-[#c8e1f2] opacity-50 backdrop-blur-sm z-10"></div>

          <img
            src="/background.webp"
            className="absolute inset-0 object-cover w-full h-full"
            alt="Background"
          />

          <div className="mx-auto flex justify-center items-center relative z-10">
            <div className="flex flex-col items-center justify-center text-center text-black">
              <h1 className="text-4xl font-bold">Optimized Your Meal</h1>
              <p className="py-5 font-aeonik-regular text-[20px] leading-[30px]">
                Select Meal to Add in a week. You will be able to edit, modify,
                and change the Meal Weeks.
              </p>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default LayoutHeader;
