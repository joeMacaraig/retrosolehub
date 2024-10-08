import Image from "next/image";

export const SneakerCard = (sneaker: SneakerProps) => {
  return (
    <div className="p-4 w-[250px] h-[250px] font-bold text-black">
      <Image
        src={sneaker.images?.regular}
        width={100}
        height={100}
        alt={sneaker.name}
      />
      <h1>{sneaker.name}</h1>
      <p>{sneaker.price}</p>
    </div>
  );
};
