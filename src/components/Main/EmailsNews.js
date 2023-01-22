import Image from "next/image";
import React from "react";
import { Emails } from "../../assets";

function EmailsNews() {
  return (
    <div className="mx-2 flex bg-emag-blue from-[#ff1d25] via-[#a0328c] to-emag-blue lg:bg-gradient-to-r">
      <Image
        src={Emails}
        alt="email"
        priority
        className="hidden h-[261px] w-[400px] object-contain lg:flex"
      />

      <div className="p-10">
        <h2 className="py-2 text-3xl  font-semibold text-white xl:text-4xl  ">
          Abonează-te la newsletter eMAG și află de reducerile cu timp limitat!
        </h2>
        <p className=" text-xs font-semibold text-white">
          Prin abonarea la newsletter-ul eMAG confirm că am peste 16 ani.
        </p>
        <div className=" items-center justify-center pt-6 lg:flex">
          <input className="input-email" type="name" placeholder="Nume" />
          <input className="input-email" type="email" placeholder="Email" />
          <button className="mt-2 h-[36px] w-full cursor-pointer rounded-2xl bg-red-600 text-white hover:bg-red-700">
            Aboneaza-ma!
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailsNews;
