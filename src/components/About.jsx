import React from 'react';
import { Link } from 'react-router-dom';
import Expertise from './Expertise';
import {AboutData} from "../data"
const About = () => {
    const {aboutImg,title,subTitle,description} = AboutData;
    return (
        <section className="about-area pt-20 pb-20">
            <div className="container">
                <div className="row align-items-center ">
                    <div className="col-xxl-4">
                        <div className="about-img">
                            <img src={aboutImg} alt="" />
                        </div>

                    </div>
                    <div className="col-xxl-8">
                        <div className="about-content">
                        <h2 className="mb-2">{title}</h2>
                        <h4 className="mb-3"> {subTitle}</h4>
                        <p className="mb-4">{description}</p>
                        <p className="mb-4">{description}</p>
                        
                   <div className="row">
                       <Expertise/>
                       </div>
                   </div>
                        <Link to="" className="btn btn-orange mt-4">Hire Me</Link>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default About;