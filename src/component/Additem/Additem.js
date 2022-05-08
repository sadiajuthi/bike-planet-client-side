import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Additem = () => {
    const [user] = useAuthState(auth);
    const handleAddItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const price = event.target.price.value;
        const spplier = event.target.spplier.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const img = event.target.img.value;

        const product = { name, email, price, spplier, quantity, description, img }
        console.log(product);

        // send product to mongo
        fetch('https://lit-gorge-25898.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Added', data);
                alert('New product added')
            })

    }

    return (
        <div className='container'>
            <h3 className='text-center mt-4'>Please fill up the form to add a new item.</h3>
            <hr className='w-75 m-auto mb-3' />
            <div className="w-50 m-auto mb-5">
                <form onSubmit={handleAddItem} className='px-5 py-4 shadow-lg'>
                    <label>Email: </label>
                    <input className=' w-100 p-1 mb-2' type="email" name="email" id="" placeholder='Enter Product Name' value={user.email} required />

                    <label>Name: </label>
                    <input className=' w-100 p-1 mb-2' type="text" name="name" id="" placeholder='Enter Product Name' required />

                    <label>Price:</label>
                    <input className=' w-100 p-1 mb-2' type="number" name="price" id="" placeholder='Enter price' required />

                    <label htmlFor="">Supplier Name:</label>
                    <input className='d-block w-100 p-1 mb-2' type="text" name="spplier" id="" placeholder='Enter Supplier Name' required />

                    <label htmlFor="">Number of Product</label>
                    <input className='d-block w-100 p-1 mb-2' type="number" name="quantity" id="" placeholder='Product quantity' required />

                    <label htmlFor="">Insert a Photo Url</label>
                    <input className='d-block w-100 p-1 mb-2' type="url" name="img" id="" required />

                    <label htmlFor="">Description:</label>
                    <textarea name="description" id="" className='d-block w-100 mb-2' rows="4" placeholder='Enter Product Description' required></textarea>

                    <div className='w-50 m-auto'>
                        <input className='my-3 w-100 btn btn-warning rounded-pill' type="submit" value="Add Product" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Additem;