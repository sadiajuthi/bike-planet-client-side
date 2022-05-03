import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const UpdateProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);


    const handleDelivered = e => {

        const quantityBfrDeliver = parseInt(product.quantity)

        const quantityAftrDeliver = quantityBfrDeliver - 1;


        let updatedProduct = { quantityAftrDeliver }
        console.log(quantityAftrDeliver);

        const url = `http://localhost:5000/product/${productId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('delivered')


            })
    }





    const handleUpdateProduct = event => {
        // event.preventDefault();
        const preQuantity = parseInt(product.quantity)
        const newQuantity = parseInt(event.target.number.value);

        let quantity = preQuantity + newQuantity
        if (quantity < 0) {
            alert('product cannot be negetive')
            quantity = preQuantity;
        }

        let updatedProduct = { quantity }
        console.log(preQuantity + newQuantity)


        //update data
        const url = `http://localhost:5000/product/${productId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                event.target.reset(product.quantity);

            })
    }



    return (

        <div className="container mt-5 mb-5">
            <h2 className='text-warning text-center p-4'>{product.name}</h2>
            <div className='row'>
                <div className='col-md-7'>
                    <img className='w-100' src={product.img} alt="" />
                </div>
                <div className='col-md-5 p-2'>
                    <h4>
                        Price: ${product.price}
                    </h4>
                    <h5>id: {product._id}</h5>

                    <p>{product.description}</p>
                    <p className='my-1'>Supplier: {product.spplier}</p>
                    <p>Available Product: {product.quantity}piece</p>
                    <button onClick={handleDelivered}>Deliver</button>
                    <h4>Update your product quantity</h4>
                    <hr />
                    <form onSubmit={handleUpdateProduct}>
                        <label htmlFor="">Select the product quantity you want to add:</label>
                        <br />
                        <input className='w-75 my-2 py-2' type="number" name="number" id="" placeholder='Quantity' />
                        <br />
                        <input className='btn rounded-pill btn-warning px-5 py-2 my-2' type="submit" value="Update" />
                    </form>

                </div>
            </div>
            <div className=''>
                <Link className='btn btn-warning mt-5 py-2 px-5 rounded-pill' to='/manageproduct'>Manage Products </Link>
            </div>
        </div>

    );
};

export default UpdateProduct;