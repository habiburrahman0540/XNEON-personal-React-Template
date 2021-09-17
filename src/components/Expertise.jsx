import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import {expertise} from "../data"
const Expertise = () => {
    return (
        <>
            {expertise.map((item,index)=>{
                           return(
                            <div className="col-xxl-4" key={index}>
                            <ul>
                            <li><FontAwesomeIcon className="highlight" icon={faAngleDoubleRight} />{item.name}</li>
                               
                            </ul>
                        </div>
                           )
                       })}
        </>
    );
};

export default Expertise;