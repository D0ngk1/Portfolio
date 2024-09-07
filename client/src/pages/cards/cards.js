import "./cards.css";
import React, { useState } from 'react';
import Links from "./Links/Links.js";
//Home and Contacs Cards
function Cards({flipped}){
    const [isFirstHovered, setIsFirstHovered] = useState(false);
    const [isSecondHovered, setIsSecondHovered] = useState(false);

    

    const handleMouseEnter = (setHovered, setIsOut, isFirst) => {
        setHovered(true)
    };

    const handleMouseEnter2 = (setHovered, isFirst) => {
        //Check if first is Viewed
        setHovered(true)
    }; 
    const handleMouseLeave = (setHovered, setIsOut) => {
        setHovered(false);
        //setIsOut(true);
    };
    const handleMouseLeave2 = (setHovered, setIsOut) => {
        setHovered(false);
    };


    return(
    <div className="landing-page">
        <div className="my-links">
            <Links/>
        </div>
        <div className={`cards ${flipped===0 ? "flipped" : ""}`}>
            <div className="card-front">
                <div className="logo-front">
                    <p className="about-me"><span className="intro"> Greetings! I’m <span className="name">DARYL</span> .</span></p>
                    <p className="about-me more-info">a <span className="job-title"> software engineer </span>
                    and a relentless warrior in the realm of technology. 
                    Charging into the battlefield of codes, conquering challenges and exploring new frontiers in the world of computers are my pastime.
                    </p>
                </div>
                {/*<div className="work-history">
                    <p className="about-me"><span className="intro">Hi! I'm <span className="name">Daryl</span> .</span></p>
                    <p className="about-me more-info"> I am a <span className="job-title"> software engineer </span>
                        with a passion for all things tech. I love diving into code and exploring the world of computers.
                    </p>
                </div>*/}
            </div>
            <div className={`card-back ${flipped===0 ? "back-active" : ""}`}>
                        <div className={`card-item first 
                            ${isFirstHovered ? 'hovered' : ''} `}
                                        onMouseEnter={() => handleMouseEnter(setIsFirstHovered)}
                                        onMouseLeave={() => handleMouseLeave(setIsFirstHovered)}
                                        >
                            <div className="background-card-item">
                                <div className="image-wrapper">
                                    <img className={`${isFirstHovered ? 'background-card-item-hovered' : 'image-not-hovered'}`} alt="Notebook, laptop and pen" src='/projects/todo-list.jpg' /> 
                                </div>
                            </div>
                            <div className={`main-title-1 ${isFirstHovered  ? 'hide' : ''}`}> Todo List </div>
                            <div className={`content ${isFirstHovered ? 'content-in' : ''}`}>
                                <div className={`title-div`}>
                                    <div className='title'> Todo List </div>
                                    <div className='title-info'> ( Microsoft To Do-inspired ) </div>
                                    <div className='plinks'>
                                        <a  href='https://github.com/D0ngk1/Todo-App' target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x"></i> </a>
                                        <i className="fa fa-external-link fa-2x"></i>
                                    </div>
                                </div>
                                <div className={`description`}>A task management web app inspired by Microsoft To Do, featuring a clean interface for creating, organizing, and tracking daily tasks. Includes features like due dates, priority levels, and list categorization to enhance productivity and task organization. </div>
                            </div>
                        </div>
                        <div className={`card-item second 
                            ${ isSecondHovered ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter2(setIsSecondHovered)}
                                        onMouseLeave={() => handleMouseLeave2(setIsSecondHovered)}
                                       
                                        >
                            <div className="background-card-item">
                                <div className="image-wrapper">
                                    <img className={`${isSecondHovered ? 'background-card-item-hovered' : 'image-not-hovered'}`} alt="book" src='/projects/dictionary.jpg'/> 
                                </div>
                            </div>
                            <div className={`main-title-2 ${isSecondHovered ? 'hide' : ''}`}> Dictionary </div>
                            <div  className={`content ${isSecondHovered ? 'content-in' : ''}`}>
                                <div className={`title-div`}>  
                                    <div className='title'> Dictionary</div>
                                    <div className='plinks'>
                                    <a  href='https://github.com/D0ngk1/Dictionaryl' target="_blank" rel="noopener noreferrer"> <i className="fa fa-github fa-2x" ></i></a>
                                    <a  href='https://github.com/D0ngk1/Todo-App' target="_blank" rel="noopener noreferrer"> <i className="fa fa-external-link fa-2x"></i> </a>
                                    </div>
                                </div>  
                                <div className={`description`}>Dictionary with 3rd Party API:
                                    A web application that leverages a third-party dictionary API to provide word definitions, 
                                    and usage examples. Users can search for words and access comprehensive linguistic information 
                                    quickly and easily.
                                </div>
                            </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Cards;
