import React,{Component} from 'react';
import Navbar from '../navbar/navbar';
import Search from '../search/seacrh';

class Home extends Component{
    render(){
        return(<div>
            <Navbar/>
            <Search/>
        </div>
        )
    }
}


export default Home