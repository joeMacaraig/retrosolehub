import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
//components
import { Card } from "../components/Cards/ShoeCard";
import { DisplayCard } from "../components/Cards/DisplayCard";
//icons
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const Home = () => {
  const [featured, setFeatured] = useState([]);

  const getFeatured = async () => {
    const data = await (
      await axios.get("http://localhost:15000/featured")
    ).data;
    setFeatured(data.data);
  };

  useEffect(() => {
    getFeatured();
  });

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 336;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 336;
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="h-full w-full justify-center items-center">
        <div className="h-[150vh] w-full flex flex-wrap md:h-[50vh] md:flex-nowrap justify-evenly md:space-x-5 space-x-0 p-5">
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1623684225794-a8f1f5037f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
            }}
            className="h-[400px] w-full bg-black bg-cover bg-center"
            alt="shoe-images"
          />
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1587855049254-351f4e55fe2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80')",
            }}
            className="h-[400px] w-full bg-black bg-cover bg-center"
            alt="shoe-images"
          />
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1559479083-f3b234ad0d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
            }}
            className="h-[400px] w-full bg-black bg-cover bg-center"
            alt="shoe-images"
          />
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center my-10 px-5">
          <p className="text-4xl tracking-tight font-semibold">
            Welcome To Dirty Soles
          </p>
          <p className="pt-1 mb-5">
            Discover the elegance of exclusive shoes that elevate your style.
            Check out our shoes
          </p>
          <div className="flex justify-center items-center">
            <a href="/products" as={NavLink} className="bg-slate-900 text-white rounded-full p-2.5 px-5 mr-10">
              Shop
            </a>
            <a href="/about-us">Our Policies</a>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-100">
        <p className="w-full text-3xl font-semibold pl-10 mt-10">
          Featured
        </p>
        <div className="w-full h-full flex justify-center items-center relative items-center p-5">
          {" "}
          <MdChevronLeft
            className="rounded-full bg-slate-900 fill-slate-100 cursor-pointer hover:opacity-50"
            onClick={slideLeft}
            size={35}
          />
          <div
            id="slider"
            className="w-[350px] mx-5 flex justify-start items-center overflow-x-scroll scroll overflow-y-hidden scroll-smooth scrollbar-hide md:w-full"
          >
            {" "}
            {featured.map((shoe, idx) => (
              <Card
                key={idx}
                name={shoe.name}
                img={shoe.images?.thumbnail}
                id={shoe.id}
                price={shoe.price}
                releaseDate={shoe.releaseDate}
                colorway={shoe.colorway}
                h="500"
                w="300"
              />
            ))}{" "}
          </div>{" "}
          <MdChevronRight
            className="rounded-full bg-slate-900 fill-slate-100 cursor-pointer hover:opacity-50"
            onClick={slideRight}
            size={35}
          />
        </div>
      </div>
      <div className="w-full">
        <p className="w-full text-3xl font-semibold pl-10 mt-10">
          Coming Soon
        </p>
        <div className="flex flex-row flex-wrap justify-evenly items-center p-6 mb-5">
          <DisplayCard
            img="https://images.unsplash.com/photo-1551479495-c29431c21a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            title="Collectibles"
            desc="Kaws, Skate Decks, Funko Pop!, Legos, & more..."
          />
          <DisplayCard
            img="https://images.unsplash.com/photo-1551479460-5e76c686816a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1435&q=80"
            title="Apparel"
            desc="Supreme, OFF-WHITE, Fear of God, BAPE & more..."
          />
          <DisplayCard
            img="https://images.unsplash.com/photo-1551479460-aea14a4277aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
            title="Accessories"
            desc="Supreme, Bags, Hats, Sunglasses, & more..."
          />
        </div>
      </div>
    </div>
  );
};
