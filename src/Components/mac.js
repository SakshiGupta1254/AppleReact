import React, { useEffect, useState, Fragment, useContext } from 'react';
import SubNav from './subNav';
export default function Mac() {
  const NavigationItems = [
    {
      name: "MacBook Air",
      src: "MC1.jpeg"
    },
    {
      name: "MacBook Pro 13",
      src: "MC2.jpeg"
    },
    {
      name: "MacBook Pro 16",
      src: "MC3.jpg"
    },
    {
      name: "iMac 24",
      src: "MC4.jpeg"
    },
    {
      name: "iMac 270 Pro",
      src: "MC1.jpeg"
    },
  ]
  return (<Fragment>
    <SubNav items={NavigationItems} />
    <div>MACS Here</div></Fragment>);
}