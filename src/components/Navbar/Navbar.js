import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg  row ">
            <ul className="navbar-nav col-lg-5 p-2 ">
                <li className="nav-item">
                    <Link to='/' className="nav-link active "><i className="fas fa-home p-1"></i>Home</Link></li>
                <li className="nav-item"><Link to='/playerStats' className="nav-link"><i className="fas fa-chart-line p-1"></i>Player
          Stats</Link></li>
                <li className="nav-item"><Link to='/Fixtures' className="nav-link"><i className="fas fa-calendar-week p-1"></i>Fixtures</Link></li>
            </ul>
            <div className=" col-lg-5">
                <Link to="/" className="navbar-brand active">Cricket Kure</Link>

            </div>

            <div className="col-lg-2 ">

                <i className="fab fa-google text-white px-2 "></i>
                <i className="fab fa-facebook text-white  px-2"></i>

                <button className="btn btn-light btn-sm">Sign Up</button>
            </div>
        </nav>
    )
}
