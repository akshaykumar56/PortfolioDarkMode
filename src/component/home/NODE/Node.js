import React from 'react'
import IMG from './NODE.png'
import './node.css'
const Node = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-around my-5'>
    <h1>NodeJS</h1>
    <h4>Watch My Work With Node At My <a href='https://github.com/akshaykumar56/NodeJs' style={{textDecoration:'none'}}>Github</a></h4>
    <img src={IMG} alt="NODE" className='img my-4 shadow '/>
    <p className='my-2'>
    <b>Node.js</b> is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. <br/>
    Node.js is a back-end JavaScript runtime environment, runs on the <b>V8 JavaScript Engine</b>, and executes JavaScript code outside a web browser.<br/>
    Node.js lets developers use JavaScript to write command line tools and for server-side scripting.<br/>
    The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser.<br/><br/>

    <h4>What is Node.js?</h4>
    a) Node.js is an open-source server environment.<br/>
    b) Node.js is free.<br/>
    c) Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.).<br/>
    d) Node.js uses JavaScript on the server.<br/><br/>

    <h4>Why Node.js?</h4>
    Node.js uses <b>asynchronous programming!</b><br/>
    A common task for a web server can be to open a file on the server and return the content to the client.<br/><br/>
    Here is how PHP or ASP handles a file request:<br/>
    a) Sends the task to the computer's file system.<br/>
    b) Waits while the file system opens and reads the file.<br/>
    c) Returns the content to the client.<br/>
    d) Ready to handle the next request.<br/><br/>
    Here is how Node.js handles a file request:<br/>
    a) Sends the task to the computer's file system.<br/>
    b) Ready to handle the next request.<br/>
    c) When the file system has opened and read the file, the server returns the content to the client.<br/><br/>
    Node.js eliminates the waiting, and simply continues with the next request.<br/>
    Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.<br/><br/>

    <h4>What Can Node.js Do?</h4>
    a) Node.js can generate dynamic page content<br/>
    b) Node.js can create, open, read, write, delete, and close files on the server<br/>
    c) Node.js can collect form data<br/>
    d) Node.js can add, delete, modify data in your database<br/>
    </p>
    </div>
  )
}

export default Node
