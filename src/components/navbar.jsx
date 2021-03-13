import React, { Component } from 'react';

function Navbar(props){
        return ( 
            <nav className="navbar navbar-light bg-dark " >
                 <h2 className="p-3" style={ {color:"white",fontFamily: "Times New Roman"}}>{props.counterNum}</h2>
                
            </nav>
         );
    
}
 
export default Navbar;