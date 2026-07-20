import Categories from "../components/Categories";
import Populars from "../components/Populars";

const Home = () => {
  return (
    <div className="relative h-auto">
      <div className="relative">
        <img className="" src="images/Hero_Banner.png" alt="heroImage" />
      </div>

      <Categories />

      <Populars />
    </div>
  );
};

export default Home;
