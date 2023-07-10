import {AiFillCaretDown, AiFillCaretRight} from "react-icons/ai"
export const DropDownButton = ({ title, click, setClick, desc }) => {
  return (
    <>
      <button
        id="dropdownDefaultButton"
        type="button"
        onClick={() => setClick(!click)}
        className="flex w-full justify-between items-center py-2 mt-4 mb-3 rounded-sm border-b-2 border-black  focus:bg-slate-200"
      >
        <p className="mx-2 font-">{title}</p>
        {!click ? <AiFillCaretDown/> : <AiFillCaretRight/>}
      </button>
      {!click && <div className="w-full h-full p-5 text-justify text-slate-600 duration-100">{desc}</div>}
    </>
  );
};
