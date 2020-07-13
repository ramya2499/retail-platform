import React from 'react'
import './menu-item.styles.scss'
import { Route,withRouter } from 'react-router-dom'
import CategoryPage from '../../pages/category-page/category-page.component'



const MenuItem = ({groupId,imageUrl,history,match}) => (
  
    <div  className ={`$ menu-item`} onClick={()=>history.push(`${match.url}${groupId}`)}>         
        <div className='background-image' style ={{backgroundImage:`url(${imageUrl})`}}/>
        <div className='content'>
            <h1 className='title'>{groupId.toUpperCase()}</h1>
            <span className='sub-title'>SHOP NOW</span>
        </div>  
    </div>
)

export default withRouter(MenuItem);