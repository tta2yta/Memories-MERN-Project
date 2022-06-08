import * as api from '../api'

//action creators

export const getposts= ()=> async(dispatch)=>{
    try{
        const {data}= await api.fetchPosts();
        console.log(data)
        dispatch({type:'FETCH_ALL', payload:data})

    }catch(error){
        console.log(error.message)
    }
}