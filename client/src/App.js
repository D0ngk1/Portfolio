//import Navbar from "./MyNavbar";
import React, {useState} from "react";
import Home from "./pages/Home";
//import About from "./pages/About";
import "./App.css"
import {Route, Routes} from "react-router-dom";

function App(){
    
    const [flipped, setIsFlipped]= useState(1);
    const handleFlip = () => {
        if (flipped===1)
            setIsFlipped(0);
        else
        setIsFlipped(1);
    };
    return (
        <>  
            <div className="header">
                <img className="logo" alt="spartan helmet" src="/helmGG3.png"/>
                <h1 className="name">DARYL <span className="">G</span>. <span className="last-name">G</span>UZMAN</h1>
            </div>
            <div className="tower-right-no-image"></div>
            <div className="tower-right"></div>
            <div className="bottom-container"></div>
            <Routes>
                    <Route path="/" element={<Home flipped={flipped} onFlip={handleFlip}/>}/>
            </Routes>
            
        </>
    )
}
export default App