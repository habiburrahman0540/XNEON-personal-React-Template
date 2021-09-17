import React from 'react';
import {serviceHeading,ServiceSection} from "../data"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SectionTitle from './SectionTitle';
const Service = () => {
    const {title,description} = serviceHeading;
    return (
        <section className="service-area text-center pt-20 pb-20">
            <div className="container">
                <div className="row">
                 <SectionTitle title={title} description={description}/>
                </div>
                <div className="row">
                    {ServiceSection.map((item,index)=>{
                        return(
                            <div className="col-xxl-4 text-center" key={index}>
                            <div className="single-service ">
                                <span className="iconColor">
                                <FontAwesomeIcon icon={item.icon} />
                                </span>
                                <h4>{item.ServiceName}</h4>
                                <p>{item.serviceDescription}</p>
                            </div>
                            </div>
                        )
                    })}
            
                    
                
                </div>
            </div>
        </section>
    );
};

export default Service;