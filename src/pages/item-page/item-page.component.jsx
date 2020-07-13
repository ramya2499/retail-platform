import React from 'react'
import productService from '../../services/product-service'
import ItemCard from './item-card.component'
import './item-page.styles.scss'

class ItemPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          categoryId:'',
            items: []                   
        }
    }

    componentDidMount(){

       this.setState({categoryId:this.props.match.params.categoryId},
        ()=>(
          productService.getItemsByCategoryId(this.state.categoryId)
          .then(response => {
            this.setState({
              items: response.data
            });
           
          })
          .catch(e => {
            console.log(e);
          })
        ))
    
    }

    render () {        
        
        console.log(this.state.items)
        return (
            <center>
            <div className='collection-preview'>          
              <div className="title">{this.state.categoryId.toUpperCase()}</div>     
                <div className='preview'>
                { this.state.items.map(item=>(
                  <ItemCard key={item.itemId} itemId={item.itemId} imageUrl={item.imageUrl} brand={item.brand}/>
                  ))
                  }
                </div>        
            </div>
            </center>
     
                // <center>      
                // {
                // this.state.items.map(item=>(
                // <div>{item.brand}</div>))
                // }         
                // </center>
        )

    }
}
export default ItemPage;
