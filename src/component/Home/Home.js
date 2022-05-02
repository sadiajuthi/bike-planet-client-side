import React from 'react';
import img from '../image/banner.jpeg';
import img1 from '../image/pic1.jpeg';
import img2 from '../image/pic2.jpeg'
// import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { IoMdPaper } from "react-icons/io";
import { MdVerifiedUser, MdAnalytics, MdPendingActions } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import './Home.css'
import Product from '../Product/Product';


const Home = () => {
    return (
        <div>
            <img className='img-fluid w-100' src={img} alt="" />
            {/* product section */}
            <Product></Product>

            {/* About us secttion */}
            <section className='container mt-5 py-5'>
                <div className="row text-start justify-content-center p-3">
                    <h2 className='text-center mb-3'>ABOUT US</h2>
                    <hr />
                    <div className="col-md-5 pt-4">
                        <img className='img-fluid' src={img1} alt="" />
                    </div>
                    <div className="col-md-7 px-4 pt-4">
                        <h3>WELCOME TO THE <span className='text-warning'>BIKE PLANET</span></h3>

                        <h6 className='my-4'>Before we get ahead of ourselves, we want to welcome you to BIKE PLANET. While nothing can replace thing on-the-lot experience.</h6>

                        <p>We appreciate you taking the time today to visit our web site. Our goal is to give you an interactive tour of our new inventory, as well as allow you to conveniently get a schedule of service appointment, or apply for financing. The search for a luxury Motorcycle is filled with high expectations. Undoubtedly, that has a lot to do with the vehicles you are considering, but at Motors, we think you should also have pretty high expectations for your dealership.</p>
                    </div>
                    <div className="col-md-7 mt-5 pt-5">
                        <h3>CORE VALUES</h3>
                        <h6 className='my-4'>We go through extensive factory training so that we may provide you with the knowledge you need to make an educated decision in choosing the vehicle that is right for your Business.</h6>
                        <p className='my-1'> <span className='text-warning me-2'><FaCheck /> </span> Stress-free finance department.</p>
                        <p className='my-1'> <span className='text-warning me-2'><FaCheck /> </span> Robust selection of popular vehicles.</p>
                        <p className='my-1'> <span className='text-warning me-2'><FaCheck /> </span> more than 100 offers on site, trusted by a community.</p>
                        <p className='my-1'> <span className='text-warning me-2'><FaCheck /> </span> We know how to handle a wide range of Motorcycle services.</p>

                    </div>
                    <div className="col-md-5 mt-4 pt-5">
                        <img className='img-fluid pt-2' src={img2} alt="" />
                    </div>
                </div>
            </section>

            {/* advantage section */}
            <section className="container mt-5 pt-3">
                <h2>Our Advantages</h2>
                <hr />
                <div id='advantage' className="row mt-4 justify-content-around">
                    <div className="col-md-5  d-flex">
                        <div>
                            <h1 id='icon-check' className='text-warning pe-3 pt-0 '><MdPendingActions /></h1>
                        </div>
                        <div className='text-start p-2'>
                            <h6>ONLINE APPOINMENT</h6>
                            <p> <small>You can contact us and can get your appoinment through online. That makes your purchase more easier.</small> </p>
                        </div>
                    </div>
                    <div className="col-md-5  d-flex">
                        <div>
                            <h1 className='text-warning pe-3 pt-0 '><MdAnalytics /></h1>
                        </div>
                        <div className='text-start p-2'>
                            <h6>FREE DIAGNOSIS & BRAKE CHECKS</h6>
                            <p> <small>If you get any kind of claim from your customer, you can let us know immediately. We will work on it. In some cases we also provide exchange option through investigation.</small> </p>
                        </div>
                    </div>
                    <div className="col-md-5  d-flex">
                        <div>
                            <h1 className='text-warning pe-3 pt-0'><IoMdPaper /></h1>
                        </div>
                        <div className='text-start p-2'>
                            <h6>CERTIFIED AUTO MECHANICS</h6>
                            <p> <small>We assure that every product of our warehouse is certified. We make sure to check all papers from the buyer and seller every time before dealing.</small> </p>
                        </div>
                    </div>
                    <div className="col-md-5  d-flex">
                        <div>
                            <h1 className='text-warning pe-3 pt-0 '><MdVerifiedUser /></h1>
                        </div>
                        <div className='text-start p-2'>
                            <h6>12 MONTH WARRANTY ON SERVICE</h6>
                            <p> <small>We provide 12 months warranty on service to the customer of our buyer.</small> </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;