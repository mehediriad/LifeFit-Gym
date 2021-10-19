import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Utilites/CustomHooks/useServices';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services,setServices] = useServices();
    return (
        <div className="services-container">
            <div className="services-intro-text">
                <h2>Our <span style={{color:'blue'}}>Services</span> </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
        <div className="card-container container">
        <Row xs={1} md={3} className="g-4">
           
           
            {
                services.map(service=><Service 
                key={service._id}
                service={service}
                ></Service>)
            }
             
            
         </Row>
        </div>
        
    </div>
    );
};

export default Services;