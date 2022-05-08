import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/home';

    if (user) {
        navigate(from, { replace: true })
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger text-start'>Error: {error.message}</p>
    }

    if (loading) {
        return <Loading></Loading>
    }




    return (
        <div>
            <div className="m-auto">
                <button onClick={() => signInWithGoogle()} className='btn btn-warning px-5 rounded-pill mt-0'>Sign in with Google</button>
                {errorElement}
            </div>
        </div>
    );
};

export default SocialLogin;