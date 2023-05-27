import Navbar from "./Navbar";
import React, {useState} from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
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
    const contact_flip = () => {
        if (flipped===1 || flipped===3){
        setIsFlipped(0)
        }
    };
    const home_flip = () => {
        if (flipped===0 || flipped===3){
        setIsFlipped(1);
        }
    };
    const reset_active_flip=()=>{
        setIsFlipped(3)
    }
    return (
        <>
            <Navbar onFlip={contact_flip} home_flip={home_flip} flipped={flipped} reset_active_flip={reset_active_flip}/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home flipped={flipped} onFlip={handleFlip}/>}/>
                    <Route path="/About" element={<About />}/>
                </Routes>
            </div>
        </>
    )
}
export default App