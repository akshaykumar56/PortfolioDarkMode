import React from 'react'
import './SQL.css'
import IMG from './SQL.png'
import COMM from './Comm.png'
const SQL = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-around my-5'>
    <h1>CPP</h1>
    <h4>Watch My Work With SQL At My <a href='https://github.com/akshaykumar56/Sql' style={{textDecoration: 'none'}}>Github</a></h4>
    <img src={IMG} alt="SQL" className='img my-4 shadow' />
    <p className='my-3'>SQL is a standard language for storing, manipulating and retrieving data in databases.<br/><br/>
    <h5>What is SQL?</h5>
    a) SQL stands for Structured Query Language<br/>
    b) SQL lets you access and manipulate databases<br/>
    c) SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987<br/><br/>
    
    <h5>What Can SQL do?</h5>
    a) SQL can execute queries against a database<br/>
    b) SQL can retrieve data from a database<br/>
    c) SQL can insert records in a database<br/>
    d) SQL can update records in a database<br/>
    e) SQL can delete records from a database<br/>
    f) SQL can create new databases<br/>
    g) SQL can create new tables in a database<br/>
    f) SQL can create stored procedures in a database<br/>
    g) SQL can create views in a database<br/>
    h) SQL can set permissions on tables, procedures, and views<br/><br/>

    <h5>Some of The Most Important SQL Commands</h5>
    a) SELECT - extracts data from a database<br/>
    b) UPDATE - updates data in a database<br/>
    c) DELETE - deletes data from a database<br/>
    d) INSERT INTO - inserts new data into a database<br/>
    e) CREATE DATABASE - creates a new database<br/>
    f) ALTER DATABASE - modifies a database<br/>
    g) CREATE TABLE - creates a new table<br/>
    h) ALTER TABLE - modifies a table<br/>
    i) DROP TABLE - deletes a table<br/>
    j) CREATE INDEX - creates an index<br/>
    k) DROP INDEX - deletes an index<br/><br/>

    <h5>SQL Constraints</h5>
    SQL constraints are used to specify rules for the data in a table.<br/>
    Constraints are used to limit the type of data that can go into a table. This ensures the accuracy and reliability of the data in the table. If there is any violation between the constraint and the data action, the action is aborted.<br/>
    Constraints can be column level or table level. Column level constraints apply to a column, and table level constraints apply to the whole table.<br/><br/>
    The following constraints are commonly used in SQL:<br/>
    a) NOT NULL - Ensures that a column cannot have a NULL value<br/>
    b) UNIQUE - Ensures that all values in a column are different<br/>
    c) PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table<br/>
    d) FOREIGN KEY - Prevents actions that would destroy links between tables<br/>
    e) CHECK - Ensures that the values in a column satisfies a specific condition<br/>
    f) DEFAULT - Sets a default value for a column if no value is specified<br/>
    g) CREATE INDEX - Used to create and retrieve data from the database very quickly<br/><br/>

    <h5>SQL Commands</h5>
    a) SQL commands are instructions. It is used to communicate with the database. It is also used to perform specific tasks, functions, and queries of data.<br/>
    b) SQL can perform various tasks like create a table, add data to tables, drop the table, modify the table, set permission for users.<br/>
    <img src={COMM} alt="COMM" className='my-3' />
    
    </p>
     </div>
  )
}

export default SQL
