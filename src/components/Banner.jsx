import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import background from "../assets/img/banner/banner.jpg";
class Banner extends Component {
    render() {
        return (
           <section className="banner-area bg align-items-center d-flex " style={{ backgroundImage: `url(${background})` }}>
               <div className="container">
                   <div className="row ">
                       <div className="col-xxl-12">
                       <div className="banner-content text-center">
                           <h1>I am Habibur Rahman</h1>
                           <h4>Developer ,Freelancer and writter</h4>
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