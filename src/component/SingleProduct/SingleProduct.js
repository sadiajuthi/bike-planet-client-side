import React from 'react';
import { useNavigate } from 'react-router-dom';


const SingleProduct = ({ product }) => {
    const navigate = useNavigate();
    const handleStockUpdate = () => {
        navigate(`/update/${product._id}`)
    }

    return (

        <div className="col-md-4 p-3 text-start shadow">
            <div className="m-2">
                <div className='w-100'>
                    <img className='img-fluid p-2' src={product.img} alt="" />
                </div>
                <div className='py-3'>
                    <h5>
                        <span className='text-warning'>{product.name}</span> <small>Price: ${product.price}</small>
                    </h5>
                    <p>{product.description}</p>
                    <p className='my-1'>Supplier: {product.spplier}</p>
                    <p>Available Product: {product.quantity} piece</p>
                </div>
                <button onClick={handleStockUpdate} className='btn btn-warning rounded-pill'>Stock Update</button>
            </div>

        </div>

    );
};

export default SingleProduct;