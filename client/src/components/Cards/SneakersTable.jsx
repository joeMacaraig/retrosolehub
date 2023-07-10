import { useEffect, useState } from "react";
import { SneakersCard } from "./SneakersCard";
import axios from "axios";

export const SneakersTable = ({ search }) => {
  const [snkr, setSnkrs] = useState([])
  const getSnkrs = async () => {
    const data = await (
      await axios.get("http://localhost:15000/sneakers")
    ).data;
    setSnkrs(data.data.sneakers);
  };
  const addToInventory = async (id) => {
    const item = await (
      await axios.get(`http://localhost:15000/sneakers/${id}`)
    ).data;
    const inventoryItem = await await axios.get(
      `http://localhost:15000/inventory/${id}`
    );
    if (item !== inventoryItem) {
      const addData = await await axios.post(
        `http://localhost:15000/inventory/add/${id}`
      );
    }
  };
  const deleteSneaker = async (id) => {
    const item = await (
      await axios.get(`http://localhost:15000/sneakers/${id}`)
    ).data;
    if (item) {
      const deleteData = await await axios.delete(
        `http://localhost:15000/sneakers/delete/${id}`
      );
      window.location.reload();
    }
  };

  useEffect(() => {
    getSnkrs();
  });
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
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {snkr
            .filter((snkrs) => {
              return search.toLowerCase() === ""
                ? snkrs
                : snkrs.name.toLowerCase().includes(search);
            })
            .map((snkrs) => (
              <SneakersCard
                id={snkrs.id}
                img={snkrs.images.thumbnail}
                name={snkrs.name}
                colorway={snkrs.colorway}
                category={snkrs.category}
                brand={snkrs.brand}
                price={snkrs.price}
                add={addToInventory}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};
