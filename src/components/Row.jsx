import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css';

function Row({ title, fecthUrl,isposter }) {
    // console.log(fecthUrl);
    const[AllMovies,setAllMovies]=useState()
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fecthData=async()=>{
        const {data}= await instance.get(fecthUrl)
        // console.log(data.results);
        setAllMovies(data.results)
    }

    // console.log(AllMovies);


    useEffect(()=>{
        fecthData()
    },[])


    return (
        <div className='row'>
            <h1>
                {title}
            </h1>
            <div className='movie_row'>
                {
                    AllMovies?.map(item=>(
                        <img className={`movie ${isposter && 'movie_poster'}`} src={`${base_url}${isposter?item.poster_path:item.backdrop_path}`} alt="erroe" />
                    ))
                }
            </div>

        </div>
    )
}

export default Row