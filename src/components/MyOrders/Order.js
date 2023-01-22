import React from "react";
import moment from "moment";
import Currency from "react-currency-formatter";

function Order({ id, amount, amountShipping, items, timestamp, images }) {
  return (
    <div className="rounded-mds relative border bg-white">
      <div className="flex items-center space-x-10 bg-[#e4f1f9] p-5 text-sm text-gray-600">
        <div>
          <p className="text-xs font-bold line-clamp-1">Comanda Plasata</p>
          <p>{moment.unix(timestamp).format("YYYY-MM-DD")}</p>
        </div>

        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p className="line-clamp-1">
            <Currency quantity={amount} currency="RON" /> - Livrare urmatoarea
            zi - <Currency quantity={amountShipping} currency="RON" />
          </p>
        </div>

        <p className="flex-1 self-end whitespace-nowrap text-right text-sm text-blue-500 sm:text-xl">
          {items.length} {items.length >= 2 ? "Produse" : "Produs"}
        </p>

        <p className="absolute top-2 right-2 w-40 truncate whitespace-nowrap text-xs lg:w-72">
          ID # {id}
        </p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image, i) => (
            <img
              src={image}
              key={i}
              alt="image"
              className="h-20 object-contain sm:h-32 "
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
