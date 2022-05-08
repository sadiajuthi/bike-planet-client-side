import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-warning m-4 pt-4'>Questions part</h1>
            <div className="row">
                <div className="col-md-5 m-4 border shadow-lg p-4">
                    <h6>1. What is the difference between Js and Node Js</h6>
                    <p>Ans: JavaScript is a object oriented scripting Laguage. Where Node Js is not a Language, it is an interpreter that runs javascript.</p>
                </div>

                <div className="col-md-5 m-4 border shadow-lg p-4">
                    <h6>2. What is the purpose of JWT?</h6>
                    <p>Ans:Perpose of JWT is to secure our data. it gives us an access token which prevents the  unwanted access to a protected resource. </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 m-4 border shadow-lg p-4">
                    <h6>3. When should we use node js and when should we use mongodb?</h6>
                    <p>Ans: Node js and Mongodb are not the same things. Node js help us to exicute our application and also it  provides a variety of methods to help you query your data. On the other hand Mngodb is a database where we can store our documents.
                    </p>
                </div>
                <div className="col-md-5 border shadow-lg m-4 p-4">
                    <h6>4. What is the defference between sql and nosql database?</h6>
                    <p>Ans: SQL databases are a type of system software that supports management, analysis, capturing and querying the structured data in a relational format. where NoSQL databases are a type of software that allows to maintain and retrieve structured, unstructured, polymorphic data for different purposes.</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;