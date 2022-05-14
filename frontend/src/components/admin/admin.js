import React,{ Fragment } from 'react';
import Dashboard from './dashboard/dashboard'

import './dashboard/dashboard.css'

const Admin = () => {
    return(
        <Fragment>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Theatex</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                    <a className="nav-link px-3" href="#">Sign out</a>
                    </div>
                </div>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div className="position-sticky pt-3">
                        <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#" id="dashboard">
                            <span data-feather="home"></span>
                            Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="movie">
                            <span data-feather="film"></span>
                            Movies
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="add">
                            <span data-feather="film"></span>
                            Add Movies
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="remove">
                            <span data-feather="film"></span>
                            Remove Movies
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="screen">
                            <span data-feather="tv"></span>
                            Screens
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="allocate">
                            <span data-feather="tv"></span>
                            Assign Screens
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="deallocate">
                            <span data-feather="tv"></span>
                            De-allocate Screens
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="customers">
                            <span data-feather="users"></span>
                            Customers
                            </a>
                        </li>
                        </ul>
                    </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="main">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2" id="title">Dashboard</h1>
                    </div>
                    <div id="view">
                    </div>
                    </main>
                </div>
            </div>
        </Fragment>
    );
}

export default Admin;