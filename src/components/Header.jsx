import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
     <header className="header_area">
         <div className="container">
             <div className="row align-items-center">
                 <div className="col-xxl-3">
                     <div className="logo">
                         <Link to="">XNEON</Link>
                     </div>
                 </div>
                 <div className="col-xxl-9">
                     <div className="menu">
                         <ul className="d-flex justify-content-end">
                             <li><Link to="">home</Link></li>
                             <li><Link to="">about</Link></li>
                             <li><Link to="">services</Link></li>
                             <li><Link to="">projects</Link></li>
                             <li><Link to="">experience</Link></li>
                             <li><Link to="">blog</Link></li>
                             <li><Link to="">testmonials</Link></li>
                             <li><Link to="">contact</Link></li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
     </header>
    );
};

export default Header;