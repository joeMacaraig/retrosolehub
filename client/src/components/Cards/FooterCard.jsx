export const FooterCard = ({ icon, title, desc }) => {
  return (
    <div className="flex lg:flex-1 md:h-[140px] flex-row w-full h-full justify-start items-start bg-zinc-800 p-5 md:mr-5 my-2 text-white text-sm">
      <div>{icon}</div>
      <div className="ml-3 mb-3">
        <p className="tracking-tighter font-medium mb-2">{title}</p>
        <p className="font-light">{desc}</p>
      </div>
    </div>
  );
};
