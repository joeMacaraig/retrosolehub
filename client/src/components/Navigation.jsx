import { NavLink } from "react-router-dom";
import { animateScroll as scrolls } from "react-scroll";

export const Navigation = () => {
  const onScroll = () => {
    scrolls.scrollTo(0, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="mr-6">
        <span className="font-old font-semibold text-xl tracking-tight hover:text-slate-700">
          <a href="/" as={NavLink}>
            DirtySoles
          </a>
        </span>
      </div>
      <div
        className="w-full sm:block font-semibold justify-end lg:flex lg:items-center lg:w-auto"
        id="navbar"
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="/"
            as={NavLink}
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-500 mr-4"
          >
            Home
          </a>
          <a
            href="/products"
            as={NavLink}
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 mr-4"
          >
            Products
          </a>
          <a
            href="/about-us"
            as={NavLink}
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 mr-4"
          >
            About
          </a>
          <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};
