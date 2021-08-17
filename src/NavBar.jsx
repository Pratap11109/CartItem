import React, { Component } from 'react'

const NavBar = (props) => {
    const { total } = props;
    return (
            < nav className="navbar navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    < a className="navbar-brand" href="#">
                        <img src="https://image.flaticon.com/icons/png/128/1170/1170576.png" alt="" width="50" height="55" className="d-inline-block align-text-top" />
                           <button className="btn btn-warning mx-2 flot-left"> {total}</button>
                     </a>
                </div>
            </nav>

    );
}

let styles={
                nav:{
                margin:"Auto",
        fontSize:30,
        color:"Red"
    }
}

export default NavBar;