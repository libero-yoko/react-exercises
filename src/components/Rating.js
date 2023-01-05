import styles from '../styles/Rating.module.css';
import {movies} from '../constants/movies';
import * as React from 'react';
import {useState} from 'react';

export default function Rating(){

  return(
    <>
      <h1>Rate Movies
    </h1>
    {movies?.map(movie => {
      return(
      <div className={styles.container}>
        <h2>{movie?.title}({movie?.year})</h2>
        <Stars/>
      </div>)
    }
    )}
     </>
  )
}

function Stars(){
  const [rate, setRate] = useState(0)
  const stars = [1,2,3,4,5];
  return (
    <>
      {stars.map((star, index) => {
        let style = star <= rate ? styles.rated : styles.star
       return(<span className={style} onClick={()=>setRate(index+1)}>
          ★
        </span>)
      })}
    </>
  )
}