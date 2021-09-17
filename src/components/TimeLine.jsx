import React from 'react';
import {Timelinedata,TimelineHeading} from "../data"
import SectionTitle from './SectionTitle';
const TimeLine = () => {
const {title,description} = TimelineHeading;
    return (
        <section className="timeline-section pt-20 pb-20">
            <div className="container">
                <div className="row">
                   <SectionTitle title={title} description={description}/>
                </div>
                <div className="row">
                    <div className="col-xxl-12">
                        <ul className="timeline-list">
                            {
                                Timelinedata.map((x,index)=>{
                                    return(
                                        <li key={index}>
                                        <div className="timeline-content" >
                                            <span>{x.year}</span>
                                            <h4>{x.title}</h4>
                                            <p>{x.description}</p>
                                        </div>
                                    </li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimeLine;