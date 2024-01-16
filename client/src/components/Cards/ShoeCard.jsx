import { Link } from "react-router-dom";

export const Card = ({
  id,
  name,
  img,
  price,
  releaseDate,
  colorway,
  cursor = "pointer",
  h = 600,
  w = 400,
}) => {
  return (
    <Link
      style={{ cursor: `${cursor}` }}
      relative="path"
      to={`/products/${id}`}
    >
      <div
        key={id}
        id="card"
        className="bg-white flex flex-col justify-between items-center md:mb-10 mx-5 border relative p-2 mr-4 mb-4 hover:-translate-y-2 transition duration-200"
        style={{ height: `${h}px`, width: `${w}px` }}
      >
        <div className="flex w-full justify-end p-2">
          <div className="h-[80px] text-xl font-old">RSH</div>
        </div>
        <div className="w-full px-10  z-0">
          <img className="h-full w-full" src={img} alt={name} />
        </div>
        <div className="w-full opacity-0 text-black justify-center font-semibold flex flex-col hover:opacity-100 duration-300 absolute inset-0 bg-slate-50 bg-opacity-50">
          <p className="text-center">"{name}"</p>
        </div>
        <div className="text-sm font-medium h-[150px] w-full uppercase px-10 my-5">
          <div className="flex justify-between border-b-2 pb-3">
            <p>release date</p>
            <p>{releaseDate}</p>
          </div>
          <div className="flex justify-between border-b-2 py-3">
            <p>colorway</p>
            <p className="text-right">{colorway}</p>
          </div>
          <div className="flex justify-between pt-3">
            <p>price</p>
            <p>${price}.00</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export const ShoeCard = ({
  id,
  name,
  img,
  price,
  releaseDate,
  colorway,
  h = 600,
  w = 400,
}) => {
  return (
    <div
      key={id}
      id="card"
      className="bg-white flex flex-col justify-between items-center md:mb-10 mx-5 border relative p-2 mr-4 mb-4"
      style={{ height: `${h}px`, width: `${w}px` }}
    >
      <div className="flex w-full justify-end p-2">
        <div className="h-[80px] text-2xl font-old">RSH</div>
      </div>
      <div className="w-full px-10">
        <img className="h-full w-full" src={img} alt={name} />
      </div>
      <div className="text-sm font-medium h-[150px] w-full uppercase px-10 my-5">
        <div className="flex justify-between border-b-2 pb-3">
          <p>release date</p>
          <p>{releaseDate}</p>
        </div>
        <div className="flex justify-between border-b-2 py-3">
          <p>colorway</p>
          <p className="text-right">{colorway}</p>
        </div>
        <div className="flex justify-between pt-3">
          <p>price</p>
          <p>${price}.00</p>
        </div>
      </div>
    </div>
  );
};
