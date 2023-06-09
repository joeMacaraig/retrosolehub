import { useState, useEffect } from "react";
import axios from "axios";
import { Shoes } from "../components/Cards/Shoe";
import { Pagination } from "../components/Pagination";

export const Products = () => {
  const [shoes, setShoes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const shoesPerPage = 21;

  const getShoes = async () => {
    const data = await (
      await axios.get("http://localhost:15000/sneakers")
    ).data;
    setShoes(data.data.sneakers);
  };

  useEffect(() => {
    getShoes();
  });


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
      <div className="w-full text-4xl justify-start font-medium mb-10 pl-5">
        <div>All Products</div>
      </div>
      <div className="flex justify-center items-center p-10">
        <Shoes shoe={currentShoes} />
      </div>
      <Pagination
        itemPerPage={shoesPerPage}
        totalItems={shoes.length}
        paginate={paginate}
        current={currentPage}
        prev={prev}
        next={next}
      />
    </div>
  );
};
