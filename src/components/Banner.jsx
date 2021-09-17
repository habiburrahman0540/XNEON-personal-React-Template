import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {BannerData} from "../data"
class Banner extends Component {
    render() {
        const {bannerImg,name,designation} =BannerData;
        return (
           <section className="banner-area bg align-items-center d-flex " style={{ backgroundImage: `url(${bannerImg})` }}>
               <div className="container">
                   <div className="row ">
                       <div className="col-xxl-12">
                       <div className="banner-content text-center">
                           <h1>{name}</h1>
                           <h4>{designation}</h4>
                           <Link to="" className="btn btn-orange">Contact</Link>
                           <Link to="" className="btn btn-outline-primary">portfolio</Link>
                       </div>
                       </div>
                   </div>
               </div>

           </section>
        );
    }
}

export default Banner;