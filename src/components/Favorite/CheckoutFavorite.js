import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import Currency from "react-currency-formatter";
import { removeFromFavorite } from "../../slices/favoriteSlice";
import { addToCart } from "../../slices/cartSlice";
import { Genius } from "../../assets";

function CheckoutFavorite({ id, title, price, description, image, hasGenius }) {
  const dispatch = useDispatch();

  const addItemToCart = (id) => {
    const product = {
      id,
      title,
      price,
      description,
      image,
      hasGenius,
    };
    dispatch(addToCart(product));
    dispatch(removeFromFavorite({ id }));
  };

  const removeItemFromFavorite = () => {
    dispatch(removeFromFavorite({ id }));
  };

  return (
    <div className="bg-[#e4f1f9] p-2">
      <div className="grid h-[150px] grid-flow-row-dense grid-cols-3 items-center  justify-center bg-white lg:grid-cols-4 ">
        <div className="ml-2 py-2 sm:ml-10">
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
          <div className="hidden sm:flex"></div>

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

        <div className="col-span-1  ml-6 hidden lg:flex">
          <span>
            <h2 className="text-md ml-3.5 font-semibold">Descriere:</h2>
            <p className="ml-4  text-xs line-clamp-4">{description}</p>
          </span>
        </div>

        {/* Right add/remove button */}
        <div className="mr-2 flex flex-col  items-end justify-self-end p-2 py-4 sm:mr-10">
          <div className="pb-2 text-lg font-semibold">
            <Currency quantity={price} currency="RON" />
          </div>

          <div className="items-center justify-center sm:flex">
            <div className="flex justify-end">
              <button
                className="button px-1 text-xs text-emag-blue hover:underline"
                onClick={() => addItemToCart(id)}
              >
                Adauga in cos
              </button>
            </div>
            <div className="flex justify-end">
              <button
                className="button px-1 text-xs text-emag-blue hover:underline"
                onClick={removeItemFromFavorite}
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

export default CheckoutFavorite;
