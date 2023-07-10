import { useState, useEffect } from "react";
import axios from "axios";
import { ImStarFull } from "react-icons/im";
export const InventoryCard = ({
  id,
  img,
  name,
  colorway,
  category,
  brand,
  price,
  feature,
}) => {
  const [toggle, setToggle] = useState(false);
  const [featured, setFeature] = useState(false);
  const [prices, setPrices] = useState("");

  const getFeature = () => {
    setFeature(feature);
  };

  const updateInventory = async (id) => {
    console.log(featured, prices);
    const data = await (
      await axios.put(`http://localhost:15000/inventory/update/${id}`, {
        prices,
        featured,
      })
    ).data;
  };
  const deleteInventory = async (id) => {
    const item = await (
      await axios.get(`http://localhost:15000/inventory/${id}`)
    ).data;
    if (item) {
      const deleteData = await await axios.delete(
        `http://localhost:15000/inventory/delete/${id}`
      );
    }
  };
  useEffect(() => {
    getFeature();
  }, []);
  return (
    <tr class="bg-white border text-black even:bg-gray-100">
      <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap shrink-0">
        <img
          className="max-h-[75px] max-w-[100px] mix-blend-multiply"
          src={img}
        />
      </th>
      <td class="px-6 py-4 ">{name}</td>
      <td class="px-6 py-4">{colorway}</td>
      <td class="px-6 py-4">
        {category} / {brand}
      </td>
      {!toggle ? (
        <td class="px-6 py-4">${price}</td>
      ) : (
        <td class="px-6 py-4">
          <input
            placeholder={price}
            value={prices}
            onChange={(e) => setPrices(e.target.value)}
          />
        </td>
      )}
      <td class="px-6 py-4 text-center">
        {!featured ? (
          <button
            type="button"
            onClick={() => {
              setFeature(!featured);
            }}
            class="flex items-center whitespace-nowrap border-purple-500 border hover:bg-purple-500 text-purple-500 hover:text-white font-bold py-2 px-4 rounded"
          >
            <ImStarFull />
            <p className="ml-2">Featured</p>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setFeature(!featured);
            }}
            class="flex items-center whitespace-nowrap border-purple-500 border bg-purple-500 text-white font-bold py-2 px-4 rounded"
          >
            <ImStarFull />
            <p className="ml-2">Featured</p>
          </button>
        )}
      </td>
      <td class="px-6 py-4 text-center">
        {!toggle ? (
          <button
            type="button"
            onClick={() => {
              setToggle(true);
            }}
            class="whitespace-nowrap border-blue-500 border hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 rounded duration-500"
          >
            Update
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              updateInventory(id);
            }}
            class="whitespace-nowrap border-blue-500 border hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        )}
      </td>
      <td class="px-6 py-4 text-center">
        {!toggle ? (
          <button
            type="button"
            onClick={() => {
              deleteInventory(id);
            }}
            class="whitespace-nowrap border-red-500 border hover:bg-red-500 text-red-500 hover:text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setToggle(false);
            }}
            class="whitespace-nowrap border-red-500 border hover:bg-red-500 text-red-500 hover:text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        )}
      </td>
    </tr>
  );
};
