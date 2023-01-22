import React, { useState } from "react";
import { SearchIcon, PhoneOutgoingIcon } from "@heroicons/react/outline";
import { MenuIcon, CloseIcon } from "../../assets/ui/icons";
import { MenuBottom } from "../index";

function BottomNav() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="max-w-screen-3xl  from-[#ff1d25] via-[#a0328c] to-[#7040a4] to-[#4359c7] to-[#0082e6]  sm:bg-gradient-to-r">
        <div className="mx-auto max-w-screen-xl xxl:max-w-screen-2xl">
          <div className="mx-auto  max-w-screen-lg xl:max-w-screen-2xl">
            <div className="mx-auto max-w-screen-md  lg:max-w-screen-2xl">
              <div className="mx-2 hidden h-[40px] max-w-screen-2xl sm:flex">
                <ul className=" flex items-center justify-start space-x-2 text-sm text-white">
                  <button
                    onClick={handleClick}
                    className="mt-1  mb-1 flex items-center rounded-t-lg bg-white p-2 text-black"
                  >
                    <div className="lg:hidden">
                      {isActive ? (
                        <div>
                          <CloseIcon className=" w-7 text-black" />
                          Produse
                          <MenuBottom />
                        </div>
                      ) : (
                        <div>
                          <MenuIcon className="w-7 text-black" />
                          Produse
                        </div>
                      )}
                    </div>
                    <div className="hidden lg:flex">
                      <MenuIcon className="w-7 " />
                      <p className="text-black">Produse</p>
                    </div>
                  </button>
                  <li className="link-1">Genius</li>
                  <li className="link-1">Resigilate</li>
                  <li className="link-2">Oferta Zilei</li>
                  <li className="link-2">Cardul cu milioane de idei</li>
                  <li className="link-1">Vezi mai mult</li>
                </ul>

                <ul className=" flex flex-1  justify-end p-1  text-sm text-white">
                  <li className="link-1 flex items-center">
                    <PhoneOutgoingIcon className="mr-2 w-4 text-white sm:h-12" />
                    eMAG Suport
                  </li>
                </ul>
              </div>

              <div className="mx-3 my-2 flex h-9 flex-grow cursor-pointer items-center rounded-2xl border  border-emag-blue bg-white sm:hidden">
                <input
                  className="ml-4 flex h-full w-6 flex-shrink flex-grow  p-2 focus:outline-none"
                  type="text"
                  placeholder="Incepe o cautare noua"
                />
                <SearchIcon className="mr-2 w-5 text-emag-blue " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomNav;
