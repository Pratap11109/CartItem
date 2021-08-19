import React, { Component } from "react";
import Cart from "./Cart";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    arr: [
      {
        id: 1,
        price: 1999,
        title: "Mobile",
        qty: 1,
        img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=316&q=80",
      },
      {
        id: 2,
        price: 3999,
        title: "LapTop",
        qty: 1,
        img: "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        price: 99,
        title: "Watch",
        qty: 1,
        img: "https://images.unsplash.com/photo-1451859757691-f318d641ab4d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0aGNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        price: 99,
        title: "Video Camera",
        qty: 1,
        img: "https://images.unsplash.com/photo-1589872307379-0ffdf9829123?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjBjYW1lcmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 5,
        price: 99,
        title: "Digital Watch",
        qty: 1,
        img: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMHdhdGNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
  };

  incrmentQty = (obj) => {
    console.log(obj);
    // const arr = [...this.state.arr];
    let index = this.state.arr.indexOf(obj);
    this.state.arr[index].qty += 1;
    this.setState({
      arr: this.state.arr,
    });
  };

  deleteItem = (obj) => {
    const arr = this.state.arr.filter((n) => n !== obj);
    this.setState({
      arr,
    });
  };

  decrmentQty = (obj) => {
    if (obj.qty === 1) return this.deleteItem(obj);
    let index = this.state.arr.indexOf(obj);
    this.state.arr[index].qty -= 1;
    this.setState({
      arr: this.state.arr,
    });
  };
  total = () => {
    let total = 0;
    this.state.arr.forEach((obj) => (total += obj.qty));
    return total;
  };

  totalamt = () => {
    let count = 0;
    this.state.arr.forEach((obj) => (count += obj.price * obj.qty));
    return count;
  };
  render() {
    const { arr } = this.state;
    return (
      <div className="App">
        <NavBar total={this.total()} totalamt={this.totalamt()} />
        <Cart
          arr={arr}
          className="container"
          onIncrese={this.incrmentQty}
          onDecrese={this.decrmentQty}
          onDelete={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
