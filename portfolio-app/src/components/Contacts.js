import React from "react";

import { Frame, Page } from "framer";
import "./contacts.css";

const Contacts =()=> {
  return (
    <Page width={350} height={350} radius={30}>
      <Frame size={350} radius={30} background={"#fff"} />
      <Frame size={350} radius={30} background={"#fff"} />
      <Frame size={350} radius={30} background={"#fff"} />
    </Page>
  );
}

export default Contacts;