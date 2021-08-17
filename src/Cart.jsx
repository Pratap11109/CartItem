import React, { Component } from 'react'
import CartItem from './CartItem'

const Cart = (props) => {
    const { arr, onIncrese, onDecrese, onDelete } = props;
    return (
        <div className="Cart-Container">
            { arr.map((obj) => {
                return <CartItem key={obj.id}
                    obj={obj}
                    onIncrment={onIncrese}
                    onDecrement={onDecrese}
                    onDelete={onDelete} />
            })}
        </div>
    );
}

export default Cart;