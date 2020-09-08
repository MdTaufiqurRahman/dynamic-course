import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import "./Cart.css";

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, course) => total + course.price, 0);
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Purchase : <FontAwesomeIcon icon={faShoppingCart} /> <sup>{cart.length}</sup></h5>
            <h4>Total : {total}</h4>
        </div>
    );
};

export default Cart;