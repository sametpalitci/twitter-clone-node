import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ForgetPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 ">
                        <div className=" d-flex align-items-center justify-content-center flex-column">
                            <div className="mt-5">
                                <ion-icon name="logo-twitter" class="fs-1 color-white"></ion-icon>
                            </div>
                            <div className="my-2">
                                <p className="color-white fw-bolder fs-4">Parolanı Sıfırla</p>
                            </div>
                            <form className="row">
                                <div className="col-12">
                                    <input className="form-control  loginPageInput" placeholder="Telefon, e-posta veya kullanıcı adı" />
                                </div>
                                <div className="col-12 mt-3">
                                    <button className="form-control btn btn-primary rounded-pill" value="Giriş Yap" >Parolanı Sıfırlama Linkini Gönder</button>
                                </div>
                                <div className="col-12 mt-3">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Link to="/" >Geri Dön</Link>
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

export { ForgetPage };
