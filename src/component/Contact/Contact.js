import React from 'react';
import './Contact.css';
import { AiOutlineHome } from "react-icons/ai";
import { FiPhoneCall, FiMail } from "react-icons/fi";

const Contact = () => {
    return (
        <div>

            <img className='contact-banner w-100' src="https://img.freepik.com/free-photo/customer-support-hotline-people-connect-phone-application-contact-us-man-cellphone_36325-2482.jpg?w=826" alt="" />

            <div className='contact-header'>
                <p>CONTACT</p>
                <h1>KEEP IN TOUCH WITH
                    <br /> US FOR HELP</h1>
            </div>
            <div className="container my-5 pt-5">
                <div className="row text-start m-2">
                    <div className="col-md-4 border p-4 d-flex align-items-center justify-content-center">
                        <h1><AiOutlineHome /></h1>
                        <p className='mt-3 ms-4'>117/2,Qutab Road, <br />Mehrauli, New Delhi, <br /> Delhi</p>
                    </div>

                    <div className="col-md-4 border p-4 d-flex align-items-center justify-content-center">
                        <h2 ><FiPhoneCall /></h2>
                        <p className='mt-3 ms-4'>
                            +91 95999 99999 <br />
                            +91 95999 99998 <br />
                            +91 95999 99997
                        </p>
                    </div>

                    <div className="col-md-4 border p-4 d-flex align-items-center justify-content-center">
                        <h2><FiMail /></h2>
                        <p className='mt-3 ms-4'>info@yourmail.com
                            <br />
                            bikeplanet@yourmail.com
                            <br />
                            ship@yourmail.com</p>
                    </div>
                </div>
                <div className="row">


                    <p>CONCACT</p>
                    <h3>KEEP IN TOUCH</h3>
                    <hr />
                    <div className='col-md-7'>

                        <form>
                            <div className="d-flex">
                                <input className='px-5 py-2 m-2' type="text" name="name" id="" placeholder='Name' />
                                <input className='px-5 py-2 m-2' type="email" name="email
                        " id="" placeholder='Email' />
                            </div>

                            <div className="d-flex">
                                <input className='px-5 py-2 m-2' type="number" name="number" id="" placeholder='Phone' />
                                <input className='px-5 py-2 m-2' type="text" name="subject" id="" placeholder='Subject' />
                            </div>

                            <textarea className='m-2 px-5' name="comment" id="" cols="63" rows="5" placeholder='Comment'></textarea>
                            <br />
                            <input className='btn btn-warning ms-2 px-5' type="submit" value="SUBMIT" />
                        </form>
                    </div>
                    <div className="col-md-5">
                        <img className='img-fluid' src="https://img.freepik.com/free-photo/contact-us-customer-support-hotline-people-connect-call-customer-support_36325-1640.jpg?w=740" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;