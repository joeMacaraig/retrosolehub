import { useState } from "react";
import { SneakersTable} from "../components/Cards/SneakersTable";
import { Inventory } from "../components/Cards/Inventory";

export const Admin = () => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  
  return (
    <div className="max-w-full h-full flex flex-col justify-center items-center mx-auto overflow-hidden md: min-w-2xl md:max-w-full p-5">
      <div className="w-full text-4xl flex font-medium mb-10 pl-5">
        <ul class="w-full text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow flex dark:divide-gray-700 dark:text-gray-400">
          <li class="w-full">
            <button
              onClick={() => setToggle(false)}
              class="inline-block w-full p-4 bg-white rounded-l-lg hover:text-gray hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              aria-current="page"
            >
              Sneakers
            </button>
          </li>
          <li class="w-full">
            <button
              onClick={() => setToggle(true)}
              class="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Inventory
            </button>
          </li>
        </ul>
      </div>
      <div className="w-full flex items-center my-5 p-5">
        <div class="flex-1 mr-5">
          <input
            type="text"
            id="search-bar"
            onChange={(e) => setSearch(e.target.value)}
            class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Search Sneakers"
          ></input>
        </div>
        <div>
          <select className="block w-full p-2.5">
            <option>Sort By</option>
            <option>Order: A-Z</option>
            <option>Price: High-Low</option>
            <option>Price: Low-High</option>
          </select>
        </div>
      </div>
      <div className="w-full p-5">
        {toggle ? (
          <Inventory search={search} />
        ) : (
          <SneakersTable search={search} />
        )}
      </div>
    </div>
  );
};
