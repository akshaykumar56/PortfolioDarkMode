import React from 'react'
import IMG from './EXPR.png'
import './Express.css'
const Express = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-around my-5'>
    <h1>ExpressJS</h1>
    <h4>Watch My Work With Express At My <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/Express' style={{textDecoration:"none"}} >Github</a></h4>
    <img src={IMG} alt="Express" className='img my-4 shadow'/>
    <p className='my-2'>Express.js or simply Express is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.<br/>
    What is Express JS: Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.<br/>
    It's a layer built on the top of the Node js that helps manage servers and routes.<br/><br/>

    <h4>Why Express JS?</h4>
    a) Express was created to make APIs and web applications with ease.<br/>
    b) It saves a lot of coding time almost by half and still makes web and mobile applications are efficient.<br/>
    c) Another reason for using express is that it is written in JavaScript as JavaScript is an easy language even if you don't have a previous knowledge of any language.<br/> 
    d) Express lets so many new developers enter the field of web development.<br/><br/>

    The reason behind creating an express framework for node js is:<br/>
    a) Time-efficient<br/>
    b) Fast<br/>
    c) Economical<br/>
    d) Easy to learn<br/>
    e) Asynchronous<br/><br/>

    <h4>Features of Express JS</h4>
    Fast Server-Side Development<br/>
    The features of node js help express saving a lot of time.<br/>
     <h6>a) Middleware</h6>
    Middleware is a request handler that has access to the application's request-response cycle.
    <h6>b) Routing</h6>
    It refers to how an application's endpoint's URLs respond to client requests.
    <h6>c) Templating</h6>
    It provides templating engines to build dynamic content on the web pages by creating HTML templates on the server.
    <h6>d) Debugging</h6>
    Express makes it easier as it identifies the exact part where bugs are.<br/><br/>
    Advantages of Using Express with Node.js<br/>
    • Express is Unopinionated, and we can customize it.<br/>
    • For request handling, we can use Middleware.<br/>
    • A single language is used for frontend and backend development.<br/>
    • Express is fast to link it with databases like MySQL, MongoDB, etc.<br/>
    • Express allows dynamic rendering of HTML Pages based on passing arguments to templates.<br/><br/>
    Limitations of Express JS<br/>
    • Sometimes, there is no structural way to organize things, and the code becomes non-understandable.<br/>
    • There are so many issues with callbacks.<br/>
    • The error messages that will come are challenging to understand.<br/><br/>

    </p>
    </div>
  )
}

export default Express
