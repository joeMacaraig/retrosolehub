import { useState, useEffect } from "react";
import { InventoryCard } from "./InventoryCard";
import axios from "axios";

export const Inventory = ({ search }) => {
  const [inv, setInv] = useState([]);

  const getInv = async () => {
    const data = await (
      await axios.get("http://localhost:15000/inventory")
    ).data;
    setInv(data.data);
  };

  useEffect(() => {
    getInv();
  },[]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-black font-medium uppercase bg-gray-300">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product Image
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category / Brand
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-3 py-3">
            <span className="sr-only">Featured</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Update/Submit</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Delete/Cancel</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {inv
            .filter((snkrs) => {
              return search.toLowerCase() === ""
                ? snkrs
                : snkrs.name.toLowerCase().includes(search);
            }).sort(
            )
            .map((snkrs) => (
              <InventoryCard
                id={snkrs.id}
                img={snkrs.images.thumbnail}
                name={snkrs.name}
                colorway={snkrs.colorway}
                category={snkrs.category}
                brand={snkrs.brand}
                price={snkrs.price}
                feature={snkrs.featured}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};
