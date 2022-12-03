import React from 'react';
import BreadCrumb from '../componentes/BreadCrumb';
import Header from '../componentes/Header';
import Sidebar from '../componentes/Sidebar';

const DashBoard = () => {
    return (
        <>
            <Header></Header>
            <Sidebar></Sidebar>
            <main id="main" className="main">
                <BreadCrumb
                    breadCrumb1={"DashBoard"}
                    breadCrumb2={""}
                    breadCrumb3={""}
                    ruta={"/dashboard"}
                />
                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card sales-card">
                                        <div className="card-body">
                                            <h5 className="card-title">Sales <span>| Today</span></h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-cart" />
                                                </div>
                                                <div className="ps-3">
                                                    <h6>145</h6>
                                                    <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End Sales Card */}
                                {/* Revenue Card */}
                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card revenue-card">
                                        <div className="card-body">
                                            <h5 className="card-title">Revenue <span>| This Month</span></h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-currency-dollar" />
                                                </div>
                                                <div className="ps-3">
                                                    <h6>$3,264</h6>
                                                    <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End Revenue Card */}
                                {/* Customers Card */}
                                <div className="col-xxl-4 col-xl-12">
                                    <div className="card info-card customers-card">
                                        <div className="card-body">
                                            <h5 className="card-title">Customers <span>| This Year</span></h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-people" />
                                                </div>
                                                <div className="ps-3">
                                                    <h6>1244</h6>
                                                    <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End Customers Card */}
                            </div>
                        </div>{/* End Left side columns */}
                    </div>
                </section>

            </main>
        </>
    );
}

export default DashBoard;