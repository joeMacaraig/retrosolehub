import { useState, useEffect } from "react";
import axios from "axios";
import { Inventory } from "../components/Cards/Inventory";

export const Admin = () => {
  const [inv, setInv] = useState([]);
  const [search, setSearch] = useState("");

  const getInv = async () => {
    const data = await (await axios.get("http://localhost:15000/inventory")).data;
    setInv(data.data);
  };
  useEffect(() => {
    getInv();
  });

  return (
    <div className="max-w-full h-full flex flex-col justify-center items-center mx-auto overflow-hidden md: min-w-2xl md:max-w-full p-5">
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
        <Inventory shoe={inv} search={search}/>
      </div>
    </div>
  );
};