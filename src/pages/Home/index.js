import React from 'react';
import Navbar from '../../components/Navbar';
import './styled.css';
import imovel from '../../img/imovel-exemplo.jpg';
import { Cards, Categories } from '../../components';
import { Card, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <body>
            <Navbar></Navbar>
            <div className="main-title">
                <h2>Para Você</h2>
            </div>


            <div className="container">
                <div className="row g-4">

                    <div className="col-sm-12 col-md-12 col-lg-3 d-flex justify-content-center"><Categories /></div>

                    <div className="col-sm-12 col-md-12 col-lg-9">
                        <div className="row g-3">
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                                <Cards />
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                                <Cards />
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                                <Cards />
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                                <Cards />
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                                <Cards />
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                                <Cards />
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                                <Cards />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body >
    )
}

export default Home;