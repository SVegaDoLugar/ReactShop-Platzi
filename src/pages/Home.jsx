import React from 'react';
import Header from '../components/Header';
import ProductList from '../containers/ProductList';
import Layout from '../containers/Layout';
const Home = () => {
    return (
        <Layout>
            <Header/>
            <ProductList />
        </Layout>
    );
}

export default Home;