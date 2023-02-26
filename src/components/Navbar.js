import React from "react";
import { NavLink } from "react-router-dom";

/*NavLinks styling */
const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "6px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};
function Navbar() {
  return (
    <div id="site-navbar">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid nav-container">
                <p className="navbar-brand">
                    Nutrition.App
                </p>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/"
                                exact
                                // style={linkStyles}
                                activeStyle={{
                                background: "green",
                            
                                }}
                            >
                                Home
                            </NavLink>
                        </li>    
                        <li className="nav-item">

                            <NavLink
                                className="nav-link"
                                to="/about"
                                exact
                                // style={linkStyles}
                                activeStyle={{
                                  background: "green",
                                }}
                            >
                            About
                            </NavLink>
                        </li>  
                        <li className="nav-item"> 

                            <NavLink
                                className="nav-link"
                                to="/build-muscle"
                                exact
                                // style={linkStyles}
                                activeStyle={{
                                  background: "green",
                                }}
                            >
                                BuildMuscle
                            </NavLink>
                        </li>
                        <li className="nav-item">  

                            <NavLink
                                className="nav-link"
                                to="/gain-weight"
                                exact
                                // style={linkStyles}
                                activeStyle={{
                                  background: "green",
                                }}
                                >
                                GainWeight
                            </NavLink>
                        </li>    
                        <li className="nav-item">   
                            <NavLink
                                className="nav-link"
                                to="/lose-weight"
                                exact
                                // style={linkStyles}
                                activeStyle={{
                                  background: "green",
                                }}
                                >
                                LoseWeight
                            </NavLink>
                        </li>  
                    </ul>      

                    <div class="rightNav">
                                    <input type="text" placeholder="Search.." />
                                    {/* <button class="btn">Search</button> */}
                    </div>
                            
                </div>
            </div> 
        </nav> 
    </div>          

   ) 
}

export default Navbar;