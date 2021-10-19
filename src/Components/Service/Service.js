import { faEye, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {thumbnail,title,views,_id}=props.service;
    const hendleDetails=()=>{
        
        console.log('clicked',_id)
    }
    return (
        <Col>
                    <Card>
                        <Card.Img variant="top" src={thumbnail} />
                        <Card.Body>
                        <Card.Title>{title}</Card.Title>
        
                        </Card.Body>
                        <Card.Footer>
                            <div className="author-price">
                                <div className="author">
                                    <span> 
                                        <Link to={`/services/${_id}`}>
                                        <button className="btn btn-primary" onClick={hendleDetails}>Details</button>
                                        </Link>
                                    </span>
                                </div>
                                <div className="views">
                                <FontAwesomeIcon icon={faEye}/>
                                <span> {views}K</span>
                            </div>
                            </div>
                        </Card.Footer>
                    </Card>
             </Col>
    );
};

export default Service;