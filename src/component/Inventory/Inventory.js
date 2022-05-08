import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Inventory = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://lit-gorge-25898.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])



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
                    const remaining = products.filter(product => product._id !== _id)
                    setProduct(remaining)
                })
        }
    }

    return (
        <div className='container'>
            <h1 className='mt-4'>Manage Inventories</h1>


            <div className="">
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
                    {products.map(product =>
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
            </div>
            <p className='mt-5 text-end'>Please visit <Link to='/additem'><span className='text-warning'>Add Item</span></Link> to add a new inventory.</p>

        </div>
    );
};

export default Inventory;