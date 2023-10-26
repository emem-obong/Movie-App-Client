import React from 'react'
import MovieCarousel from './MovieCarousel';

const Trending = ({data, error, loading, updateUI}) => {



    console.log(data);

    if(loading){
        return <p>Loading...</p>
    }
    if (error){
        return <p>{error}</p>
    }
  return (
    <div>
        <MovieCarousel data={data} updateUI={updateUI}/>
    </div>
  )
}

export default Trending