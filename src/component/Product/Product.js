import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
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

                        <SingleProduct
                            key={product._id}
                            product={product}>

                        </SingleProduct>

                    )
                }
            </div>
        </div>
    );
};

export default Product;