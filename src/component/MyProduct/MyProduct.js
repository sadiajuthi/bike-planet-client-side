import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { RiDeleteBin5Fill } from "react-icons/ri";

const MyProduct = () => {
    const [user] = useAuthState(auth)
    const [myProducts, setMyProduct] = useState([]);



    useEffect(() => {
        const email = user.email
        const url = `https://lit-gorge-25898.herokuapp.com/myproduct?email=${email}`
        console.log(email)

        if (email) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setMyProduct(data);
                });
        }


    }, [user])

    const handleDelete = _id => {

        const deleteProduct = window.confirm('Are you sure to delete this item?')
        if (deleteProduct) {
            const url = `https://lit-gorge-25898.herokuapp.com/product/${_id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myProducts.filter(product => product._id !== _id)
                    setMyProduct(remaining)
                })
        }
    }

    return (
        <div className='container' style={{ height: '100vh' }}>
            <h1 className='mt-4 pt-4'>Manage my products</h1>
            <hr className='mb-4' />

            <Table striped bordered hover variant="dark">
                <thead className='text-center'>
                    <tr>
                        <th>Image</th>
                        <th>Name and Price</th>
                        <th>Description</th>
                        <th>Supplier Name</th>
                        <th>Available product</th>
                        <th>remove Item</th>
                    </tr>
                </thead>
                {myProducts.map(product =>
                    <tbody>
                        <tr>
                            <td>
                                <img style={{ width: '100px' }} src={product.img} alt="" /></td>
                            <td><span className='text-warning'>{product.name}</span>, Price: ${product.price}</td>
                            <td><small>{product.description}</small></td>
                            <td>{product.spplier}</td>
                            <td>{product.quantity} piece</td>
                            <td><span onClick={() => handleDelete(product._id)} style={{ cursor: 'pointer' }} className='text-danger text-center fs-2 p-3'><RiDeleteBin5Fill /></span></td>
                        </tr>

                    </tbody>
                )}
            </Table>



        </div >
    );
};

export default MyProduct;