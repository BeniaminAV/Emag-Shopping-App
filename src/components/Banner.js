import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import {
  BannerFive,
  BannerFour,
  BannerOne,
  BannerSix,
  BannerThree,
  BannerTwo,
} from "../assets";
import Links from "./Link&Banner/Links";

function Banner() {
  return (
    <div className="mx-auto max-w-screen-xl  xxl:max-w-screen-2xl">
      <div className="mx-auto  max-w-screen-lg xl:max-w-screen-2xl">
        <div className="mx-auto max-w-screen-md  lg:max-w-screen-2xl">
          <div className="relative sm:mx-2  flex lg:mt-0">
            <div className="hidden lg:flex">
              <Links />
            </div>

            <div className="absolute bottom-0 z-20 h-32 w-full" />
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              interval={5000}
            >
              <div>
                <Image src={BannerOne} loading="lazy" alt="banner" />
              </div>
              <div>
                <Image src={BannerTwo} loading="lazy" alt="banner" />
              </div>
              <div>
                <Image src={BannerThree} loading="lazy" alt="banner" />
              </div>
              <div>
                <Image src={BannerFour} loading="lazy" alt="banner" />
              </div>
              <div>
                <Image src={BannerFive} loading="lazy" alt="banner" />
              </div>
              <div>
                <Image src={BannerSix} loading="lazy" alt="banner" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
