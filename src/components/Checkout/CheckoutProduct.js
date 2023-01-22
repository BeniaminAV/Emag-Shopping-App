import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Genius } from "../../assets/index";
import Currency from "react-currency-formatter";
import { addToCart, removeFromCart } from "../../slices/cartSlice";

function CheckoutProduct({ id, title, price, rating, image, hasGenius }) {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      rating,
      image,
      hasGenius,
    };
    dispatch(addToCart(product));
  };

  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="bg-[#e4f1f9] p-2">
      <div className="grid h-[150px] grid-flow-row-dense grid-cols-3  items-center justify-center bg-white ">
        <div className="ml-2 py-2 sm:ml-0">
          <Image
            src={image}
            width={75}
            height={75}
            className="object-contain md:h-[120px] md:w-[120px]"
            alt="image"
          />
        </div>

        {/* Middle */}
        <div className="col-span-1  my-auto">
          <p className="font-semibold line-clamp-2 sm:text-sm lg:text-xl">
            {title}
          </p>
          <p className="text-sm">Disponibilitate: In stoc</p>
          <div className="hidden sm:flex">
            <p className="text-md lg:text-md  cursor-pointer line-clamp-1  hover:underline">
              Frecvent cumpărate împreună
            </p>
          </div>

          {hasGenius && (
            <div className=" hidden items-center space-x-2 sm:flex">
              <Image
                src={Genius}
                width={50}
                height={50}
                loading="lazy"
                alt="prime"
              />
              <p className="text-xs text-gray-500 line-clamp-1">
                Transport gratuit urmatoarea zi
              </p>
            </div>
          )}
        </div>

        {/* Right add/remove button */}
        <div className="flex flex-col items-end  justify-self-end p-2 py-4">
          <div className="pb-2 text-lg font-semibold">
            <Currency quantity={price} currency="RON" />
          </div>

          <div className="items-center justify-center sm:flex">
            <div className="">
              <button
                className=" button px-1 text-xs  text-emag-blue hover:underline"
                onClick={addItemToCart}
              >
                <p className="line-clamp-1">Adauga inca un produs</p>
              </button>
            </div>
            <div className="flex justify-end">
              <button
                className="button px-1 text-xs text-emag-blue hover:underline"
                onClick={removeItemFromCart}
              >
                Sterge
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
