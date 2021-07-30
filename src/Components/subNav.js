import React, { useEffect, useState, Fragment, useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Image } from 'react-bootstrap';
import { makeStyles } from "@material-ui/core/styles";
import {
    Icon
} from "@material-ui/core/";
const useStyles = makeStyles(theme => ({
    root: {
        height: 20,
        backgroundColor: "Black"
    },

    "@media (max-width:500px)": {

        
        List: {
            width: "20%",
            height: 100,
            overflow: "hidden"
        }
    },

    "@media (min-width:800px)": {
        image: {
            height: "100%",

        },
        List: {
            width: "20%",
            height: 200,
            overflow: "hidden"
        },

    },

}))
export default function SubNav(props) {
    const classes = useStyles();

    const [items, setItems] = useState([]);
    useEffect(
        () => {
            setItems(props.items);
        },
    );
    console.log(items);
    return (items ? (<Fragment><div className={classes.listdiv}><ListGroup horizontal>
        {items.map((item, index) => {
            return (<Fragment key={index}><ListGroup.Item className={classes.List}>{item.name}
                <Image src={`/Assets/${item.src}`} className={classes.image} fluid />
            </ListGroup.Item>
            </Fragment>)

        })}</ListGroup></div></Fragment>) : "Coming Soon")

}
