import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        console.log('ok');
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <div>
            <h2>Product Id: {productId}</h2>
        </div>
    );
};

export default UpdateProduct;