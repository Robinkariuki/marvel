import React,{Component} from 'react';
import Navbar from '../navbar/navbar';
import Search from '../search/seacrh';
import fetchCharacters from '../../store/actions/actions'
import {connect} from 'react-redux'
class Home extends Component{
     
    componentDidMount(){
        this.props.characters()
    }

    render(){
        return(<div>
            <Navbar/>
            <Search/>
        </div>
        )
    }
}



const mapDispatchToprops = dispatch=>{
    return{
        characters:()=>dispatch(fetchCharacters()),
            
    }
}

export default connect(null,mapDispatchToprops)(Home);
