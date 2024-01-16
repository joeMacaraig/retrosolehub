import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

//icons
import { TfiEmail } from "react-icons/tfi";
import { SlPhone } from "react-icons/sl";

export const About = () => {
  const form = useRef();
  const sendFeedback = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0h9nwfx",
        "template_buzo5hd",
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
  return (
    <div className="h-auto w-full flex flex-col justify-center items-center">
      <div className="w-full justify-evenly items-center flex flex-wrap md:flex-nowrap p-10">
        <img className="w-[400px] m-2" src="/R.png" />{" "}
        <div className="h-auto w-[600px] m-2 p-5 text-justify text-lg">
          <p className="text-3xl font-medium text-lime-800 mb-2">Our Missions</p>
          <p>
            At our core, we are driven by a mission to make exclusive and
            authentic shoe's easier for people to purchase the right shoes. We
            believe that fashion should be accessible to all and our store
            enables us to make that vision a reality
          </p>
        </div>
      </div>
      <div id="policy" className="h-full w-full p-10">
        <div className="w-full justify-evenly flex flex-wrap md:flex-nowrap border-y-4 border-gray-300 py-10 md:px-10">
          <div className="w-[500px] text-4xl font-semibold mb-5 md:mr-5">
            Our Policy
          </div>
          <div className="flex flex-col w-[600px] text-lg text-justify">
            <p className="font-semibold mb-5">
              Our store enforces a strict policy. No refunds are available
              unless the mistake is on our side. ALL SALES ARE FINAL
            </p>
            <h2 className="font-medium">Refunds</h2>
            <ol className="list-disc px-5 text-slate-500 mb-5">
              <li>
                If not proven unautherized authentic in 3 days after recieving
                item you will not be eligible for refund.
              </li>
              <li>If we have not shown or stated all flaws completely.</li>
              <li>
                If there is an issue with sizing/pricing/condition, it is the
                buyers responsibility to request flaws and sizing prior to
                purchase.
              </li>
            </ol>
            <h2 className="font-semibold">Buying & Shipping</h2>
            <p className="text-slate-600 py-2 mb-5">
              RetroSoleHub do not ship items or products. All the products shown
              on our website is what we have in our store. You can always give
              us a call or come in store to see if we have your size. We do not
              hold shoes for any customers, it is first come first serve.
            </p>
            <h2 className="font-semibold">
              Selling? RetroSoleHub Looks to Buy!
            </h2>
            <p className="text-slate-600 py-2 mb-5">
              We only buy authentic and exlusive shoes from our customers. Shoe
              prices do fluxuate, we base our prices of shoes from the StockX
              market prices. We make sure to give you a reasonable price. Can't
              come instore? You can email us photos, the size, flaws (if used),
              and price (customer's intended price for the shoe) of the shoe.
            </p>
          </div>
        </div>
      </div>
      <div id="contact" className="h-full w-full p-10">
        <div className="w-full justify-evenly flex flex-wrap md:flex-nowrap">
          <div className="w-[500px] text-4xl font-semibold mb-5">
            Contact Us
          </div>
          <div className="w-[600px] text-lg text-justify space-y-5">
            <p className="text-slate-600">
              We would love to hear from you and give us your feedback! You can
              contact us through email or phone. We are committed to providing
              the newest trends and style of shoes for our customers. We can't
              wait to connect with you!
            </p>
            <div className="w-[300px] space-y-2">
              <div className="flex items-center">
                <SlPhone />
                <p className="w-full mx-2">+1-234-456-7890 </p>
              </div>
              <div className="flex items-center">
                <TfiEmail />
                <p className="w-full mx-2">retrosolehub@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="form"
          className="w-full flex flex-col justify-center items-center mt-20"
        >
          <form className="w-full sm:p-5" ref={form} onSubmit={sendFeedback}>
            <p className="text-3xl border-b-2 border-blue-600 w-fit font-medium mt-5 mb-5">
              Send Us a Message
            </p>
            <div className="flex">
              <div className="mr-5 w-full">
                <label className="font-medium block mb-2">Name</label>
                <input
                  name="user_name"
                  className="p-3 border rounded border-black w-full"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="w-full">
                <label className="font-medium block mb-2">Email</label>
                <input
                  name="user_email"
                  className="p-3 border rounded border-black w-full"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="font-medium block mb-2">Message</label>
              <textarea
                name="message"
                className="w-full p-3 border rounded border-black"
                placeholder="Message..."
                minLength="10"
                cols="30"
                rows="5"
                required
              />
            </div>
            <div className="flex justify-between mt-10">
              <button
                className="border-2 border-blue-500 rounded-full py-2 px-5 hover:bg-blue-500 hover:text-white"
                type="submit"
              >
                Submit
              </button>
              <button
                className="border-2 border-red-500 rounded-full py-2 px-5 hover:bg-red-500 hover:text-white"
                type="reset"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
