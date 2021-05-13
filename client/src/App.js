import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [movieName, setMovieName] = useState("");
  const [review, setMovieReview]  = useState("");
  const [movieReviewList, setMovieReviewList] = useState([]);

  const [newReview, setNewReview] = useState("");

  useEffect (()=>{
  axios.get("http://localhost:3001/api/get").then((response) => {
  // console.log(response.data)
  setMovieReviewList(response.data);
  })
  },[])

   const deleteReview = (movie) =>{
     axios.delete(`http://localhost:3001/api/delete/${movie}`);
     setMovieReviewList([...movieReviewList,
      {movieName: movieName, movieReview: review},
    ]);
   } 

   const updateReview = (movie) =>{
    axios.put(`http://localhost:3001/api/update`);
    setMovieReviewList([...movieReviewList,
     {name: movieName, movieReview: review},
   ]);
  } 

  const submitReview = ( ) =>{
    axios.post("http://localhost:3001/api/insert", {
      movieName:movieName, 
      movieReview:review
    })
    setMovieReviewList([...movieReviewList,
      {movieName: movieName, movieReview: review},
    ]);
  };

  return (
    <div className="App">
      <h1>Crud App</h1>
      <div className="form">
          <label>Movie Name</label>
          <input type="text" name="movie" onChange={(e)=>{
              setMovieName(e.target.value);
          }} />
          <label>Review</label>
          <input type="text" name="review"  onChange={(e) => {
            setMovieReview(e.target.value);
          }} />
          <button onClick={submitReview}>Submit</button>

          {movieReviewList.map(value =>{
            return <>
              <div className="card">
            <h1> {value.movieName} </h1>
            <p>{value.movieReview}</p>

            <button  onClick={() => {deleteReview(value.movieName)}}>delete</button>
            <input type="text" id="updateInput"/>
            <button>update</button>
              </div>
              </>
          })}
      </div>
    </div>
  );
}

export default App;
