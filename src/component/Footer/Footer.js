import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import './Footer.css'

const Footer = () => {
    return (

        <div className='footer'>
            <div className='container'>
                <div className='row mt-5 pt-5 '>
                    <div className="col-md-3 text-muted">
                        <h4 className='text-warning'>BIKE PLANET</h4>
                        <p>
                            We help you grow your business.Easy to deal,Easy to transport and Secured place to store your products.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <p className='mb-1'>USEFUL LINKS</p>
                        <Link className='text-decoration-none text-light d-block text-muted' to={'/home'}><MdKeyboardArrowRight /><small>Home </small></Link>
                        <Link className='text-decoration-none text-light d-block text-muted' to={'/blog'}><MdKeyboardArrowRight /><small>Blog</small></Link>
                        <Link className='text-decoration-none text-light d-block text-muted' to={'/contact'}><MdKeyboardArrowRight /><small>Contact </small></Link>
                    </div>
                    <div className="col-md-3">
                        <p className=' mb-1'>SERVICES</p>

                        <p className='text-muted'>
                            <small className='d-block'><MdKeyboardArrowRight />Warehousing</small>
                            <small className='d-block'><MdKeyboardArrowRight />Storage</small>
                            <small className='d-block'><MdKeyboardArrowRight />Road Freight</small>
                            <small className='d-block'><MdKeyboardArrowRight />Ocean Freight</small>
                        </p>
                    </div>
                    <div className="col-md-3">
                        <p className="mb-1">
                            CONTACT US
                        </p>
                        <p className="text-muted">
                            <small><FaMapMarkerAlt className='me-1' /> 117/2, Qutab Road, <br /> <span className='ms-4'>Mehrauli, New Delhi, Delhi.</span>
                                <br />
                                <FiPhoneCall className='me-1' /> +91 95999 99999
                                <br />
                                <FiMail className='me-2' /> info@yourmail.com
                            </small>

                        </p>
                    </div>
                </div>

                <div className='text-center text-muted'>
                    <small>Copyright © 2022 Bike Planet, All rights reserved.</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;