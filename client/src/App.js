import React, { useState } from "react";
import { Route, NavLink } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from './Movies/UpdateMovie';
import AddMovie from './Movies/AddMovie';
// import axios from 'axios';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [addMovie, setAddMovie] = useState({});

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const addNewMovie = movie => {
    setAddMovie({...addMovie, movie});
  }
   
  return (
    <>
      <SavedList list={savedList} />
      <NavLink exact to='/add-movie'>Add A Movie</NavLink>
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} addNewMovie={addNewMovie} />;
        }}
       />
       <Route 
         path='/update-movies/:id' component={UpdateMovie} />;
       <Route path='/add-movie' component={AddMovie} />
       </>
    );
};

export default App;
