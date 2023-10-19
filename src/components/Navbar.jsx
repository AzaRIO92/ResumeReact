import React from 'react'
import '../components/Navbar.css'
import insta from '../assets/insta.png'
import telegram from '../assets/telegram.png'
import vk from '../assets/vk.png'
import ok from '../assets/ок.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <img className='navbar_img' src={insta} alt="" />
            <img className='navbar_img' src={telegram} alt=""/>
            <img className='navbar_img' src={vk} alt="" />
            <img className='navbar_img' src={ok} alt="" />
        </div>
    )
}

export default Navbar