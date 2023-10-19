import React from 'react'
import '../components/Content.css'
import school from '../assets/school.png'
import univer01 from '../assets/univer01.png'
import univer02 from '../assets/univer02.png'
import gazprom from '../assets/gazprom.png'
import sberm from '../assets/sberm.png'

const Content = () => {
  return (
    <div className='content'>
        <h2 className="content_title">About us</h2>
            <div className="content_menu">
                <div className="content_menu_items">
                    <h4>1999-2008</h4>
                    <img className="content_items_img" src={school} alt="error"/>
                    <p>Secondary School 82</p>
                </div>
                <div className="content_menu_items">
                    <h4>2008-2011</h4>
                    <img className="content_items_img" src={univer01} alt="error"/>
                    <p>College of Economics and Service</p>
                </div>
                <div className="content_menu_items">
                    <h4>2011-2015</h4>
                    <img className="content_items_img" src={univer02} alt="error"/>
                    <p>Kyrgyz University of Economics</p>
                </div>
                <div className="content_menu_items">
                    <h4>2015-2020</h4>
                    <img className="content_items_img" src={gazprom} alt="error"/>
                    <p>Gazprom Neft Asia</p>
                </div>
                <div className="content_menu_items">
                    <h4>2020-2023</h4>
                    <img className="content_items_img" src={sberm} alt="error"/>
                    <p>Online Store Sbermarket</p>
                </div>
            </div>
    </div>
  )
}

export default Content