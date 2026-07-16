import Categories from "../components/Categories";
import Populars from "../components/Populars";

const Home = () => {
  return (
    <div className="relative h-auto">
      <div className="relative">
        <img className="" src="images/lp-banner.png" alt="heroImage" />

        <div className="z-0 text-white absolute top-25 left-5 -translate-y-1/2 flex flex-col justify-center items-start gap-1 sm:top-50 sm:left-10 lg:top-1/2">
          <p className="text-mist-300 text-sm sm:text-lg lg:text-2xl">
            New Collection
          </p>
          <h1 className="text-3xl text-theme-main font-semibold font-heading-4 sm:text-5xl text-shadow-2xs text-shadow-black lg:mt-4 lg:text-6xl">
            Elevate Your Style
          </h1>

          <p className="my-2 text-white-2 text-sm sm:text-lg">
            Discover our lates collection of premium <br /> products at amazing
            prices
          </p>

          <button className="py-2 px-4 bg-theme-dark rounded-xl mt-2 text-sm flex gap-4 sm:text-lg cursor-pointer active:scale-95 transition-all duration-150 lg:my-6">
            Shop Now
            <img className="invert" src="/actions/right-arrow.svg" alt="" />
          </button>
        </div>
      </div>

      <Categories />

      <Populars />
    </div>
  );
};

export default Home;
