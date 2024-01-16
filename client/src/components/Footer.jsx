import { useRef } from "react";

import { FooterCard } from "./Cards/FooterCard";

//for email
import emailjs from "@emailjs/browser";

//icons
import {
  FaCcMastercard,
  FaCcDiscover,
  FaCcAmex,
  FaCcApplePay,
  FaCcPaypal,
  FaCcVisa,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

export const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0h9nwfx",
        "template_y5ef0mr",
        form.current,
        "u9bCfRW7KArEDsekO"
      )
      .then(
        (result) => {
          alert("Email Sent! ✅");
        },
        (error) => {
          alert(error.text + "❌");
        }
      );
    e.target.reset();
  };

  const getYear = () => {
    return new Date().getFullYear();
  }
  return (
    <>
      <div className="bg-white pt-5 w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-row flex-wrap justify-evenly items-center p-6 mb-5">
          <FooterCard
            icon={<MdOutlineVerified size={25} />}
            title="RetroSoleHub Verification"
            desc="Our verification, is our own designation and means that we
                inspect every item carefully everytime."
          />
          <FooterCard
            icon={<FaHandHoldingHeart size={23} />}
            title="Our Promise"
            desc="RetroSoleHub strive to earn and keep your trust. If we make a
            mistake, we'll make it right."
          />
          <FooterCard
            icon={<GiReceiveMoney size={25} />}
            title="Sell or Trade"
            desc="You can head over to our store with you and your shoes your
            willing to sell and trade."
          />
        </div>
      </div>
      <div className="divide-y divide-slate-100 w-full bg-zinc-800 text-white">
        <div className="flex flex-col justify-center items-center p-10">
          <p className="text-3xl text-center">
            Sign up for news and special offers
          </p>
          <div className="w-full flex justify-center items-center my-10">
            <form
              className="flex w-full flex md:w-1/2"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type="email"
                name="user_email"
                id="input_bar"
                class="w-1/2 border border-gray-300 text-gray-900 text-sm rounded-sm focus:border-blue-500 block w-full p-2.5 mr-5"
                placeholder="Email Address"
              />
              <button className="w-full w-1/2 bg-white cursor-pointer text-lime-700 p-2.5">
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
            <FaCcMastercard className="mr-7" size={"2em"} />
            <FaCcDiscover className="mr-7" size={"2em"} />
            <FaCcAmex className="mr-7" size={"2em"} />
            <FaCcVisa className="mr-7" size={"2em"} />
            <FaCcApplePay className="mr-7" size={"2em"} />
            <FaCcPaypal size={"2em"} />
          </div>
        </div>
        <div className="text-center italic font-medium bg-zinc-900 tracking-wide p-3">
          &copy;2022-{getYear()} RetroSoleHub
        </div>
      </div>
    </>
  );
};
