import React, { useState, useEffect, Fragment, useContext } from 'react';
import { Navbar, NavDropdown, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { makeStyles } from "@material-ui/core/styles";
import { callApi } from "../Datasource";
import apple from '../Assets/apple.svg';
import SearchIcon from "@material-ui/icons/Search";

import {
  IconButton,
} from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
  "@media (max-width:500px)": {
    nav: {
      width: 70
    },
    Icon: {
      color: "white"
    },
    logo: {
      height: 40,
      display: "inline-block",
      marginTop: 0,
      marginLeft: 13,
      marginRight: "auto",
    },
  },

  "@media (min-width:800px)": {
    header: {
      marginLeft: 10
    },
    nav: {
      width: 70,
      margin: [[0, 20, 0, 60]]
    },
    Icon: {
      color: "white"
    },
    root: {
      height: 44,
      opacity: 0.98,
      backgroundColor: "black"
    },
    logo: {
      height: 30,
      display: "inline-block",
      marginTop: 0,
      marginLeft: 13,
      marginRight: "auto",
    },
    tab: {
      backgroundColor: "black",
    },
    tabs: {
      color: "white",
    },

  },

}))
export default function Navigation() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [Q, setQ] = useState("")
  const handleDrawerOpen = e => {
    setOpen(!open)
  }
  useEffect(
    () => {
      Q ? (async function () {
        const status = await callApi("https://www.apple.com/search-services/suggestions/", null
          , "POST",
          JSON.stringify({
            locale: "en_US",
            id: "4884072c-8567-6760-7cc3-1e5e442f5f51",
            query: Q,
            src: "globalnav"
          })
        );
        const { response, error } = status;
        //  console.log(response, error);
        if (error) {
          alert(error+ " might be CORS ISSUE.");
        } else {
          console.log(response);
        }
      })() : console.log("do nothing");
    },
    [Q]
  );
  const taketoHome = () => {
    window.open("https://www.apple.com/");
  }
  return (<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
    <Container>
      <div  >
        <div className={classes.logo}>
          <img src={apple} onClick={taketoHome} className={classes.logo} alt="logo"></img></div></div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">


        </Nav>
        <Nav>
          <Nav.Link className={classes.nav} href="/mac">Mac</Nav.Link>
          <Nav.Link className={classes.nav} href="/iPad">iPad</Nav.Link>
          <Nav.Link className={classes.nav} href="/iPhone">iPhone
          </Nav.Link>
          <Nav.Link className={classes.nav} href="/watch">Watch</Nav.Link>
          <Nav.Link className={classes.nav} href="/mac">TV</Nav.Link>
          <Nav.Link className={classes.nav} href="/watch">Music</Nav.Link>
          <Nav.Link className={classes.nav} href="/mac">Support</Nav.Link>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              hidden={open}
              onChange={(e) => setQ(e.target.value)}
            />
            <IconButton className={classes.Icon} variant="outline-success" onClick={handleDrawerOpen}><SearchIcon /></IconButton>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
