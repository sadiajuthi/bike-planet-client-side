import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SingleProduct = ({ product }) => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const handleStockUpdate = () => {
        navigate(`/update/${product._id}`)
    }

    return (

        <div className="col-md-4 p-3 text-start shadow-lg">
            <div className="">
                <div className='w-100'>
                    <img className='img-fluid p-2' src={product.img} alt="" />
                </div>
                <div className='p-2'>
                    <h5>
                        <span className='text-warning'>{product.name}</span> <small>Price: ${product.price}</small>
                    </h5>
                    <p>{product.description}</p>
                    <p className='my-1'>Supplier: {product.spplier} {user?.email}</p>
                    <p>Available Product: {product.quantity} </p>
                </div>
                <button onClick={handleStockUpdate} className='btn btn-warning rounded-pill'>Stock Update</button>
            </div>

        </div>

    );
};

export default SingleProduct;