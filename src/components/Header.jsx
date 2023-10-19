import React from 'react'
import '../components/Header.css';
import photo from '../assets/photo_2023.jpg'

const Header = () => {
  return (
    <div className="header">
        <div className='header_left'>
            <img src={photo} alt="" />
            <h2>Azat Zhanybek uulu</h2>
            <p>Frontent developer</p>
        </div>
        <div className='header_right'>
            <h1>Azat Zhanybek uulu</h1>
            <p>Frontend developer</p>
            <div className="header_menu">
                <div className="head_menu_left">
                    <div className="head_left_item">
                        <h5>Date</h5>
                        <p>25.08.1992</p>
                    </div>
                    <div className="head_left_item">
                        <h5>Address</h5>
                        <p>Bishkek, st.Sary-Uchkun, 19</p>
                    </div>
                    <div className="head_left_item">
                        <h5>Email</h5>
                        <p>azatjanibekov92@gmail.com</p>
                    </div>
                </div>
                <div className="head_menu_right">
                    <div className="head_right_item">
                        <h5>Mobile</h5>
                        <p>(+996) 507215657</p>
                    </div>
                    <div className="head_right_item">
                        <h5>Nationality</h5>
                        <p>Kyrgyz</p>
                    </div>
                    <div className="head_right_item">
                        <h5>Marital status</h5>
                        <p>Married</p>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Header