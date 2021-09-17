import React from 'react';
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import {TestimonialsHeading,Testimonials} from "../data"
import SectionTitle from './SectionTitle';
const Clients = () => {
  const {title,description} = TestimonialsHeading;
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" ,fontSize:"20px",borderRadius:"50%",width:"40px",height:"40px" ,padding:"10px"}}
            onClick={onClick}
          >
              <FontAwesomeIcon icon={faArrowRight}/>
          </div>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", fontSize:"20px",borderRadius:"50%",width:"40px",height:"40px" ,padding:"10px"}}
            onClick={onClick}
          >
              <FontAwesomeIcon icon={faArrowLeft}/>
          </div>
        );
      }
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1 ,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <section className="client-section pt-20 pb-20">
            <div className="container">
                <div className="row">
                   <SectionTitle title={title} description={description}/>
                </div>
                <div className="row">
                    <div className="col-xxl-8 mx-auto">
                        <div className="clients text-center">
                        <Slider {...settings}>
                            {Testimonials.map((x,index)=>{
                                return (
                                    <div className="single-client" key={index}>
                              <img src={x.imageURL} alt="No file found."/>
                                    <p> 
                                    <span className="iconQuote"><FontAwesomeIcon icon={faQuoteLeft} /> </span> 
                                       {x.testmonials}
                                        <span className="iconQuote"><FontAwesomeIcon icon={faQuoteRight} className="iconQuote"/> </span> 
                                        </p>
                                   <h4>{x.name} <span>{x.degination}</span></h4>
                                 </div>
                                )
                            })}
                  
                         </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;