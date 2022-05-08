import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProduct = () => {
    const [user] = useAuthState(auth)
    const [myProducts, setMyProduct] = useState([]);



    useEffect(() => {
        const email = user.email
        const url = `http://localhost:5000/product?email=${email}`
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

    return (
        <div>
            <h1>My product:{myProducts.length}</h1>


            {
                myProducts.map(product =>
                    <h1>{product.name}</h1>)
            }


        </div >
    );
};

export default MyProduct;