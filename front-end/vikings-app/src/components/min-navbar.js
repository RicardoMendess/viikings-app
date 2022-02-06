import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import vidente from '../img/vidente-vikings.jpg';
import ragnarconde from '../img/ragnar-conde.jpg';

class MinNavbar extends React.Component {
    render() {
        return (
            <section className="c-ce c-bg-m px-5 py-5">
                <div className="row">
                    <div className="col-12 col-xl-6">
                        <div className="row">
                            <div className="col-12 col-lg-6 col-md-6">
                                <div class="card">
                                    <img src={vidente} class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Vidente</h5>
                                        <p class="card-text">Para ver seu passado, futuro e presente, consulte o Vidente</p>
                                        <button><a href="/" class="btn">Clique aqui para ir ao Vidente</a></button>
                                    </div>
                                </div>
                                <div class="card my-5">
                                    <img src={ragnarconde} class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Conde Ragnar Lothbrook</h5>
                                        <p class="card-text">Para solicitar algum benefício para sua vila, vá até o Conde Ragnar</p>
                                        <button><a href="/" class="btn t-cs bg-b">Clique aqui para ir ao Conde</a></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-md-6">
                                <div class="card">
                                    <img src="..." class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="/" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                <div class="card my-5">
                                    <img src="..." class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="/" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default MinNavbar;