import { useRef } from "react";

//for email
import emailjs from "@emailjs/browser";

//icons
import { FaCcMastercard } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";

export const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gou06pv",
        "template_bvq3ysz",
        form.current,
        "36rruiJjj07_NtJUv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="divide-y divide-slate-500 w-full bg-zinc-900 text-white">
      <div className="flex flex-col justify-center items-center p-10">
        <p className="text-3xl text-center">
          Sign up for news and special offers
        </p>
        <div className="w-full flex justify-center items-center my-10">
          <form className="flex w-full flex md:w-1/2" ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              id="search-bar"
              class="w-1/2 border border-gray-300 text-gray-900 text-sm rounded-sm focus:border-blue-500 block w-full p-2.5 mr-5"
              placeholder="Search Sneakers"
            />
            <button className="w-full w-1/2 bg-white cursor-pointer text-red-600 p-2.5">
              Sign up
            </button>
          </form>
        </div>
        <p className="text-xs">
          By providing your email, you agree to the Terms of Use and Privacy
          Policy.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-10">
        <p className="tracking-tight text-sm mb-5">
          Accepted Payment Methods In Store
        </p>
        <div className="flex justify-center items-center">
          <FaCcMastercard className="mr-7" size={"2em"}/>
          <FaCcDiscover className="mr-7" size={"2em"}/>
          <FaCcApplePay className="mr-7" size={"2em"}/>
          <FaCcPaypal className="mr-7" size={"2em"}/>
          <FaCcVisa size={"2em"}/>
        </div>
      </div>
      <div className="text-center font-medium tracking-wide p-3">&copy;2022 Dirty Soles</div>
    </div>
  );
};
