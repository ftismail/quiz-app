import { useEffect, useState } from "react";
import axios from 'axios'

axios.defaults.baseURL = "https://opentdb.com";

const UseAxios = ({url}) => {
    const[response,setResponse] = useState(null)
    const[error,setEroor] = useState('')
    const[loading,setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = ()=>{
            axios
             .get(url)
             .then(res=>setResponse(res.data))
             .catch(err=>setEroor(err))
             .finally(()=>setLoading(false))
        }
        fetchData()
    },[url])
    
    return {response,error,loading};
}

export default UseAxios;
