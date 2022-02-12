import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from "react-bootstrap";

import GithubLogo from "../images/gitHubLogo.png"
import JavaLogo from "../images/java_logo.jpg";
import JavaScriptLogo from "../images/javaScriptLogo.png";
import HerokuLogo from "../images/herokuLogo.png";
import HTMLCSSLogo from "../images/htmlcssLogo.jpg";
import SQLLogo from "../images/sqlLogo.png";



export function Card1() {
    return (
        <Card style={{ width: '18rem', height: '40rem' }} className="mx-auto">
            <Card.Img variant="top" className="img-fluid card-img" src={JavaLogo} />
            <Card.Body>
                <Card.Title className="text-center">Course Selection Application</Card.Title>
                <Card.Text className="text-center">
                    Using Object Oriented Programming, the app features a
                    login page with authentication that stores the users in a local db file.
                    Created multiple FXML pages using the Scenebuilder software.
                    Controller classes for each page was set. A Set object was used to store
                    the available classes.
                </Card.Text>
                <div className="d-flex justify-content-center">
                <ul className="list-group list-group-horizontal ">
                    <li className="list-group-item ">
                        <a href="https://github.com/Kazvin/CourseSelection" >
                        <img src={GithubLogo} alt="github" className="link-img img-fluid" />
                        </a>
                    </li>
                    {/* <li className="list-group-item "><Button variant="primary">2</Button></li>
     <li className="list-group-item "><Button variant="primary">3</Button></li> */}
                </ul>
                </div>

            </Card.Body>
        </Card>

    );

}


export function Card2 () {
    return (

        <Card style={{ width: '18rem', height: '40rem' }} className="mx-auto" >
        <Card.Img variant="top" className="img-fluid card-img " src={JavaScriptLogo}  />
        <Card.Body>
            <Card.Title className="text-center">Full Stack Website</Card.Title>
            <Card.Text className="text-center">
                Authentication and authorization of users with a registration page with
                data being stored inside MongoDB (NoSQL). Pages are formatted and responsive
                with Bootstrap. Dynamic HTML rendered with handlebars template. 
                Website deployed on Heroku.
            </Card.Text>
            <div className="d-flex justify-content-center">
            <ul className="list-group list-group-horizontal ">

            <li className="list-group-item ">
                        <a href="https://github.com/Kazvin/WebHosting-Final" >
                        <img src={GithubLogo} alt="github" className="link-img img-fluid" />
                        </a>
                    </li>
                    <li className="list-group-item ">
                        <a href="https://github.com/Kazvin/WebHosting-Final" >
                        <img src={HerokuLogo} alt="github" className="link-img img-fluid" />
                        </a>
                    </li>
            
            </ul>
            </div>
        </Card.Body>
    </Card>


    );

}

// Countdown Timer
// ·         Displays the amount of time to a specific date
// ·         Specific date can be set,
// and timer will display the number of days, hours, minutes to specific date
// ·         Use of the date object and DOM

// Match Game
// ·         Flip two cards, and if they match stay flipped otherwise flip back
// ·         Use of HTML DOM to alter div elements and function to randomize
// order of cards


export function Card3 () {
    return (

        <Card style={{ width: '18rem', height: '40rem' }} className="mx-auto" >
        <Card.Img variant="top" className="img-fluid card-img " src={HTMLCSSLogo}  />
        <Card.Body>
            <Card.Title className="text-center">HTML/CSS Webpages</Card.Title>
            <Card.Text className="text-center">
                <b>Countdown Timer:</b> Use of the Date object to set date and DOM to change the innerHTML. 
                    Input type set to "date" for a specific date to calculate time to.
                <br /><b>Match Game</b>: Use of an array to store icons and randomize order.
            </Card.Text>
            <div className="d-flex justify-content-center">
            <ul className="list-group list-group-horizontal ">

            <li className="list-group-item ">
                        <a href="https://github.com/Kazvin/Portfolio" >
                        <img src={GithubLogo} alt="github" className="link-img img-fluid" />
                        </a>
                    </li>
            </ul>
            </div>
        </Card.Body>
    </Card>


    );

}



export function Card4 () {
    return (

        <Card style={{ width: '18rem', height: '40rem' }} className="mx-auto" >
        <Card.Img variant="top" className="img-fluid card-img " src={SQLLogo}  />
        <Card.Body>
            <Card.Title className="text-center">Oracle SQL</Card.Title>
            <Card.Text className="text-center">
                A relational database of student information. 
                College_Schema_Objects creates tables with constraints to maintain data integrity. College_Schema_Data inputs data into the tables.
            </Card.Text>
            <div className="d-flex justify-content-center">
            <ul className="list-group list-group-horizontal ">

            <li className="list-group-item ">
                        <a href="https://github.com/Kazvin/Portfolio/tree/main/SQL%20Relational%20Database" >
                        <img src={GithubLogo} alt="github" className="link-img img-fluid" />
                        </a>
                    </li>
            </ul>
            </div>
        </Card.Body>
    </Card>


    );

}

