//react
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { animateScroll as scrolls } from "react-scroll";

//components
import { ShoeCard } from "../components/Cards/ShoeCard";
import { DropDownButton } from "../components/DropDownButton";
import { Button } from "../components/Button";

//data
import axios from "axios";

//icons
import { TfiEmail } from "react-icons/tfi";
import { SlPhone } from "react-icons/sl";

export const ProductDetails = () => {
  const params = useParams(); //read doc
  const [productDetails, setProductDetails] = useState([]); //read state
  const [shipping, setShipping] = useState(true);
  const [trading, setTrading] = useState(true);

  const getProductDetails = async () => {
    const data = await (
      await axios.get(`http://localhost:15000/products/${params?.id ?? ""}`)
    ).data;
    setProductDetails(data.data);
  };

  const onScroll = () => {
    scrolls.scrollTo(0, {
      duration: 500,
      smooth: true,
    });
  };

  useEffect(() => {
    getProductDetails();
  });

  return (
    <div className="h-full w-full bg-stone-100 flex flex-row flex-wrap justify-evenly items-center pt-5">
      <div className="w-[500px] h-full flex flex-col justify-start items-start mr-10 md:w-[700px]">
        {/* Home / .. / .. / */}
        <div className="w-full h-full text-sm mx-5 mb-20">
          <span>
            <a href="/">Home</a>
          </span>
          <span>
            <a href="/products"> / Products</a>
          </span>
          <span> / {productDetails.brand}</span>
          <span> / {productDetails.name}</span>
        </div>
        {/* left side of page */}
        <div className="w-full h-full mb-10 mx-5">
          <p className="text-3xl font-medium mb-3">{productDetails.name}</p>
          <p className="text-lg uppercase mb-3">{productDetails.brand}</p>
          <p className="text-md">${productDetails.price}</p>
          <div className="w-full">
            <DropDownButton
              title="Shipping and Returns"
              click={shipping}
              setClick={setShipping}
              desc="Dirty Soles do not ship items or products. All purchases are made instore. We do not hold items for customers. ALL PURCHASES ARE FINAL.
              NO REFUNDS unless we make a mistake on our side."
            />
            <DropDownButton
              title="Trading or Selling"
              click={trading}
              setClick={setTrading}
              desc="Bring your shoes to trade. We offer store credit towards another shoe at our store. If you do not want to trade and want to sell, we offer to buy your shoe. We only buy authentic and exclusive footwear. Shoe prices do fluxate from time to time. We base our prices when buying shoes from StockX. This does not mean the shoes we sell are the same price as StockX."
            />
          </div>
          <div className="my-5">
            <Button title="Call" icon={<SlPhone />} />
            <HashLink
              to="/about-us#contact"
              scroll={(e) =>
                e.scrollIntoView({ behavior: "smooth", block: "end" })
              }
              onClick={onScroll}
              href="/about-us#contact"
              as={NavLink}
            >
              <Button title="Email" icon={<TfiEmail />} />
            </HashLink>
          </div>
        </div>
      </div>
      {/* right side of page */}
      <ShoeCard
        name={productDetails.name}
        img={productDetails.images?.thumbnail}
        id={productDetails.id}
        price={productDetails.price}
        releaseDate={productDetails.releaseDate}
        colorway={productDetails.colorway}
        cursor="default"
        h="700"
        w="500"
      />
    </div>
  );
};
