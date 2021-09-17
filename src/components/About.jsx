import React from 'react';
import image from "../assets/img/about/about-me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <section className="about-area pt-20 pb-20">
            <div className="container">
                <div className="row align-items-center ">
                    <div className="col-xxl-4">
                        <div className="about-img">
                            <img src={image} alt="" />
                        </div>

                    </div>
                    <div className="col-xxl-8">
                        <div className="about-content">
                        <h2 className="mb-2">About Me</h2>
                        <h4 className="mb-3"> I am web desiner and developer.</h4>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias veniam expedita voluptatum asperiores similique praesentium non! Sed error similique sunt aspernatur, odio eveniet ad fuga quos possimus quisquam libero necessitatibus!</p>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, facilis inventore repellendus quisquam atque sit a rerum sunt voluptates distinctio quo placeat neque deserunt fuga eaque blanditiis dicta repudiandae ipsa.</p>
                   <div className="row">
                       <div className="col-xxl-4">
                           <ul>
                           <li><FontAwesomeIcon className="highlight" icon={faAngleDoubleRight} />Bootstarp</li>
                               <li><FontAwesomeIcon className="highlight" icon={faAngleDoubleRight} />Bootstarp</li>
                               <li><FontAwesomeIcon className="highlight" icon={faAngleDoubleRight} />Bootstarp</li>
                           </ul>
                       </div>
                       <div className="col-xxl-4">
                           <ul>
                           <li><FontAwesomeIcon className="highlight" icon={faAngleDoubleRight} />Bootstarp</li>
                               <li><FontAwesomeIcon className="highlight" icon={faAngleDoubleRight} />Bootstarp</li>
                               <li><FontAwesomeIcon className="highlight" icon={faAngleDoubleRight} />Bootstarp</li>
                           </ul>
                       </div>
                       <div className="col-xxl-4">
                           <ul>
                               <li><FontAwesomeIcon className="highlight" icon={faAngleDoubleRight} />Bootstarp</li>
                               <li><FontAwesomeIcon className="highlight" icon={faAngleDoubleRight} />Bootstarp</li>
                               <li><FontAwesomeIcon className="highlight" icon={faAngleDoubleRight} />Bootstarp</li>
                           </ul>
                       </div>
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