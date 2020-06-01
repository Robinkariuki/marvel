import {FETCH_COMICS_PENDING,FETCH_COMICS_SUCCESS,FETCH_COMICS_ERROR} from './actionTypes'
import  {Base_url,api_key,ts,hash} from '../marvelConfig';

export const fetchPending=()=>{
    return{
        type : FETCH_COMICS_PENDING,
        
    }
}


export const fetchSucessComics =(Comics)=>{
    return{
        type : FETCH_COMICS_SUCCESS,
        Comics
    }
}

export const fetchError =(error)=>{
    return{
        type : FETCH_COMICS_ERROR,
        error
    }
}




function fetchComics(){
    return dispatch=>{
        dispatch(fetchPending());
        fetch(`${Base_url}?ts=${ts}&apikey=${api_key}&hash=${hash}`)
        .then(res=>res.json())
        .then(results=> {
            if(results.error){
                throw(results.error);
            }
            dispatch(fetchSucessComics(results.data.results));
            return results.data.results;
        })
        .catch(error=>{
            dispatch(fetchError(error));
            
        })
    }
}

export default fetchComics;

