import React from 'react';
import Home from './component/home/home';
import { connect } from 'react-redux';

const App=()=>{
    console.log(this.props.characters)
    return(<div>
        <Home/>
    </div>)
}





const mapStateToProps=state=>({
    characters:state.results
})

export default connect(mapStateToProps)(App)