import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


export const Navbar = () => {

  return (
    <div>
        <div className='d-flex justify-content-around  m-0 p-0 bg-secondary text-white'>
            <div className='d-flex p-0'>
                <p><MailOutlineIcon className='text-white-50'/>travel@domain.com</p>
                <p><PhoneIcon className='text-white-50'/>+91 876 4356 8769</p>
            </div>
            <div className='p-0'>
                <p className='d-flex '><XIcon className='twitter'/><FacebookIcon className='facebook'/><LinkedInIcon className='linkedin'/><InstagramIcon className='insta'/></p>
            </div>
        </div>
    <nav className='d-flex justify-content-around bg-dark navbar text-white'>
        <div>
            Brand
        </div>
        <div>
            <ul className="nav">
            <li className="nav-item border-white p-0">
                <NavLink className="nav-link text-white" to="/">Home</NavLink>
            </li>
            <li className="nav-item p-0">
                <NavLink className="nav-link text-white" tp="/about">About</NavLink>
            </li>
            <li className="nav-item p-0">
                <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item p-0">
                <NavLink className="nav-link text-white" to="/Help" >Help us</NavLink>
            </li>
            </ul>
        </div>
        <div>
            <button className='btn border text-white custom-btn bg-info'>Login</button>
        </div>
    </nav>
    </div>
  )
}
