import React from 'react';
import './Login.css';
// import { FaUserCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import Icon from '../image/login-icon.png'


const Login = () => {
    return (
        <div className='login p-5'>
            <h2 className='text-center m-3'>LOG-IN</h2>

            <div className=" login-form m-auto text-center m-5">
                <div className='p-3 mx-0'>
                    <div className='mx-auto mb-4'><img className='icon' src={Icon} alt="" /></div>
                    <form className=''>
                        <HiOutlineMail />
                        <input className='input' type="email" name="email" id="" placeholder='Email Id' />
                        <hr className='mt-0' />
                        <RiLockPasswordLine />
                        <input className='input' type="password" name="password" id="" placeholder='Password' />
                        <hr className='mt-0' />
                        <div className=" m-auto">
                            <input className='btn w-75 btn-warning rounded-pill px-5 mt-3' type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-start'>
                        <small>
                            Forgotten password? <span className='text-danger'>reset password.
                            </span>
                        </small>
                        <small className='mt-0 d-block'>
                            Don't have any account? <span className='text-warning'>please Register.
                            </span>
                        </small>
                    </p>
                    <p className='text-center'>
                        or
                    </p>
                    <div className="m-auto">
                        <button className='btn btn-warning px-5 rounded-pill mt-0'>Sign in with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;