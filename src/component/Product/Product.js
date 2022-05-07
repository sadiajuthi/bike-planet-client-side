import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Product.css'
import { FiArrowRight } from "react-icons/fi";

const Product = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://lit-gorge-25898.herokuapp.com/product')
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
                    products.slice(1, 7).map(product =>

                        <SingleProduct
                            key={product._id}
                            product={product}>

                        </SingleProduct>

                    )
                }
                <Link className='text-warning btn-link fs-6 text-center mt-4 ' to='/inventory'> Manage Inventories<span className='fs-5, text-warning'><FiArrowRight /></span></Link>
            </div>
        </div>
    );
};

export default Product;