import React,{Component} from 'react';
import {image_size} from '../../store/marvelConfig'
import './grid.css'
class Grid extends Component{
    
    render(){

          
        const paths = this.props.characters.map((element,i)=>{
            return `${element.thumbnail.path}/${image_size}`
       })
        
        const thumbnails = paths.map((path,i)=>{
            return path

        })

        


      const gridImages = thumbnails.map((item,i)=>{

        return <div className='card' key={i}>
                
                    <div className="view overlay">
                    <img  className="card-img-top" src={item}></img>
                       <a>
                         <div className="mask rgba-white-slight"></div>
                         </a>
                           <div className="card-body">

                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                                                                    card's content.</p>
                                <button type="button" className="btn btn-light-blue btn-md">Read more</button>
                        </div>
                    </div>
             </div>

      })
  
        console.log(thumbnails)


        
        return(

        <div className='container'>
          
           {gridImages}





           </div>
        
        
        )
    }
}


export default Grid