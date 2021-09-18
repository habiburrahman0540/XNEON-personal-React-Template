import React from 'react';
import SectionTitle from "./SectionTitle"
import {PriceHeading,PriceData} from "../data"
import {Link} from "react-router-dom"
const Price = () => {
    const {title,description} = PriceHeading;
    return (
        <section className="price-area pt-20 pb-20">
            <div className="container">
                <div className="row">
                   <SectionTitle title={title} description={description}/>
                </div>
                <div className="row">
                    {PriceData.map((item,index)=>{
                        return(
                            <div className="col-xxl-4 text-center" >
                            <div className="single-price">
                                <span>{item.name}</span>
                                <h4>{item.price}</h4>
                                <ul>
                                    <li>{item.pageNo}</li>
                                    <li>{item.free}</li>
                                    <li>{item.database}</li>
                                    <li>{item.hosting}</li>
                                    <li>{item.support}</li>
                                </ul>
                                    <Link to=""  className="btn btn-orange">Order Now</Link>
                            </div>
                        </div>
                        )
                    })}
               
                </div>
            </div>
            
        </section>
    );
};

export default Price;