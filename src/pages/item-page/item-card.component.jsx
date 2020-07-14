import React from 'react'
import './item-card.styles.scss'
import {withRouter} from 'react-router-dom'

const CategoryItem = ({categoryId,groupId,imageUrl,brand,price,bookTitle,history,match}) => (    
    <div className='collection-item'>
         <div className='image-item' 
        style={{backgroundImage:`url(${imageUrl})`}}
        />
        <div className='collection-footer'> 
        {console.log(groupId,imageUrl,brand,price,bookTitle)}          
           {groupId==='book'?<div className='name'>{bookTitle}</div>:<div className='name'>{brand}</div>}
            <div className='price'>Rs.{price}</div>
        </div>
    </div>
 
)
export default withRouter(CategoryItem);