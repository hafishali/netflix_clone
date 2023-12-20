import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance';




function Banner({fecthUrl}) {
//   console.log(fetchUrl);
const [Movie , setMovie]=useState()
const base_url = "https://image.tmdb.org/t/p/original/";


const fetchData = async ()=>{
const {data} = await instance.get(fecthUrl)
setMovie(data.results[Math.floor(Math.random()*data.results.length)]);

 }
 console.log(Movie);

 useEffect(()=>{
fetchData()

 },[])




  return (
    <div style={{height:'600px',backgroundImage:`url(${base_url}${Movie?.backdrop_path})`,backgroundAttachment:'fixed',backgroundPosition:'center',backgroundSize:'cover'}}>
        <div className='banner-content'>
            <h1 className='mb-3'>{Movie?.name}</h1>
            <button type="button" class="btn btn-danger">Play <i class="fa-solid fa-play" style={{color:' #eaeaeb' }}></i></button>
            <button type="button" class="btn  ms-4 more">More info<i class="fa-solid fa-play fa-rotate-90"></i></button>
            <h2>{Movie?.overview?.slice(0,200)}...</h2>
        </div>
    </div>
    
  )
}

export default Banner