import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {workingStatisticsHeading,workingStatistics} from "../data"
import SectionTitle from './SectionTitle';
const CounterSection = () => {
    const {title,description} = workingStatisticsHeading;
    return (
        <section className="counter-area text-center pt-20 pb-20">
            <div className="container">
                <div className="row">
                <SectionTitle title={title} description={description}/>
                </div>
                <div className="row">
                    {workingStatistics.map((item,index)=>{
                        return(
                            <div className="col-xxl-3" key={index}>
                            <div className="single-counter">
                                <span><FontAwesomeIcon icon={item.icon} /></span>
                                <h4>{item.projectNumber}</h4>
                                <p>{item.Name}</p>
                            </div>
                        </div>
                        )
                    })}
              
          
                </div>
            </div>
        </section>
    );
};

export default CounterSection;