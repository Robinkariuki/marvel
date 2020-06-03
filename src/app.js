import React from 'react';
import Home from './component/home/home';
import { connect } from 'react-redux';


const App=(props)=>{
    console.log(props.state)
    return(<div>
        <Home state={props.state}/>
    </div>)
}





const mapStateToProps=state=>({
    state
})

export default connect(mapStateToProps)(App)