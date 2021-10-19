import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Utilites/CustomHooks/useServices';
import Service from '../Service/Service';
import './FeaturedServices.css';
const FeaturedServices = () => {
    const [services,setServices] = useServices();
    return (
        <div className="featured-services-container services-container container">
             <div className="services-intro-text">
                <h2>Featured <span style={{color:'blue'}}>Services</span> For You</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="card-container container">
            <Row xs={1} md={3} className="g-4">
           
               
                {
                    services.map((service,index)=>index<6 && <Service 
                    key={service._id}
                    service={service}
                    ></Service>)
                 }
                 
                
             </Row>
            </div>
            
        </div>
    );
};

export default FeaturedServices;