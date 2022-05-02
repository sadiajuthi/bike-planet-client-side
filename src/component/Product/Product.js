import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Product.css'

const Product = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <div className='container mt-4 pt-4'>
            <h1>
                OUR PRODUCTS
            </h1>
            <hr />
            <div className="row">
                {
                    products.map(product =>

                        <div className="col-md-4 p-3 text-start shadow">
                            <div className="m-2">
                                <div className='w-100'>
                                    <img className='w-100' src={product.img} alt="" />
                                </div>
                                <div className='py-3'>
                                    <h5>
                                        <span className='text-warning'>{product.name}</span> <small>Price: ${product.price}</small>
                                    </h5>
                                    <p>{product.description}</p>
                                    <p className='my-1'>Supplier: {product.spplier}</p>
                                    <p>Available Product: {product.quantity}piece</p>
                                </div>
                            </div>

                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default Product;