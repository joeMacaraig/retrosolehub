export const DisplayCard = ({ img, title, desc }) => {
  return (
    <div className="flex lg:flex-1 flex-col w-full h-full justify-start items-start p-5 md:mr-5">
      <img className="w-full object-cover" src={img} />
      <p className="my-2 text-lg font-semibold">{title}</p>
      <p className="text-slate-600">{desc}</p>
    </div>
  );
};
