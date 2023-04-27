import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import loader from "../assets/loader.gif"

function FetchData(props) {

  const [data, setData] = useState("")

    const feacthData = async ()=>{
        await axios.get(props.cat ? `https://newsapi.org/v2/top-headlines?country=us&category=${props.cat}&apiKey=5fb2b334fda64d86b6d756c5062dedcb`
         : "https://newsapi.org/v2/top-headlines?country=us&apiKey=5fb2b334fda64d86b6d756c5062dedcb")
        .then((res) => setData(res.data.articles))
        .catch((err)=> console.log(err))
    }

    useEffect(() => {
      setTimeout(()=>{
        feacthData() 
      },1500)
    },[])
    
    

  return (
    <div className='container my-4'>
        <h2>TOP HEADLINES</h2>
        <div className='my-2 container d-flex  justify-content-start align-items-start flex-wrap  mt-1'>{data ? data.map((items)=>
             
             <>
             <div className="card border border-primary mt-3 mb-3 ml-4" style={{width : "20rem", height :"34rem" }} >
               
                    <img  src={items.urlToImage} className="card-img-top" alt="..." style={{ height : "11rem" }} />
                 
                 <div className="card-body">
                     <h5 className="card-title">{items.title}</h5>
                     <p className="card-text">{items.content}</p>
                     <Link to={items.url} target="_blank" className="btn btn-primary">Go somewhere</Link>
                 </div>
              </div>
              </>

               ) :<img src={loader} style={{width : "38vw" , marginLeft: " 20vw"}}  alt="Loading..."   />}
              
         </div>
    </div>
    
  )
}

export default FetchData