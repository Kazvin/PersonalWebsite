import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from "react-bootstrap";

import GithubLogo from "../images/gitHubLogo.png"
import JavaLogo from "../images/java_logo.jpg";
import JavaScriptLogo from "../images/javaScriptLogo.png";
import HerokuLogo from "../images/herokuLogo.png";
import HTMLCSSLogo from "../images/htmlcssLogo.jpg";
import SQLLogo from "../images/sqlLogo.png";
import { Link } from "react-router-dom";



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



export function Card3 () {
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


export function Card4 () {
    return (

        <Card style={{ width: '18rem', height: '40rem' }} className="mx-auto" >
        <Card.Img variant="top" className="img-fluid card-img " src={HTMLCSSLogo}  />
        <Card.Body>
            <Card.Title className="text-center">Countdown Timer</Card.Title>
            <Card.Text className="text-center">
                Use of Date object to store two dates. Calculates the difference between dates and displays the time between.
                Use of the DOM in vanilla Javascript and React hooks to change the state of the time values. 
            </Card.Text>
            <div className="d-flex justify-content-center">
            <ul className="list-group list-group-horizontal ">

            <li className="list-group-item ">
                        <a href="https://github.com/Kazvin/Portfolio/tree/main/Countdown_Timer" >
                        <img src={GithubLogo} alt="github" className="link-img img-fluid" />
                        Javascript
                        </a>
                    </li>

                    <li className="list-group-item ">
                        <a href="https://github.com/Kazvin/PersonalWebsite/tree/master/src/components/CountDownTimer" >
                        <img src={GithubLogo} alt="github" className="link-img img-fluid" />
                        React
                        </a>
                    </li>

                    <li className="list-group-item  ">
                        <Link to="/countdown"> Page </Link>
                    </li>
            </ul>
            </div>
        </Card.Body>
    </Card>


    );

}




export function Card5 () {
    return (

        <Card style={{ width: '18rem', height: '40rem' }} className="mx-auto" >
        <Card.Img variant="top" className="img-fluid card-img " src={HTMLCSSLogo}  />
        <Card.Body>
            <Card.Title className="text-center">Match Game</Card.Title>
            <Card.Text className="text-center">
                Use of an array to store icons and randomize order.
            </Card.Text>
            <div className="d-flex justify-content-center">
            <ul className="list-group list-group-horizontal ">

            <li className="list-group-item ">
                        <a href="https://github.com/Kazvin/Portfolio/tree/main/Match%20Game" >
                        <img src={GithubLogo} alt="github" className="link-img img-fluid" />
                        </a>
                    </li>
            </ul>
            </div>
        </Card.Body>
    </Card>


    );

}


export function CardTemplate(props) {

    return (
    <Card style={{ width: '18rem', height: '40rem' }} className="mx-auto" >
    <Card.Img variant="top" className="img-fluid card-img " src={props.logo}  />
    <Card.Body>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Text className="text-center">
            {props.text}
        </Card.Text>
        <div className="d-flex justify-content-center">
        <ul className="list-group list-group-horizontal ">


        <li className="list-group-item ">
                    <a href={props.github} >
                    <img src={GithubLogo} alt="github" className="link-img img-fluid" />
                    </a>
                </li>

        </ul>
        </div>
    </Card.Body>

    
</Card>
);

}