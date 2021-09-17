
import React from 'react';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom"
import {ProjectHeading,Project} from "../data"
import SectionTitle from './SectionTitle';
const Projects = () => {
    const {title,description} = ProjectHeading;
    return (
        <section className="project-area pt-20 pb-20">
            <div className="container">
                <div className="row">
                <SectionTitle title={title} description={description}/>
                </div>
                <div className="row">
               {
                   Project.map((item,index)=>{
                       return(
                        <div className="col-xxl-4" key={index}>
                        <div className="single-project" style={{ backgroundImage: `url(${item.projectImage})` }}>
                            <div className="project-content">
                                <Link to=""  className="iconDesign">
                                    <FontAwesomeIcon icon={faPlusSquare} />
                                </Link>
                               <h4>{item.projectName} <span>{item.category}</span></h4>
                            </div>
                        </div>
                    </div>
                       )
                   })
               }
                </div>
            </div>
            
        </section>
    );
};

export default Projects;