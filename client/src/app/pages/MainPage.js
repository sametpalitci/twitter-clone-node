import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainPage.css';
class MainPage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row mainFieldRow">
                    <div className="col-12 col-lg-6 mainTwitterBackgroundLeftArea">
                        <div className="mainPageLeftArea w-100 h-100 d-flex align-items-center justify-content-center flex-column">
                            <div>
                                <div className="d-flex align-items-center justify-content-start flex-row mb-4">
                                    <ion-icon name="search-outline" size="large" className="color-white-samet" />
                                    <p className="p-0 mx-2 my-0  fw-bolder link-light">İlgi alanlarını takip et.</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-start flex-row mb-4">
                                    <ion-icon name="people-outline" size="large" />
                                    <p className="p-0 mx-2 my-0 fw-bolder link-light ">İnsanların neler hakkında konuştuğuna kulak ver.</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-start flex-row">
                                    <ion-icon name="chatbubble-outline" size="large" />
                                    <p className="p-0 mx-2 my-0 fw-bolder link-light">Sohbete katıl.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="mainPageLeftArea px-5 w-100 h-100 d-flex align-items-center justify-content-center flex-column">
                            <div>
                                <div>
                                    <ion-icon name="logo-twitter" class="fs-1"></ion-icon>
                                </div>
                                <div>
                                    <p className="fw-bolder link-light fs-3">Dünyada şu anda olup bitenleri gör</p>
                                </div>
                                <div>
                                    <p className="fw-bolder link-light fs-5">Twitter'a bugün katıl.</p>
                                </div>
                                <div>
                                    <Link to='/register' className="btn btn-primary w-100 rounded-pill">Kaydol</Link>
                                </div>
                                <div className="mt-3">
                                    <Link to='/login' className="btn btn-outline-primary w-100 rounded-pill">Giriş Yap</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export { MainPage };