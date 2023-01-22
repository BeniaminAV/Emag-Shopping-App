import Image from "next/image";
import React from "react";
import { Market } from "../../assets";

function MarketPlace() {
  return (
    <div className="mx-2 flex h-[191px]  items-center justify-center  bg-[#005BC3] text-white lg:h-[291px] ">
      <div className="p-0  lg:p-6 ">
        <h2 className="flex  justify-center  text-2xl font-semibold lg:justify-start">
          EMAG Merketplace
        </h2>
        <p className="flex  justify-center py-2 text-3xl font-semibold lg:justify-start">
          Creste-ti afacerea!
        </p>

        <p className="market-link">
          Acces instant la sute de mii de clienti unici, zilnic
        </p>
        <p className="market-link">Inregistrarea afacerii tale este gratuita</p>
        <p className="market-link">
          Esti la doar cateva click-uri de vanzari spectaculoase
        </p>

        <div className="mt-3 flex  h-[38px] w-[315px] cursor-pointer items-center justify-center  rounded-3xl border-2 border-red-600 hover:border-white hover:bg-white hover:text-red-600">
          <button>Vreau sa vand pe eMAG</button>
        </div>
      </div>

      <div className="hidden  flex-1 items-center  justify-end lg:flex">
        <Image src={Market} height={291} alt="market" />
      </div>
    </div>
  );
}

export default MarketPlace;
