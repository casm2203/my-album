import React from 'react'
import '../App.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-success bg-gradient shadow-sm  mb-1 rounded navbar-cs">
            <div className="container-fluid d-flex justify-content-center ">
                <a className="navbar-brand d-flex align-items-center " href="https://getbootstrap.com/docs/5.1/components/navbar/">
                    <img src="https://cdn.icon-icons.com/icons2/1993/PNG/512/camera_digital_photo_photography_picture_record_video_icon_123229.png" alt="" width="50" height="50" className="d-inline-block align-text-top" />
                <strong  className="text-light " >My Album</strong>
                </a>
            </div>
        </nav>
    )
}

export default Navbar