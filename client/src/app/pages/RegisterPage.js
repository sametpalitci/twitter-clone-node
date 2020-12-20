import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class RegisterPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 ">
                        <div className="d-flex align-items-center justify-content-center flex-column">
                            <div className="mt-5">
                                <ion-icon name="logo-twitter" class="fs-1 color-white"></ion-icon>
                            </div>
                            <div className="my-2">
                                <p className="color-white fw-bolder fs-4">Twitter'a Kayıt Ol</p>
                            </div>
                            <form className="row">
                                <div className="col-12">
                                    <input className="form-control  loginPageInput" placeholder="Kullanıcı Adı" />
                                </div>
                                <div className="col-12 mt-3">
                                    <input className="form-control  loginPageInput" placeholder="Email veya Telefon Numarası" />
                                </div>
                                <div className="col-12 mt-3">
                                    <input type="text" className="form-control loginPageInput" placeholder="Parola" />
                                </div>
                                <div className="mt-3">
                                    <p className="color-white  fs-4 m-0 p-0 fs-5">Doğum Tarihi</p>
                                </div>
                                <div className="col-4 mt-3">
                                    <select className="form-control custom-select loginPageSelect" id="inputGroupSelect01">
                                        <option>Ay...</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="col-4 mt-3">
                                    <select className="form-control custom-select loginPageSelect" id="inputGroupSelect01">
                                        <option selected>Gün...</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="col-4 mt-3">
                                    <select className="form-control custom-select loginPageSelect" id="inputGroupSelect01">
                                        <option selected>Yıl...</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="col-12 mt-3">
                                    <button className="form-control btn btn-primary rounded-pill" value="Giriş Yap" >Kayıt Ol</button>
                                </div>
                                <div className="col-12 mt-3">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Link to="/forgetpassword" >Şifreni mi unuttun?</Link>
                                        <ion-icon name="ellipse" class="text-primary mx-2"></ion-icon>
                                        <Link to="/login" >Giriş Yap</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div >
        );
    }
}

export { RegisterPage };
