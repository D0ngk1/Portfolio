import "./cards.css";
import React, { useState } from 'react';
import "./Links/Links.js"
import Links from "./Links/Links.js";
//Home and Contacs Cards
function Cards({flipped}){
    const [isFirstHovered, setIsFirstHovered] = useState(false);
    const [isSecondHovered, setIsSecondHovered] = useState(false);
    const [isOut, setIsOut] = useState(false);
    const [isOut2, setIsOut2] = useState(false);
    const [isFirstViewed, setIsFirstViewed] = useState(false);
    const [isSecondViewed, setIsSecondViewed] = useState(false);
    const [isFirstAnim, setIsFirstAnim] = useState(false);
    const [isSecondAnim, setIsSecondAnim] = useState(false);
    


    const handleTransitionEnd2 = (event, setHovered, setIsOut, setView) => {

        //console.log("Outs 1 "+isOut);
        //console.log("Outs 2 "+isOut2);

         //When hover animation ends on first item
        if (event.animationName.includes('projectsIn2') ){
            //isSecondViewed = true
            setView(true);
            //isSecondViewed = false
            setIsFirstViewed(false);
           // console.log("project in 2!!");

           // console.log("Out 1 "+isOut);
           // console.log("Out 2 "+isOut2);
        }
        //When outro animation ends on first item
        if (event.animationName.includes('projectsOut2') && isFirstHovered){
            setIsFirstAnim(true);
            //console.log("project out 2!!");
        }
    };

    
    const handleTransitionEnd = (event, setHovered, setIsOut, setView) => {

       // console.log("Outs 1 "+isOut);
       // console.log("Outs 2 "+isOut2);
        //When hover animation ends on first item
        if (event.animationName.includes('projectsIn') ){
            //isFirstViewed = true
            setView(true);
            //isSecondViewed = false
            setIsSecondViewed(false);
           // console.log("project in 1!!");
            //console.log("Second anim is : "+isSecondAnim);
           // console.log("Out 1 "+isOut);
           // console.log("Out 2 "+isOut2);
        }
        //When outro animation ends on first item
        if (event.animationName.includes('projectsOut') && isSecondHovered){
            //console.log("project out 1")
            //Start Intro Animation
            setIsSecondAnim(true);
        }
    };
  
    const handleMouseEnter = (setHovered, setIsOut, isFirst) => {
        if(isSecondViewed){
            //if Second is viewed
            setIsFirstHovered(true);

            /*remove hovered on item 2*/
            setIsSecondAnim(false);
            setIsSecondHovered(false);
            

            //Sends Outro Animation to 2
            setIsOut2(true);
            //console.log("Second is viewed")
        }else if(!isSecondViewed){
            setIsFirstHovered(true);
            setIsFirstAnim(true);
        }
        /*else {
            setHovered(true);
            setIsOut(false);
        }*/
    };

    const handleMouseEnter2 = (setHovered, isFirst) => {
        //Check if first is Viewed
        if(isFirstViewed){

            //if first is viewed
            setIsFirstHovered(false);
            setIsSecondHovered(true);

            setIsFirstAnim(false);
            //Sends Outro Animation to 1 handleMouseEnter
            setIsOut(true);
            //console.log("First is viewed");
        }else if(!isFirstViewed){
            //console.log("First is not viewed");
            setHovered(true);
            setIsSecondAnim(true);
        }
       /* else {
            setHovered(true);
            setIsOut(false);
        }*/
    }; 
    const handleMouseLeave = (setHovered, setIsOut) => {
        setHovered(false);
        //setIsOut(true);
    };
    const handleMouseLeave2 = (setHovered, setIsOut) => {
        setHovered(false);
        setIsOut2(true);
    };

    //When mouse leave on cards
    const handleMouseLeaveCards =() =>{

        //console.log("Second anim is : "+isSecondAnim);
        //console.log("Second hovered is : "+isSecondHovered);

        if(!isOut2){
            setIsOut(true);
        }
        if(isOut2){
            setIsOut(true);
        }

        setIsFirstHovered(false);
        setIsSecondHovered(false);

        setIsFirstViewed(false);
        setIsSecondViewed(false);

        setIsFirstAnim(false);
        setIsSecondAnim(false);

        //console.log("leave cards");
    }

    return(
    <div className="landing-page">
        <div className="my-links">
            <Links/>
        </div>
        <div className={`cards ${flipped==0 ? "flipped" : ""}`}>
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
            <div className={`card-back ${flipped==0 ? "back-active" : ""}`} onMouseLeave={() => handleMouseLeaveCards()}>
                        <div className={`card-item first 
                            ${isFirstHovered && isFirstAnim ? 'hovered' : ''} ${isOut ? 'outro' : ''} `}
                                        onMouseEnter={() => handleMouseEnter(setIsFirstHovered, setIsOut, true)}
                                        onMouseLeave={() => handleMouseLeave(setIsFirstHovered,setIsOut)}
                                        onAnimationEnd={(e) => handleTransitionEnd(e, setIsFirstHovered, setIsOut, setIsFirstViewed)}
                                        >
                            <img src='/projects/todo-list.jpg' />
                            <div className={`main-title-1 ${isFirstHovered || isSecondHovered ? 'hide' : ''}`}> Todo List </div>
                            <div className={`content ${!isFirstHovered ? 'hide' : ''}`}>
                                <div className='title-div'>
                                    <div className='title'> Todo List </div>
                                    <div className='title-info'> ( Microsoft To Do-inspired ) </div>
                                    <div className='plinks'>
                                        <i className="fa fa-github fa-2x"></i>
                                        <i className="fa fa-external-link fa-2x"></i>
                                    </div>
                                </div>
                                <div className='description'>A task management web app inspired by Microsoft To Do, featuring a clean interface for creating, organizing, and tracking daily tasks. Includes features like due dates, priority levels, and list categorization to enhance productivity and task organization. </div>
                            </div>
                        </div>
                        <div className={`card-item second 
                            ${isSecondAnim && isSecondHovered ? 'hovered' : ''} ${isOut2 ? 'outro2' : ''} 
                            `
                        }
                                        onMouseEnter={() => handleMouseEnter2(setIsSecondHovered, setIsOut2, false)}
                                        onMouseLeave={() => handleMouseLeave2(setIsSecondHovered)}
                                        onAnimationEnd={(e) =>  handleTransitionEnd2(e, setIsSecondHovered, setIsOut2, setIsSecondViewed)}
                                        >
                        <img src='/projects/dictionary.jpg'/>
                            <div className={`main-title-2 ${isSecondHovered || isFirstHovered ? 'hide' : ''}`}> Dictionary </div>
                            <div  className={`content ${!isSecondHovered ? 'hide' : ''}`}>
                                <div className="title-div">  
                                    <div className='title'> Dictionary</div>
                                    <div className='plinks'>
                                        <i className="fa fa-github fa-2x" ></i>
                                        <i className="fa fa-external-link fa-2x"></i>
                                    </div>
                                </div>  
                                <div className='description'>Dictionary with 3rd Party API:
                                A web application that leverages a third-party dictionary API to provide word definitions, and usage examples. Users can search for words and access comprehensive linguistic information quickly and easily.</div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Cards;
