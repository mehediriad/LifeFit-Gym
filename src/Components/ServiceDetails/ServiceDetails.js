import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import { ServiceContext } from "../../Contexts/ServiceProvider";
import { useParams } from 'react-router';
import './ServiceDetails.css'
const ServiceDetails = () => {
    const {serviceId}=useParams();
    
    const services = useContext(ServiceContext)

    
    console.log('services',services)
    return (
        <div>
            <h2>this is our services details : {serviceId}</h2>
        </div>
    );
};

export default ServiceDetails;