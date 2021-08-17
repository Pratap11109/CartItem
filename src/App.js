import React, { Component } from 'react';
import Cart from './Cart';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
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
      }, {
        id: 4,
        price: 99,
        title: "Watch",
        qty: 1
      }, {
        id: 5,
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
  total= ()=> {
    let total=0;
  this.state.arr.forEach((obj)=>total+=obj.qty);
    return total;
  }

  render() {
    const { arr } = this.state;
    return (
      <div className="App">
        
        <NavBar total={this.total()} />
        < Cart arr={arr}
        className="container"
          onIncrese={this.incrmentQty}
          onDecrese={this.decrmentQty}
          onDelete={this.deleteItem} />
      </div>);
  }
}

export default App;
