import React from 'react';
import Navbar from '../../components/Navbar';
import './styled.css';
import imovel from '../../img/imovel-exemplo.jpg';
import { Categories } from '../../components';
import { Card, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <body>
            <Navbar></Navbar>
            <div className="main-title">
                <h2>Para Você</h2>
            </div>

            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="{imovel}" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> */}
            <div className="container">
                <div className="row g-4">

                    <div className="col-sm-12 col-md-12 col-lg-3 d-flex justify-content-center"><Categories /></div>

                    <div className="col-sm-12 col-md-12 col-lg-9 ">
                        <div className="row g-3">
                            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
                                <div className="card">
                                    <img src={imovel} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
                                <div className="card">
                                    <img src={imovel} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
                                <div className="card">
                                    <img src={imovel} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
                                <div className="card">
                                    <img src={imovel} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
                                <div className="card">
                                    <img src={imovel} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
                                <div className="card">
                                    <img src={imovel} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
                                <div className="card">
                                    <img src={imovel} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body >
    )
}

export default Home;