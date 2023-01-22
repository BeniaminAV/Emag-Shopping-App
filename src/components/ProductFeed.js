import React from "react";
import Image from "next/image";
import Product from "./Main/Product/Product";
import { Corporate } from "../assets";
import { News, MarketPlace, EmailsNews } from "./index";

function ProductFeed({ products }) {
  return (
    <div className="mx-auto max-w-screen-xl  xxl:max-w-screen-2xl">
      <div className="mx-auto  max-w-screen-lg xl:max-w-screen-2xl">
        <div className="mx-auto max-w-screen-md  lg:max-w-screen-2xl">
          <div className="mx-auto  grid grid-flow-row-dense  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-6">
            <h2 className="title">Continua cumparaturile pentru</h2>

            {products
              .slice(0, 18)
              .map(({ id, title, price, description, image }) => (
                <Product
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  image={image}
                />
              ))}

            <h2 className="title">
              Cumparate frecvent cu produse din ultima ta comanda
            </h2>
            {products
              .slice(0, 12)
              .map(({ id, title, price, description, image }) => (
                <Product
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  image={image}
                />
              ))}

            <div className="col-span-full mx-2 py-1 sm:py-4 ">
              <Image
                src={Corporate}
                className="w-full object-contain"
                alt="corporate"
              />
            </div>

            <h2 className="title">Noutati</h2>
            <div className="col-span-full mx-2">
              <News />
            </div>

            <div className="col-span-full py-6">
              <EmailsNews />
            </div>

            <h2 className="title">Istoricul tau de navigare</h2>
            {products
              .slice(6, 12)
              .map(({ id, title, price, description, image }) => (
                <Product
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  image={image}
                />
              ))}

            <div className="col-span-full py-4">
              <MarketPlace />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFeed;
