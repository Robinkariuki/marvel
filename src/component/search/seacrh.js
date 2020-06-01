import React,{Component} from 'react';


class Search extends Component{
    render(){
        return(<div><form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
        <i className="fas fa-search" aria-hidden="true"></i>
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
          aria-label="Search"></input>
      </form></div>
        )
    }
}


export default Search