import { Link } from "react-router-dom";

export const ShoeCard = ({ id, name, img, price }) => {
  return (
    
    <Link relative="path" to={`/products/${id}`}>
      <div key={id} className="h-[200px] w-[300px] relative m-2 hover:cursor-pointer hover:-translate-y-2 transition duration-200 mr-4 mb-3">
        <div className="absolute inset-0 bg-cover bg-center z-0">
          <img className="w-full h-full p-1" src={img} />
        </div>
        <div className="opacity-0 justify-center items-center text-center text-lg text-black font-semibold flex flex-col hover:opacity-100 duration-300 absolute inset-0 z-10 bg-slate-50 bg-opacity-50">
          <p>"{name}"</p>
          <p>${price}.00</p>
        </div>
      </div>
    </Link>
  );
};