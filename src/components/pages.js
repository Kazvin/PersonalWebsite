import React from "react";
import { NavBar } from "./Nav";
import { Footer } from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { useLocation } from "react-router-dom";

import LinkedinLogo from "../images/linkedinLogo.png";
import GithubLogo from "../images/gitHubLogo.png"

import ReactLogo from "../images/reactLogo.png";


import { Card1, Card2, Card3, Card4, Card5, CardTemplate } from "./Card";

export function Home() {
    return (
        <>
            <div className="container-fluid background" >
                <NavBar />
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
            <div className="container-fluid background ">
                <NavBar />
                <br /><br />

                <h1 className="text-center">All my Projects</h1>
                <div className="d-flex row  ">
                    <Card1 />
                    <Card2 />
                    <Card3 />
                    <Card4 />
                    <Card5 />

                    <CardTemplate logo = {ReactLogo} title="This Website" github="https://github.com/Kazvin/PersonalWebsite" 
                text="Created using the component based library React. Responsive pages with the bootstrap css framework. 
                Multiple pages with components rendered and deployed on vercel."/>


                </div>

                <Footer />
            </div>
        </>
    )
}


export function Contact() {

    return (
        <>
            <div className="container-fluid background" >
                <NavBar />
                <br /><br />

                <h1 className="text-center" >Contact</h1>

                <div className=" container text-center row">
                    <div className="col-lg-3 mx-auto">
                        <a href="https://www.linkedin.com/in/kazvinm/"><img className="img-fluid img-thumbnail w-25 " src={LinkedinLogo} alt="linkedin" /></a>
                    </div>
                    <div className="col-lg-3 mx-auto">
                        <a href="https://github.com/Kazvin"><img className="img-fluid img-thumbnail w-25" src={GithubLogo} alt="github" /></a>
                    </div>

                </div>
                <Footer />
            </div>


        </>
    )
}


export function Resume() {
    return (

        <div className="container-fluid background">
            <NavBar />
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
    );

}


export function Errorpage() {

    let location = useLocation();
    return (

        <div className="container-fluid background" >
            <NavBar />
            <br /><br />

            <h1 className="text-center">The route {location.pathname} does not exist</h1>


        </div>
    );
}