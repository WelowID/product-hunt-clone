import React, {useEffect, useState, useContext} from "react";

import Layout from "../components/layout/Layout";
import ProductDetails from "../components/layout/ProductDetails";
import useProducts from "../hooks/useProducts";

const Home = () => {

    const {products} = useProducts("createdAt");

    return (
        <div>
            <Layout>
                <div className="product-list">
                    <div className="container-custom">
                        <ul className="bg-white">
                            {products.map(product => (
                                <ProductDetails
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </Layout>
        </div>
    )
};

export default Home;
