import React, { useState } from "react";
import { logo } from "../assets";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/cartSlice";
import { selectItem } from "../slices/favoriteSlice";
import { Menu } from "./index";
import { MenuIcon, CloseIcon } from "../assets/ui/icons";
import {
  UserIcon,
  SearchIcon,
  ShoppingCartIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  const item = useSelector(selectItem);
  const [isActive, setIsActive] = useState(false);

  // Menu
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <div className="mx-auto max-w-screen-xl xxl:max-w-screen-2xl">
        <div className="mx-auto  max-w-screen-lg xl:max-w-screen-2xl">
          <div className="mx-auto max-w-screen-md  lg:max-w-screen-2xl">
            <div className="mx-2 flex max-w-screen-2xl items-center  py-1">
              {/* Left Section */}
              <div className="flex flex-grow items-center  sm:flex-grow-0">
                <button onClick={handleClick} className="sm:hidden">
                  {isActive ? (
                    <div>
                      <CloseIcon className="w-7 text-emag-blue" />
                      <Menu />
                    </div>
                  ) : (
                    <MenuIcon className="w-7 text-emag-blue" />
                  )}
                </button>
                <Image
                  onClick={() => router.push("/")}
                  src={logo}
                  alt="logo"
                  className="h-[26px] w-[98px] cursor-pointer object-contain  sm:h-[36px] sm:w-[135px]"
                />
              </div>

              {/* SearcBar */}
              <div className="mx-3 hidden h-10 flex-grow cursor-pointer items-center rounded-2xl border border-emag-blue bg-white sm:flex">
                <input
                  className="ml-3 flex w-6 flex-shrink flex-grow focus:outline-none"
                  type="text"
                  placeholder="Incepe o cautare noua"
                />
                <SearchIcon className="mr-2 w-6  text-emag-blue" />
              </div>

              {/* Right Section */}
              <div className="flex items-center justify-center">
                <button onClick={!session ? signIn : signOut} className="link">
                  <div>
                    {session ? (
                      <img
                        src={session.user.image}
                        alt="User profile"
                        className="h-8 w-8 rounded-full"
                      />
                    ) : (
                      <UserIcon className=" w-7 text-emag-blue  " />
                    )}
                  </div>
                  <p className="links">
                    {session ? `Salut, ${session.user.name}` : "Contul meu"}
                  </p>
                </button>

                {session ? (
                  <button
                    className="link"
                    onClick={() => router.push("/Orders")}
                  >
                    <ShoppingBagIcon className="w-7 text-emag-blue" />
                    <p className="links">Comenzile mele</p>
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  className="link"
                  onClick={() => router.push("/Favorite")}
                >
                  <div className="flex">
                    <HeartIcon className="w-7 text-emag-blue " />
                    <span
                      style={{ display: item.length > 0 ? "block" : "none" }}
                      className="absolute mx-4 text-white"
                    >
                      <p className="absolute flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs">
                        {item.length}
                      </p>
                    </span>
                  </div>
                  <p className="links">Favorite</p>
                </button>

                <button onClick={() => router.push("/Cart")} className="link">
                  <div className="flex">
                    <span
                      style={{ display: items.length > 0 ? "block" : "none" }}
                      className="absolute mx-4 text-white"
                    >
                      <p className="absolute flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs sm:h-4 sm:w-4">
                        {items.length}
                      </p>
                    </span>
                    <ShoppingCartIcon className="w-7 text-emag-blue" />
                  </div>
                  <p className="links">Cosul meu</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
