import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Display from "./components/Display";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-bg-main h-screen w-screen text-white lg:flex">
      <div
        className={`bg-bg-dark  fixed left-0 top-0 z-100 h-screen w-full opcaity-30 transition-all duration-300 ease-in-out lg:w-[30vw] lg:translate-x-0 md:w-[50vw] ${isOpen ? "translate-x-0 " : "-translate-x-full"}`}
      >
        <Sidebar openNav={setIsOpen} />
      </div>

      <div
        className="lg:fixed lg:right-0 z-0 lg:w-[70vw] overflow-auto h-screen
        "
      >
        <Display openNav={setIsOpen} />
      </div>
    </div>
  );
};

export default App;
