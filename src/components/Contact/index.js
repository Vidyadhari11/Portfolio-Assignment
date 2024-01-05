import Header from "../../components/Header"
import { FaLinkedin , FaInstagramSquare } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";

import "./index.css"

const Contact=()=>{
    return(
        <div>
            <Header/>
           <div className="contact-container">
            <div className="contact">
                <FaInstagramSquare className="icons" size="70"/>
                <FaLinkedin className="icons" size="70"/>
                <IoIosMail className="icons" size="100"/>
            </div>
            <h1 className="footer">Copyright © 2024.  All rights reserved</h1>
           </div>
           <img src="https://res.cloudinary.com/dtoiozo4f/image/upload/v1704435138/Screenshot_47_ng901e.png" className="footer-img" alt="footer"/>
        </div>
    )
}

export default Contact