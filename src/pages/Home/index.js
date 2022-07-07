import React from 'react';
import Navbar from '../../components/Navbar';
import './styled.css';
import imovel from '../../img/imovel-exemplo.jpg';

const Home = () => {
    return (
        <body>
            <Navbar></Navbar>
            <div class="offset-lg-3 main-title col">
                <h2>Para Você</h2>
            </div>

            <div class="container">
                <div class="row justify-content-center">
                    <div className="col categories lead">
                        <div class="categories-title text-center ">
                            <label class="lead fw-bold">Suas Categorias</label>
                        </div>

                        <div class="list-group">
                            <label className="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value="" />
                                Imóveis
                            </label>
                            <label className="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value="" />
                                Carros
                            </label>
                            <label className="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value="" />
                                Eletrônicos
                            </label>
                            <label className="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value="" />
                                Roupas
                            </label>
                            <label className="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value="" />
                                Eletrodomésticos
                            </label>
                            <label className="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value="" />
                                Eletrodomésticos
                            </label>
                            <label className="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value="" />
                                Eletrodomésticos
                            </label>
                            <label className="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value="" />
                                Eletrodomésticos
                            </label>
                            <label className="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value="" />
                                Eletrodomésticos
                            </label>
                            <label className="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value="" />
                                Eletrodomésticos
                            </label>
                            <label className="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value="" />
                                Eletrodomésticos
                            </label>
                            <label className="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value="" />
                                Eletrodomésticos
                            </label>
                        </div>
                    </div>


                    <div className="col-lg-3 m-2">
                        <div class="card">
                            <img src={imovel} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 m-2">
                        <div class="card">
                            <img src={imovel} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 m-2">
                        <div class="card">
                            <img src={imovel} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 m-2">
                        <div class="card">
                            <img src={imovel} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 m-2">
                        <div class="card">
                            <img src={imovel} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </body >
    )
}

export default Home;