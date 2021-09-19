import React from 'react';
import SectionTitle from './SectionTitle';
import {TeamHeading,TeamData} from "../data"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Team = () => {
    const {title,description} =TeamHeading;
    return (
        <section className="team-area pt-20 pb-20">
            <div className="container">
                <div className="row">
                    <SectionTitle title={title} description={description}/>
                </div>
                <div className="row">
                    {TeamData.map((item,index)=>{
                        return(
                            <div className="col-xxl-4" key={index}>
                            <div className="single-team">
                                <img src={item.imageUrl} alt="" />
                                <div className="team-overlay">
                                    <h4>{item.name}<span>{item.desiganation}</span></h4>
                                   <Link to=""><FontAwesomeIcon icon={['fab', item.icon_1]}/></Link>
                                   <Link to=""><FontAwesomeIcon icon={['fab', item.icon_2]}/></Link>
                                   <Link to=""><FontAwesomeIcon icon={['fab', item.icon_3]}/></Link>
                                   <Link to=""><FontAwesomeIcon icon={['fab', item.icon_4]}/></Link>
                                   
                                </div>
                            </div>
                        </div>
                        )
                 
                    })}
                  
                </div>
            </div>
        </section>
    );
};

export default Team;