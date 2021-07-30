import React,{useEffect, useState, Fragment ,useContext} from 'react';
import SubNav from './subNav';
export default function Watch() {
const NavigationItems =[
  {
    name: "MacBook Air",
    src: "Watch1.jpeg"
  },
  {
    name: "MacBook Pro 13",
    src: "Watch2.jpg"
  },
  {
    name: "MacBook Pro 16",
    src: "Watch3.jpeg"
  },
  {
    name: "iMac 24",
    src: "Watch4.jpeg"
  },
  {
    name: "iMac 27",
    src: "Watch1.jpeg"
  },
  ]
    return (<Fragment>
      <SubNav items={NavigationItems}/>
    <div>Watch Here</div></Fragment>
      );
  }