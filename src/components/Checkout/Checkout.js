import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { selectItems, selectTotal } from "../../slices/cartSlice";
import Currency from "react-currency-formatter";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  const total = useSelector(selectTotal);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user.email,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div className="mx-auto max-w-screen-xl xxl:max-w-screen-2xl">
      <div className="mx-auto  max-w-screen-lg xl:max-w-screen-2xl">
        <div className="mx-auto max-w-screen-md  lg:max-w-screen-2xl">
          <div className="mx-2 flex max-w-screen-2xl items-center  py-1">
            <main className="w-full py-3">
              <h2 className="text-2xl font-normal">Cosul meu</h2>
              <div className="mt-5 items-start justify-between lg:flex">
                <div>
                  {items.map((item, i) => (
                    <CheckoutProduct
                      key={i}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      rating={item.rating}
                      image={item.image}
                      hasGenius={item.hasGenius}
                    />
                  ))}
                </div>

                <div className="mt-3  bg-white p-10 shadow-md lg:mt-0 lg:ml-5  ">
                  <h2 className="py-2 text-xl font-semibold">Sumar comanda</h2>
                  {items.length > 0 && (
                    <>
                      <h2 className="whitespace-nowrap">
                        Total ({items.length} produse) : {""}
                        <span className="font-bold">
                          <Currency quantity={total} currency="RON" />
                        </span>
                      </h2>
                      <p className="line-clamp-1">
                        Cost livrare : 0 (livrate cu genius)
                      </p>

                      <div className="border-b-2 py-2"></div>

                      <h2 className="whitespace-nowrap py-2 text-xl font-semibold">
                        Total : {""}
                        <span className="font-bold">
                          <Currency quantity={total} currency="RON" />
                        </span>
                      </h2>

                      <button
                        role="link"
                        onClick={createCheckoutSession}
                        disabled={!session}
                        className={`button mt-2 flex h-[36px] w-full items-center justify-center rounded-md bg-[#005BC3] text-white hover:bg-[#004485]  ${
                          !session &&
                          "cursor-not-allowed border-gray-200 from-gray-300 to-gray-500 text-gray-300"
                        }`}
                      >
                        {!session ? "Sign&In pentru a continua" : "Continua"}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
