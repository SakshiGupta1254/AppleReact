import React, { useEffect, useState, Fragment, useContext } from 'react';
import SubNav from './subNav';
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
  pages: {
    display: 'flex',
    float: 'right',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing('auto'),
      height: theme.spacing(6),
    },
  },
  project: {
    padding: [[50, 0, 30, 50]],
  }
}));
export default function Iphone() {
  const classes = useStyles();
  const [noData, setNoData] = useState(false);
  const NavigationItems = [{
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
    <div>Iphones Here</div></Fragment>);

}