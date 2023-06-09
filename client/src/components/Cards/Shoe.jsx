import { ShoeCard } from "./ShoeCard";

export const Shoes = ({ shoe }) => {
  return (
    <div className="flex flex-wrap">
      {shoe.map((snkrs) => (
        <ShoeCard
          name={snkrs.name}
          img={snkrs.images.thumbnail}
          id={snkrs.id}
          price={snkrs.price}
          desc={snkrs.desc}
        />
      ))}
    </div>
  );
};
