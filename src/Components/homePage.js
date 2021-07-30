import React, { useEffect, useState, Fragment, useContext } from 'react';
import { Image } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(4),
      width: theme.spacing(60),
      height: theme.spacing(40),
    },
  },
  imgcontainer: {
    height: "20%",
    width: "20%"
  },
}));
export default function HomePage() {
  const classes = useStyles();
  return (<Fragment>
    <div className="imgcontainer">
      <Image src={`/Assets/Home.PNG`} className={classes.image} fluid />
    </div>
  </Fragment>);

}