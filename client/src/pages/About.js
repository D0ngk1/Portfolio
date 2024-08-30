import './About.css'
import React, { useState } from 'react';
export default function About(){

    const [pressedButton, setPressedButton] = useState(null);

    function handleClick(buttonId){
        if(pressedButton !== buttonId){
            setPressedButton(buttonId);
        }else
        setPressedButton(null);
        
    }
    const getButtonClass = (buttonId) => {
        return pressedButton === buttonId ? 'show-image' : '';
      };

    return (
        <div className='about'>
            <div className="about-container">
                <div className="carousel">
                    <div className='list'>
                        <div className={`item ${getButtonClass('button1')}`}>
                            <img src='/projects/todo-list.jpg' />
                            <div className='content'>
                                <div className='title-div'> 
                                    <div className='title'> Todo List </div>
                                    <div className='title-info'> ( Microsoft To Do-inspired ) </div>
                                </div> 
                                <div className='description'>A task management web app inspired by Microsoft To Do, featuring a clean interface for creating, organizing, and tracking daily tasks. Includes features like due dates, priority levels, and list categorization to enhance productivity and task organization. </div>
                            </div>
                        </div>
                        <div className={`item ${getButtonClass('button2')}`}>
                             <img src='/projects/dictionary.jpg' /> 
                            <div className='content'>
                                <div className='title'> Dictionary</div>
                                <div className='description'>Dictionary with 3rd Party API:
                                A web application that leverages a third-party dictionary API to provide word definitions, and usage examples. Users can search for words and access comprehensive linguistic information quickly and easily.</div>
                            </div>
                        </div>
                        <div className='item default-item'>
                            <img className="logo" src="/projects/laptop.jpg"/>
                            <div className='content-default'>
                                <div className='tech-stack'>
                                    <div className="p-4">
                                    <h1 className="text-2xl font-bold mb-4">Tech Stack Icons</h1>
                                    <div className="flex space-x-4">
                                        <div className="flex flex-col items-center">
                                        <i className="fa fa-coffee fa-3x text-brown-600" title="Java"></i>
                                        <span className="mt-2">Java</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                        <i className="fa fa-code fa-3x text-yellow-400" title="JavaScript"></i>
                                        <span className="mt-2">JavaScript</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                        <i className="fa fa-css3 fa-3x text-blue-500" title="CSS"></i>
                                        <span className="mt-2">CSS</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                        <i className="fa fa-leaf fa-3x text-green-500" title="Spring Boot"></i>
                                        <span className="mt-2">Spring Boot</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <i className="fa fa-code fa-3x text-blue-600" title="TypeScript"></i>
                                            <span className="mt-2">TypeScript</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <i class="fa fa-brands fa-react"></i>
                                            <span className="mt-2">React</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="options">
                    <div className='projects'>
                        My Projects
                    </div>
                    <div className='list-options'>
                        <div className='item-options'  onClick={() => handleClick('button1')}>
                            {/* <img src='/projects/todo-app.png' /> */}
                            <div className='content-options'>
                                <div className='title-options'> Todo List</div>
                                <div className='description-options'>
                                    <i className="fa fa-github fa-2x"></i>
                                    <i className="fa fa-external-link fa-2x"></i>
                                </div>
                            </div>
                        </div>
                        <div className='item-options'  onClick={() => handleClick('button2')}>
                            {/* <img src='/projects/dictionaryl.png' /> */}
                            <div className='content-options'>
                                <div className='title-options'> Dictionary</div>
                                <div className='description-options'>
                                    <i className="fa fa-github fa-2x"></i>
                                    <i className="fa fa-external-link fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}