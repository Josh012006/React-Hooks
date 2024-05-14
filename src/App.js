import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';
import AddForm from './AddForm';
import importedMovies from './movies';
import { useState } from 'react';


function App() {

  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [movies, setMovies] = useState(importedMovies);


  const usedMovies = movies.filter(
    j => {
      const object = JSON.parse(j);

      if(title !== '' || rating !== '' ) {
        return (object.title.toLowerCase().includes(title.toLowerCase()) && object.rating > Number(rating));
      }
      return true;
    }
  );


  return (
    <div className="App">
      <Filter Title = {title} Rating = {rating} SetTitle = {setTitle} SetRating = {setRating}></Filter>
      <div className='container'>
        <div className='row'>
          <MovieList MoviesTable = {usedMovies} className = "row"></MovieList>
        </div>
      </div>
      <span id = "line"></span>
      <AddForm SetMovies={setMovies}></AddForm>
    </div>
  );
}

export default App;
