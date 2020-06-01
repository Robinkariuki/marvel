import {FETCH_COMICS_PENDING,FETCH_COMICS_SUCCESS,FETCH_COMICS_ERROR} from '../actions/actionTypes'

const initialState ={
    pending: false,
    comics: [],
    error: null
}




const comicsReducer =(state=initialState,action)=>{
    switch(action.type){
        case FETCH_COMICS_SUCCESS:
            return{
                ...state,
                pending:false,
                comics:action.results
            }
        case FETCH_COMICS_PENDING:
            return{
                ...state,
                pending:true
            } 
        case FETCH_COMICS_ERROR:
            return{
                ...state,
                error:action.error,
                pending:false

            } 
            default:
                return state;      
    }
}



export default comicsReducer;