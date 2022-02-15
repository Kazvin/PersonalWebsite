import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from "react-bootstrap";

import GithubLogo from "../images/gitHubLogo.png"
import { Link } from "react-router-dom";



export function CardTemplate(props) {

    return (
        <Card style={{ width: '18rem', height: '40rem' }} className="mx-auto" >
            <Card.Img variant="top" className="img-fluid card-img " src={props.logo} />
            <Card.Body>
                <Card.Title className="text-center">{props.title}</Card.Title>
                <Card.Text className="text-center">
                    {props.text}
                </Card.Text>
                <div className="d-flex justify-content-center">
                    <ul className="list-group list-group-horizontal ">


                        <li className="list-group-item ">
                            <a href={props.github} target="_blank" rel="noopener noreferrer">
                                <img src={GithubLogo} alt="github" className="link-img img-fluid" />
                            </a>
                        </li>

                        {props.github2 ?
                            <li className="list-group-item ">
                                <a href={props.github2} target="_blank" rel="noopener noreferrer">
                                    <img src={GithubLogo} alt="github" className="link-img img-fluid" />
                                </a>
                            </li> : null}


                        {props.website ?
                            <li className="list-group-item ">
                                <a href={props.website} target="_blank" rel="noopener noreferrer">
                                    <img src={props.websitelogo} alt="page" className="link-img img-fluid" />
                                </a>
                            </li> : null}

                        {props.link ?
                            <li className="list-group-item ">
                                <Link to={props.link}> Page </Link>


                            </li> : null}



                    </ul>
                </div>
            </Card.Body>


        </Card>
    );

}