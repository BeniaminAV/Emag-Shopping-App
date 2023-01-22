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

function Links() {
  return (
    <>
      <div className="w-[270px] bg-white shadow-lg">
        <li className="banner-link">
          <PhoneIphoneOutlinedIcon className="mr-2 w-5 " />
          <p className="banner-link-text">Laptop, Tablete & Telefoane</p>
        </li>

        <li className="banner-link">
          <MouseOutlinedIcon className="mr-2 w-5 " />
          <p className="banner-link-text">PC, Periferice & Software</p>
        </li>

        <li className="banner-link">
          <TvOutlinedIcon className="mr-2 w-5 " />
          <p className="banner-link-text">TV, Audio-Video & Foto</p>
        </li>

        <li className="banner-link">
          <LocalLaundryServiceOutlinedIcon className="mr-2 w-5 " />
          <p className="banner-link-text">Electrocasnice & Climatizare</p>
        </li>

        <li className="banner-link">
          <SportsEsportsOutlinedIcon className="mr-2 w-5 " />
          <p className="banner-link-text">Gaming, Carti & Birotica</p>
        </li>

        <li className="banner-link">
          <ShoppingBagOutlinedIcon className="mr-2 w-5 " />
          <p className="banner-link-text">Bacanie</p>
        </li>

        <li className="banner-link">
          <SnowshoeingOutlinedIcon className="mr-2 w-5 " />
          <p className="banner-link-text">Fashion</p>
        </li>

        <li className="banner-link">
          <WcOutlinedIcon className="mr-2 w-5 " />
          <p className="banner-link-text">Ingrijire personala & Cosmetice</p>
        </li>

        <li className="banner-link">
          <ChairOutlinedIcon className="mr-2 w-5 " />
          <p className="banner-link-text">Casa, Gradina & Bricolaj</p>
        </li>

        <li className="banner-link">
          <SportsTennisOutlinedIcon className="mr-2 w-5 " />
          <p className="banner-link-text">Sport & Activitati in aer liber</p>
        </li>

        <li className="banner-link">
          <DirectionsCarFilledOutlinedIcon className="mr-2 w-5 " />
          <p className="banner-link-text">Auto, Moto & RCA</p>
        </li>

        <li className="banner-link">
          <SmartToyOutlinedIcon className="mr-2 w-5 " />
          <p className="banner-link-text">Jucarii, Copii & Bebe</p>
        </li>
      </div>
    </>
  );
}

export default Links;
