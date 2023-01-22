import React from "react";
import {
  PhoneIphoneOutlinedIcon,
  MouseOutlinedIcon,
  TvOutlinedIcon,
  LocalLaundryServiceOutlinedIcon,
  SportsEsportsOutlinedIcon,
  ShoppingBagOutlinedIcon,
  SnowshoeingOutlinedIcon,
  WcOutlinedIcon,
  ChairOutlinedIcon,
  SportsTennisOutlinedIcon,
  DirectionsCarFilledOutlinedIcon,
  SmartToyOutlinedIcon,
} from "../../assets/ui/icons/index";

function MenuBottom() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 top-20 mt-[13px]  z-40 flex lg:hidden  bg-black/50 ">
        <div
          className="h-full w-[270px] border-t bg-white shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <li className="banner-menu">
            <PhoneIphoneOutlinedIcon className="ml-3 mr-3 w-5 " />
            <p className="banner-menu-text">Laptop, Tablete & Telefoane</p>
          </li>

          <li className="banner-menu">
            <MouseOutlinedIcon className="ml-3 mr-3 w-5 " />
            <p className="banner-menu-text">PC, Periferice & Software</p>
          </li>

          <li className="banner-menu">
            <TvOutlinedIcon className="ml-3 mr-3 w-5 " />
            <p className="banner-menu-text">TV, Audio-Video & Foto</p>
          </li>

          <li className="banner-menu">
            <LocalLaundryServiceOutlinedIcon className="ml-3 mr-3 w-5 " />
            <p className="banner-menu-text">Electrocasnice & Climatizare</p>
          </li>

          <li className="banner-menu">
            <SportsEsportsOutlinedIcon className="ml-3 mr-3 w-5 " />
            <p className="banner-menu-text">Gaming, Carti & Birotica</p>
          </li>

          <li className="banner-menu">
            <ShoppingBagOutlinedIcon className="ml-3 mr-3 w-5 " />
            <p className="banner-menu-text">Bacanie</p>
          </li>

          <li className="banner-menu">
            <SnowshoeingOutlinedIcon className="ml-3 mr-3 w-5 " />
            <p className="banner-menu-text">Fashion</p>
          </li>

          <li className="banner-menu">
            <WcOutlinedIcon className="ml-3 mr-3 w-5 " />
            <p className="banner-menu-text">Ingrijire personala & Cosmetice</p>
          </li>

          <li className="banner-menu">
            <ChairOutlinedIcon className="ml-3 mr-3 w-5 " />
            <p className="banner-menu-text">Casa, Gradina & Bricolaj</p>
          </li>

          <li className="banner-menu">
            <SportsTennisOutlinedIcon className="ml-3 mr-3 w-5 " />
            <p className="banner-menu-text">Sport & Activitati in aer liber</p>
          </li>

          <li className="banner-menu">
            <DirectionsCarFilledOutlinedIcon className="ml-3 mr-3 w-5 " />
            <p className="banner-menu-text">Auto, Moto & RCA</p>
          </li>

          <li className="banner-menu">
            <SmartToyOutlinedIcon className="ml-3 mr-3 w-5 " />
            <p className="banner-menu-text">Jucarii, Copii & Bebe</p>
          </li>
        </div>
      </div>
    </>
  );
}

export default MenuBottom;
