import Head from "next/head";
import {
  Header,
  Banner,
  BottomNav,
  ProductFeed,
  Footer,
  BgNav,
} from "../components";
import { getSession } from "next-auth/react";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Emag</title>
      </Head>

      <div className="sticky top-0 z-40 bg-white">
        {/* Navbar */}
        <Header />
        <BgNav />
      </div>

      <main className="bg-[#f2f2f2]">
        {/* BottomNav */}
        <div className="bg-white">
          <BottomNav />
          <div className=" bg-[#f2f2f2]">
            <Banner/>
          </div>
        </div>
        {/* Banner */}
        {/* Product */}
        <ProductFeed products={products} />

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
      session,
    },
  };
}
