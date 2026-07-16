import Navlist from "./Navlist";

const Sidebar = ({ openNav }) => {
  const closeSidebar = () => {
    openNav(false);
  };

  const navlist = [
    {
      navicon: "/navbar/home.svg",
      title: "Home",
      path: "/",
    },
    {
      navicon: "/navbar/products.svg",
      title: "Products",
      path: "/products",
    },
    {
      navicon: "/navbar/cart.svg",
      title: "Cart",
      path: "/cart",
    },
    {
      navicon: "/navbar/offers.svg",
      title: "Deals & Offers",
      path: "deals&offers",
    },
    {
      navicon: "/actions/wishlist.svg",
      title: "Wishlist",
      path: "wishlist",
    },
    {
      navicon: "/navbar/setting.svg",
      title: "Setting",
      path: "setting",
    },
  ];

  return (
    <div className="h-screen bg-bg-main">
      <div className="flex justify-between items-center border-2 border-theme-main bg-bg-dark rounded py-4 px-4">
        <div className="flex justify-start items-center gap-2 font-heading-4 font-semibold">
          <img
            className="h-16 rounded-full"
            src="/icons/newlogo.png"
            alt="logo"
          />

          <h1 className="text-4xl">KrownStore</h1>
        </div>

        <img
          onClick={closeSidebar}
          className="invert h-12 cursor-pointer lg:hidden"
          src="/actions/closesidebar.svg"
          alt="sidebarclose"
        />
      </div>

      <div
        onClick={closeSidebar}
        className="py-8 flex flex-col gap-6 px-6 md:border-theme-main md:border-2 rounded-b-lg bg-bg-main h-screen overflow-auto"
      >
        {navlist.map((items, idx) => {
          return <Navlist key={idx} list={items} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
