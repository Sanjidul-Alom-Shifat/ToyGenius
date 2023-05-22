// import React from 'react';

import UseTitle from "../../Hook/UseTitle";

const Blog = () => {

    UseTitle('Blog');

    return (
        <div className='mt-9 mb-9'>

            <div className='mb-5 px-6 md:px-12 max-w-2xl mx-auto lg:px-16 '>
                <h2 className='text-2xl font-bold '>Assignment Question :</h2>

            </div>

            <div className="max-w-2xl mx-auto bg-white px-6 md:px-12 lg:px-16 rounded">

                <div tabIndex={0} className="collapse mb-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </div>
                    <div className="collapse-content">
                        <p>An access token is a short-lived credential used for authenticating API requests, while a refresh token is a long-lived credential used to obtain a new access token without reauthentication. Access tokens are typically stored in client-side memory or local storage, while refresh tokens should be securely stored on the server-side, preferably in an encrypted cookie or session storage.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse mb-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Compare SQL and NoSQL databases?
                    </div>
                    <div className="collapse-content">
                        <p>SQL databases are structured and follow a fixed schema, ensuring strong consistency and support for complex queries. NoSQL databases, on the other hand, are flexible and schema-less, offering scalability and better performance for handling unstructured data, but with eventual consistency and limited query capabilities.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse mb-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is express js? What is Nest JS ?
                    </div>
                    <div className="collapse-content">
                        <p>  Express.js is a lightweight framework for building web applications and APIs in Node.js, while NestJS is a scalable and opinionated framework built on top of Express.js, incorporating TypeScript and Angular-like concepts for structured server-side application development.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse mb-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is MongoDB aggregate ? And how does it work ?
                    </div>
                    <div className="collapse-content">
                        <p>In MongoDB, the aggregate function is used for advanced data analysis and manipulation. It works by applying a series of stages to a collection, allowing you to filter, group, and calculate data across multiple documents. This enables powerful aggregations and transformations to extract meaningful insights from your data in a single query.</p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Blog;