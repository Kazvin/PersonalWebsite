import React from "react";
import { NavBar } from "./Nav";
import { Footer } from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { useLocation } from "react-router-dom";

import HTMLCSSLogo from "../images/htmlcssLogo.jpg";
import SQLLogo from "../images/sqlLogo.png";
import LinkedinLogo from "../images/linkedinLogo.png";
import GithubLogo from "../images/gitHubLogo.png"
import ReactLogo from "../images/reactLogo.png";
import IndeedLogo from "../images/indeedLogo.png";
import JavaScriptLogo from "../images/javaScriptLogo.png";
import HerokuLogo from "../images/herokuLogo.png";
import JavaLogo from "../images/java_logo.jpg";


import { CardTemplate } from "./Card";



export function Home() {
    return (
        <>
            <NavBar />
            <div className="container-fluid background fade" >

                <br /><br />

                <h1 className="text-center">Kazvin Mendez</h1>
                <p className="text-center">Developer skilled in Java and Web development. Java, Javascript, HTML
                    , CSS, SQL
                </p>

                <Footer />

            </div>
        </>
    );
}


export function Projects() {
    return (
        <>
            <NavBar />
            <div className="container-fluid background fade ">

                <br /><br />

                <h1 className="text-center">All my Projects</h1>
                <div className=" container  ">
                    <div className="d-flex row align-items-center" >


                        <CardTemplate logo={JavaLogo} title="Course Selection Application" github="https://github.com/Kazvin/CourseSelection"
                            text="Using Object Oriented Programming, the app features a
                    login page with authentication that stores the users in a local db file.
                    Created multiple FXML pages using the Scenebuilder software.
                    Controller classes for each page was set. A Set object was used to store
                    the available classes."/>



                        <CardTemplate logo={JavaScriptLogo} title="Full Stack Website" github="https://github.com/Kazvin/WebHosting-Final"
                            website="https://webhosting-final.herokuapp.com/" websitelogo={HerokuLogo}
                            text="Authentication and authorization of users with a registration page with
                            data being stored inside MongoDB (NoSQL). Pages are formatted and responsive
                            with Bootstrap. Dynamic HTML rendered with handlebars template. 
                            Website deployed on Heroku." />


                        <CardTemplate logo={SQLLogo} title="Oracle SQL" github="https://github.com/Kazvin/Portfolio/tree/main/SQL%20Relational%20Database"
                            text="A relational database of student information. College_Schema_Objects creates tables with constraints to maintain data integrity. 
                            College_Schema_Data inputs data into the tables." />



                        <CardTemplate logo={HTMLCSSLogo} title="Countdown Timer" github="https://github.com/Kazvin/Portfolio/tree/main/Countdown_Timer"
                            github2="https://github.com/Kazvin/PersonalWebsite/tree/master/src/components/CountDownTimer"
                            text="Use of Date object to store two dates. Calculates the difference between dates and displays the time between.
                                Use of the DOM in vanilla Javascript and React hooks to change the state of the time values. "
                            link="/countdown" />

                        <CardTemplate logo={HTMLCSSLogo} title="Match Game" github="https://github.com/Kazvin/Portfolio/tree/main/Match%20Game"
                            text="Use of an array to store icons and randomize order." />

                        <CardTemplate logo={ReactLogo} title="This Website" github="https://github.com/Kazvin/PersonalWebsite"
                            text="Created using the component based library React. Responsive pages with the bootstrap css framework. 
                            Multiple pages with components rendered and deployed on vercel." />

                    </div>


                </div>

                <Footer />
            </div>
        </>
    )
}


export function Contact() {

    return (
        <>
            <NavBar />
            <div className="container background fade " >

                <br /><br />

                <h1 className="text-center" >Contact</h1>

                <div className=" container-fluid row  ">

                    <div className="col ">
                        <a href="https://www.linkedin.com/in/kazvinm/" target="_blank" rel="noopener noreferrer"><img className="img-fluid img-thumbnail w-25 " src={LinkedinLogo} alt="linkedin" /></a>
                    </div>
                    <div className="col ">
                        <a href="https://github.com/Kazvin" target="_blank" rel="noopener noreferrer"><img className="img-fluid img-thumbnail w-25" src={GithubLogo} alt="github" /></a>
                    </div>
                    <div className="col ">
                        <a href="https://my.indeed.com/p/kazvinm-za6ddcf" target="_blank" rel="noopener noreferrer"><img className="img-fluid img-thumbnail w-25" src={IndeedLogo} alt="github" /></a>
                    </div>


                </div>
                <Footer />
            </div>


        </>
    )
}


export function Resume() {
    return (
        <>
            <NavBar />
            <div className="container-fluid background fade">

                <br />

                <h1 className="text-center">Resume</h1>
                <br />

                <div className="d-flex justify-content-center">
                    <iframe className=" frame "
                        title="Kazvin's Resume"
                        src="https://docs.google.com/document/d/e/2PACX-1vQlcASr2LSYMDXy-KUHQV4GGfh5UQ72IcC4V8gM8Too8omC27W9hFyDlYe2FhBB4w/pub?embedded=true"
                    >The iframe is not working
                    </iframe>
                </div>

                <Footer />

            </div>
        </>
    );

}


export function Errorpage() {

    let location = useLocation();
    return (
        <>
            <NavBar />
            <div className="container-fluid background fade" >

                <br /><br />

                <h1 className="text-center">The route {location.pathname} does not exist</h1>

            </div>
        </>
    );
}