import { NavLink } from "react-router-dom";

export const Button = ({ icon, title, link }) => {
  return (
    <a
      href={link}
      as={NavLink}
      className="w-full px-8 py-2 rounded-full flex justify-center items-center bg-black text-white font-medium my-2"
    >
      <div className="mr-3">{icon}</div>
      {title}
    </a>
  );
};
