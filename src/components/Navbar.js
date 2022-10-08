import React from 'react'
import '../App.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-black bg-black shadow-sm  mb-1 rounded navbar-cs">
            <div className="container-fluid d-flex justify-content-center ">
                <a className="navbar-brand d-flex align-items-center " href="https://getbootstrap.com/docs/5.1/components/navbar/">
                    <img src="https://cdn.icon-icons.com/icons2/272/PNG/512/Camera_Moto_30013.png" alt="" width="50" height="50" className="d-inline-block align-text-top" />
                <strong  className="text-light " >My Album</strong>
                </a>
            </div>
        </nav>
    )
}

export default Navbar