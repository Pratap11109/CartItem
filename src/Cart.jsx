import React, { Component } from 'react'
import CartItem from './CartItem'

class Cart extends Component {
    state = {
        arr: [
            {
                id: 1,
                price: 1999,
                title: "Mobile",
                qty: 1
            },
            {
                id: 2,
                price: 3999,
                title: "LapTop",
                qty: 1
            }, {
                id: 3,
                price: 99,
                title: "Watch",
                qty: 1
            }
        ]
    }

    incrmentQty = obj => {
        console.log(obj);
        // const arr = [...this.state.arr];
        let index = this.state.arr.indexOf(obj);
        this.state.arr[index].qty += 1;
        this.setState({
            arr: this.state.arr
        })
    }

    deleteItem = (obj) => {
        const arr = this.state.arr.filter((n) => n !== obj);
        this.setState({
            arr
        })
    }

    decrmentQty = obj => {
        if (obj.qty === 1) return this.deleteItem(obj);
        let index = this.state.arr.indexOf(obj);
        this.state.arr[index].qty -= 1;
        this.setState({
            arr: this.state.arr
        })
    }

    render() {

        return (
            <div className="Cart-Container">
                { this.state.arr.map((obj) => {
                    return <CartItem key={obj.id} obj={obj} onIncrment={this.incrmentQty}
                        onDecrement={this.decrmentQty} onDelete={this.deleteItem} />
                })}
            </div>
        );
    }
}

export default Cart;