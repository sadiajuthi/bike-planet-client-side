import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import Icon from '../image/login-icon.png'
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';




const Register = () => {
    const [

        createUserWithEmailAndPassword,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const navigate = useNavigate();
    const handleNavigateLogin = () => {
        navigate('/login')
    }



    if (loading) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
        await createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='login p-5'>
            <h2 className='text-center m-4'>REGISTER NOW</h2>

            <div className="login-form m-auto text-center m-5">
                <div className='p-3 mx-0'>
                    <div className='mx-auto mb-4'><img className='icon' src={Icon} alt="" /></div>
                    <form onSubmit={handleRegister}>
                        <BiUser />
                        <input className='input' type="text" name="name" id="" placeholder='Your Name' required />
                        <hr className='mt-0' />
                        <HiOutlineMail />
                        <input className='input' type="email" name="email" id="" placeholder='Email Id' required />
                        <hr className='mt-0' />
                        <RiLockPasswordLine />
                        <input className='input' type="password" name="password" id="" placeholder='Password' required />
                        <hr className='mt-0' />
                        <div className=" m-auto">
                            <input className='btn btn-warning w-75 rounded-pill px-5 mt-3' type="submit" value="Register" />
                        </div>
                    </form>
                    <p className='text-start'>
                        <small className='mt-0 d-block'>
                            Already have an account? <span onClick={handleNavigateLogin} className='cursor text-danger'>Login.
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

export default Register;