import React, { useRef } from 'react';
import './Login.css';
// import { FaUserCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import Icon from '../image/login-icon.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast, ToastContainer } from 'react-toastify';




const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    if (loading) {
        return <Loading></Loading>
    }

    const handleNavigateRagister = () => {
        navigate('/register')
    }

    const from = location.state?.from?.pathname || '/home';


    if (user) {
        navigate(from, { replace: true })
    }
    if (loading) {
        return <Loading></Loading>
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger text-center'>Error: {error.message}</p>
    }



    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async (e) => {
        const email = emailRef.current.value;
        console.log(email)
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }






    return (
        <div className='login p-5'>

            <h2 className='text-center m-3'>LOG-IN</h2>
            <ToastContainer />
            <div className=" login-form m-auto text-center m-5">
                <div className='p-3 mx-0'>
                    <div className='mx-auto mb-4'><img className='icon' src={Icon} alt="" /></div>
                    <form onSubmit={handleLogin} className=''>
                        <HiOutlineMail />
                        <input ref={emailRef} className='input' type="email" name="email" id="" placeholder='Email Id' required />
                        <hr className='mt-0' />
                        <RiLockPasswordLine />
                        <input className='input' type="password" name="password" id="" placeholder='Password' required />
                        <hr className='mt-0' />
                        <div className=" m-auto">
                            <input className='btn w-75 btn-warning rounded-pill px-5 mt-3' type="submit" value="Login" />
                        </div>
                    </form>
                    {errorElement}
                    <p className='text-start'>
                        <small>
                            Forgotten password? <span
                                onClick={resetPassword}
                                className='cursor text-danger'>reset password.
                            </span>
                        </small>
                        <small className='mt-0 d-block'>
                            Don't have any account? <span onClick={handleNavigateRagister} className='cursor text-danger'>Register.
                            </span>
                        </small>
                    </p>
                    <p className='text-center'>
                        or
                    </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;