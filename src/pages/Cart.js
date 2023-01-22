import React from "react";
import { Header, Footer, Checkout, BgNav } from "../components";
import EmptyCart from "../components/Checkout/EmptyCart";
import { selectItems } from "../slices/cartSlice";
import { useSelector } from "react-redux";

function Cart() {
  const items = useSelector(selectItems);

  return (
    <div>
      <div className="sticky top-0 z-40 bg-white">
        <Header />
        <BgNav />
      </div>

      <div className="bg-[#f2f2f2]">
        {items.length === 0 ? <EmptyCart /> : <Checkout />}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
