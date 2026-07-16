import { Link } from "react-router-dom";

const Navlist = ({ list }) => {
  return (
    <div className="bg-bg-dark">
      <Link
        className="font-heading-4 flex gap-4 items-center font-semibold text-lg rounded-lg py-4 px-4 bg-theme-dark w-full hover:bg-theme-light transition-all duration-400"
        to={list.path}
      >
        <img className="h-8 invert" src={list.navicon} alt="" />
        {list.title}
      </Link>
    </div>
  );
};

export default Navlist;
