import { useSession, getSession } from "next-auth/react";
import React from "react";
import moment from "moment";
import database from "../../firebase";
import { Header, Order, BgNav, Footer, EmptyOrder } from "../components";

function Orders({ orders }) {
  const { data: session } = useSession();

  console.log(orders);

  return (
    <div>
      <div className="sticky top-0 z-40 bg-white">
        <Header />
        <BgNav />
      </div>

      <div>
        {orders.length === 0 ? (
          <EmptyOrder />
        ) : (
          <main className="bg-[#f2f2f2] pb-4">
            <div className="mx-auto max-w-screen-xl xxl:max-w-screen-2xl">
              <div className="mx-auto  max-w-screen-lg xl:max-w-screen-2xl">
                <div className="mx-auto max-w-screen-md  lg:max-w-screen-2xl">
                  <div className="mx-2  max-w-screen-2xl  py-1">
                    <h1 className="mb-2 border-b  pb-1 text-3xl">
                      Comenzile Mele
                    </h1>

                    {session ? (
                      <h2 className="text-lg font-semibold">
                        {orders.length} Comenzi
                      </h2>
                    ) : (
                      <h2 className="text-lg font-semibold">
                        Te rog logheaza-te pentru a vedea comenzile tale
                      </h2>
                    )}

                    <div className="mt-5 space-y-4">
                      {orders?.map(
                        ({
                          id,
                          amount,
                          amountShipping,
                          items,
                          timestamp,
                          images,
                        }) => (
                          <Order
                            key={id}
                            id={id}
                            amount={amount}
                            amountShipping={amountShipping}
                            items={items}
                            timestamp={timestamp}
                            images={images}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  //   User credentials
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  //  firebase db
  const stripeOrders = await database
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  // stripe orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      images: order.data().images,
      amountShipping: order.data().amount_shipping,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders,
    },
  };
}
