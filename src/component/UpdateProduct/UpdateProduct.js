import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiArrowRight } from "react-icons/fi";


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

        let quantityAfterDeliver = product.quantity - 1;

        if (quantityAfterDeliver < 0) {
            alert("Product finish.please restock")
            quantityAfterDeliver = product.quantity
        }
        const newProduct = { ...product, quantity: quantityAfterDeliver }

        setProduct(newProduct)

        const url = `http://localhost:5000/product/${productId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })

            .then(res => res.json())
            .then(data => {
                console.log(newProduct);
                toast('your product is delivered');

            })
    }





    const handleUpdateProduct = event => {
        event.preventDefault();
        const preQuantity = parseInt(product.quantity)
        const newQuantity = parseInt(event.target.number.value);

        let updatedquantity = preQuantity + newQuantity
        if (updatedquantity < 0) {
            alert('product cannot be negetive')
            updatedquantity = preQuantity;
        }

        const updatedProduct = { ...product, quantity: updatedquantity }
        console.log(preQuantity + newQuantity)

        setProduct(updatedProduct)
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
                event.target.reset();
                toast('Stock is Updated');

            })
    }



    return (

        <div className="mt-4 mb-5 pb-5 w-75 mx-auto ">
            <ToastContainer />
            <div className="">
                <h1 className='text-warning text-center p-4'>{product.name}</h1>
                <div className='row'>
                    <img className='col-md-5 img-fluid' src={product.img} alt="" />

                    <div className='col-md-4 ps-2'>
                        <h4>
                            Price: ${product.price}
                        </h4>
                        <h6>id: {product._id}</h6>

                        <p>{product.description}</p>
                        <p className='my-1'>Supplier: {product.spplier}</p>
                        <p>Available Product: {product.quantity} piece</p>
                        <button className='btn btn-warning rounded-pill px-5 py-1 w-50' onClick={handleDelivered}>Deliver</button>
                    </div>

                    <div className="col-md-3">
                        <h4>Restock product</h4>
                        <hr />
                        <form onSubmit={handleUpdateProduct}>
                            <label htmlFor="">Select the product quantity you want to stock:</label>
                            <br />
                            <input className='w-100 my-2 py-2' type="number" name="number" id="" placeholder='Quantity' />
                            <br />
                            <input className='btn rounded-pill btn-warning w-75 py-1 my-2' type="submit" value="Update" />
                        </form>
                        <div className='mt-4 ms-2'>
                            <Link className='text-warning btn-link fs-6' to='/inventory'> Manage Inventories<span className='fs-5, text-warning'><FiArrowRight /></span></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default UpdateProduct;