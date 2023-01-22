import React from "react";
import Copyright from "./Footer/Copyright";
import { AppEmag, FooterLinks } from "./index";

function Footer() {
  return (
    <div>
      <AppEmag />
      <FooterLinks />
      <Copyright />
    </div>
  );
}

export default Footer;
