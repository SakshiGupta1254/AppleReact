import React, { useState, useEffect, Fragment, useContext } from 'react';
import strings from './index';
import { makeStyles } from "@material-ui/core/styles";
import { RootContext } from "../App";
import Ipad from "./iPad";
import HomePage from "./homePage";
import Mac from './mac';
import Watch from './watch';
import {
  Switch,
  Route
} from "react-router-dom";
import Iphone from "./iPhone";
import Navigation from './Navigation';

const useStyles = makeStyles(theme => ({
  root: {
    height: 20,
    backgroundColor: "Black"
  },
  Walmartlogo: {
    display: "inline-block",
    marginLeft: 370,
    marginRight: "auto",
  },
  "@media (max-width:500px)": {
    logo: {
      height: 20,
      display: "inline-block",
      marginTop: 4,
      marginLeft: 13,
      marginRight: "auto",
    },
  },

  "@media (min-width:800px)": {
    root: {
      height: 44,
      opacity: 0.98,
      backgroundColor: "black"
    },
    tab: {
      backgroundColor: "black",
    },
    tabs: {
      color: "white",
    },

  },

}))
export default function Header() {
  const value = "1";
  const [desktopdevice, setDesktopdevice] = useState(false);
  const classes = useStyles();

  const { user, loading, count } = useContext(RootContext);
  useEffect(() => {
    if (window.innerWidth > 800) { setDesktopdevice(true) }
    else { setDesktopdevice(false) };
    //console.log(history);
    return;
  },
    []
  );
  let pathname = window.location.pathname;
  return (
    <div>
      <Navigation />
      <Switch>

        <Route exact path='/' className={classes.tabs} component={HomePage} />
        <Route path='/mac' className={classes.tabs} component={Mac} />
        <Route path="/iPad" className={classes.tabs} component={Ipad} />
        <Route path="/iPhone" className={classes.tabs} component={Iphone} />
        <Route path="/watch" className={classes.tabs} component={Watch} />
        {/*         
        </div> */}

      </Switch>
    </div>
  )
}
