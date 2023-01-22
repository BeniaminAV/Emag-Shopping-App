import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import { anpcONE, anpcTwo } from "../../assets";

function Copyright() {
  return (
    <div className="max-w-screen-3xl bg-[#e7eff8]">
      <div className="mx-auto max-w-screen-xl xxl:max-w-screen-2xl">
        <div className="mx-auto  max-w-screen-lg xl:max-w-screen-2xl">
          <div className="mx-auto max-w-screen-md  lg:max-w-screen-2xl">
            <div className="mx-2">
              <div className="copy-links text-black">
                <p className="cursor-pointer hover:text-emag-blue">
                  <FacebookIcon />
                </p>
                <p className="cursor-pointer hover:text-emag-blue">
                  <InstagramIcon />
                </p>
                <p className="cursor-pointer hover:text-emag-blue">
                  <YouTubeIcon />
                </p>
              </div>

              <div className="copy-links">
                <p className="cursor-pointer">
                  <Image src={anpcONE} alt="anpc" />
                </p>
                <p className="cursor-pointer">
                  <Image src={anpcTwo} alt="anpc" />
                </p>
              </div>

              <div className="copy-links">
                <p>© 2023 Copyright: BeniaminAV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Copyright;
