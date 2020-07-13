import React from 'react'
import './item-card.styles.scss'
import {withRouter} from 'react-router-dom'

const CategoryItem = ({categoryId,imageUrl,brand,history,match}) => (
    
    <div className='collection-item'>
         <div className='image' 
        style={{backgroundImage:`url(${imageUrl})`}}
        />
        <div className='collection-footer'>
            <div className='name'>{brand}</div>
        </div>
    </div>
 
)
export default withRouter(CategoryItem);