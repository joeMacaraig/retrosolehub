import { useState, useEffect } from "react";
import axios from "axios";
import { Shoe } from "../components/Cards/Shoes";
import { Pagination } from "../components/Pagination";

export const Products = () => {
  const [shoes, setShoes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const shoesPerPage = 20;
  const category = [];
  const brand = [];

  const getShoes = async () => {
    const data = await (
      await axios.get("http://localhost:15000/inventory")
    ).data;
    setShoes(data.data);
  };

  useEffect(() => {
    getShoes();
  });

  shoes.map((x) => {
    if (brand.includes(x.brand) === false) {
      brand.push(x.brand);
    }
  });

  console.log(category);
  const lastIndex = currentPage * shoesPerPage;
  const firstIndex = lastIndex - shoesPerPage;
  const currentShoes = shoes.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const prev = (pageNumber) => {
    if (pageNumber !== 1) {
      setCurrentPage(pageNumber - 1);
    }
  };
  const next = (pageNumber) => {
    if (pageNumber < Math.ceil(shoes.length / shoesPerPage)) {
      setCurrentPage(pageNumber + 1);
    }
  };

  return (
    <div className="max-w-full h-full flex flex-col justify-center items-center mx-auto overflow-hidden md: min-w-2xl md:max-w-full p-5">
      <div className="w-full text-4xl font-medium mb-10  pl-8 md:pl-32 md:ml-32">
        <div>All Products</div>
      </div>
      <div
        id="shoe-display"
        className="w-full flex flex-col justify-center items-center"
      >
        <Shoe shoe={currentShoes} />
        <Pagination
          itemPerPage={shoesPerPage}
          totalItems={shoes.length}
          paginate={paginate}
          current={currentPage}
          prev={prev}
          next={next}
        />
      </div>
    </div>
  );
};
