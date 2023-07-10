import { ShoeCard } from "./ShoeCard";
import { Card } from "./ShoeCard";

export const Shoes = ({ shoe }) => {
  return (
    <div className="flex flex-wrap">
      {shoe.map((snkrs) => (
        <ShoeCard
          name={snkrs.name}
          img={snkrs.images.thumbnail}
          id={snkrs.id}
          price={snkrs.price}
        />
      ))}
    </div>
  );
};

export const Shoe = ({ shoe }) => {
  return (
    <div className="flex flex-wrap items-center justify-center p-auto m-auto">
      {shoe.map((snkrs) => (
        <Card
          name={snkrs.name}
          img={snkrs.images.thumbnail}
          id={snkrs.id}
          price={snkrs.price}
          releaseDate={snkrs.releaseDate}
          colorway={snkrs.colorway}
        />
      ))}
    </div>
  );
};

