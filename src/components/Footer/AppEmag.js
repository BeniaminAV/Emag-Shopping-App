import Image from "next/image";
import React from "react";
import { GOOGLE, IOS } from "../../assets/index";

function AppEmag() {
  return (
    <div className="max-w-screen-3xl bg-white sm:mt-2">
      <div className="mx-auto max-w-screen-xl xxl:max-w-screen-2xl">
        <div className="mx-auto  max-w-screen-lg xl:max-w-screen-2xl">
          <div className="mx-auto max-w-screen-md  lg:max-w-screen-2xl">
            <div className="mx-2 h-[228px] w-auto items-center justify-between bg-white lg:flex">
              <div className="text-black">
                <h2 className="py-2 text-xl font-semibold">
                  Descarcă aplicația eMAG
                </h2>
                <p className="py-2 text-xs">
                  Lasă-ne numărul tău de telefon și îți vom trimite link-ul de
                  download.
                </p>
              </div>

              <div className="flex items-center justify-center p-5">
                <input
                  type="text"
                  placeholder="07xxxxxxxx"
                  className="h-[36px]  border text-left outline-none sm:w-full lg:w-[197px] xl:w-[384px]"
                />
                <button className="h-[36px] w-[103px] bg-[#005BC3] text-white">
                  Trimite SMS
                </button>
              </div>

              <div className="flex cursor-pointer items-center justify-center p-5">
                <Image
                  src={GOOGLE}
                  alt="google"
                  className="h-[37px] w-[127px]"
                />
                <Image src={IOS} alt="ios" className="h-[37px] w-[127px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppEmag;
