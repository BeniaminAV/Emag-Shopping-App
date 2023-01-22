import React from "react";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import CheckoutFavorite from "./CheckoutFavorite";
import { selectItem, selectFull } from "../../slices/favoriteSlice";

function MyFavorite() {
  const item = useSelector(selectItem);
  const full = useSelector(selectFull);

  return (
    <div className="mx-auto max-w-screen-xl xxl:max-w-screen-2xl">
      <div className="mx-auto  max-w-screen-lg xl:max-w-screen-2xl">
        <div className="mx-auto max-w-screen-md  lg:max-w-screen-2xl">
          <div className="mx-2 flex max-w-screen-2xl items-center  py-1">
            <main className="w-full py-3">
              <h2 className="text-2xl font-normal">Favorite</h2>
              <div className="mt-5">
                <div>
                  {item.map((item, i) => (
                    <CheckoutFavorite
                      key={i}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      description={item.description}
                      image={item.image}
                      hasGenius={item.hasGenius}
                    />
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyFavorite;
