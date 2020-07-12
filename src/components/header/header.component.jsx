import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom'
import image from '../../assets/alpha.png'


export const Header = () => (
    <div className='header'>
        <Link to="/" className='logo-conainer'>
            <img src={image} alt="logo" style={{height:"50px",marginLeft:"70px" }}/>           
        </Link>
        <div className='options'>
        <Link to="/shop" className="option"><b>SHOP</b></Link>
        <Link to="/contact" className="option"><b>CONTACT</b></Link>
        <Link to="/aboutus" className="option"><b>ABOUT US</b></Link>
        <Link to="/cart" className="option icon"><i class="fa fa-shopping-cart"></i></Link>
        <Link to="/profile" className="option" ><i class="fa fa-user"></i></Link> 
        <Link to="/wishlist" className="option"><i class="fa fa-heart"></i></Link>
        <Link to="/signup" className="option"><b>SIGNUP/LOGIN</b></Link>
        
        </div>    
    </div>  
)