import {FETCH_COMICS_PENDING,FETCH_COMICS_SUCCESS,FETCH_COMICS_ERROR} from './actionTypes'
import  {Base_url,api_key,ts,hash} from '../marvelConfig';

export const fetchPending=()=>{
    return{
        type : FETCH_COMICS_PENDING,
        Comics
    }
}


export const fetchComics =(Comics)=>{
    return{
        type : FETCH_COMICS_SUCCESS,
        Comics
    }
}

export const fetchError =(Error)=>{
    return{
        type : FETCH_COMICS_ERROR,
        Error
    }
}




function fetchComics(){
    return dispatch=>{
        dispatch(fetchComicsPending());
        fetch(`${Base_url}?ts=${ts}&apikey=${api_key}&hash=${hash}`)
        .then(res=>res.json())
        .then(comics=> {
            if(comics.error){
                throw(comics.error);
            }
            dispatch(fetchComicsSuccess(comics.data.results));
            return comics.data.results;
        })
        .catch(error=>{
            dispatch(fetchComicsError(error));
            
        })
    }
}

export default fetchComics;

