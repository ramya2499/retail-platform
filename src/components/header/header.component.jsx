import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom'
import image from '../../assets/alpha.png'


export const Header = () => (
    <div className='header'>
        <Link to="/" className='logo-conainer'>
            <img src={image} alt="logo" style={{height:"70px",marginLeft:"70px" }}/>           
        </Link>
        <div className='options'>
        <Link to="/shop" className="option">SHOP</Link>
        <Link to="/contact" className="option">CONTACT</Link>
        <Link to="/about" className="option">ABOUT</Link>
        <Link to="/profile" className="option">PROFILE</Link>    
        <Link to="/cart" className="option icon"><i class="fa fa-shopping-cart"></i></Link>
        <Link to="/profile" className="option" ><i class="fa fa-user"></i></Link> 
        <Link to="/wishlist" className="option"><i class="fa fa-heart"></i></Link> 
        
     
    
        </div>
 
        
        
    </div>
)
