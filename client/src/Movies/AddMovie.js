import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddMovie = props => {
    const [newMovie, setNewMovie] = useState({
        id: new Date(),
        title:'' ,
        director: '' ,
        metascore: '',
        stars: []
    });

/* add event handlers here */
const handleChange = e => {
    e.preventDefault();
    setNewMovie({
        ...newMovie,
        [e.target.name] : e.target.value
    });
};

const handleSubmit = e => {
    console.log('I submit');
    e.preventDefault();
    
    const starsSplitter = {
        ...newMovie,
        stars: newMovie.stars.split('', '')
    }  
    axios
    .post('http://localhost:5000/api/movies', starsSplitter, newMovie)
    .then(res => {
        console.log(res.data)
        document.querySelector('form').reset();
        props.history.push('/movie-list')
    })
    .catch(err=> console.log('I don/t work', err));
}


/**add form and export f() */

return (
    <div className='new-movie'>
        {/* <h3>Add A Movie!</h3> */}
        <form onSubmit={handleSubmit}>
           <label htmlFor='add Movie'>
              <input key={newMovie.id}
                type='text'
                name='title' 
                placeholder='Title'
                value={newMovie.title}
                onChange={handleChange}
               />  
              <input 
                type='text'
                name='director' 
                placeholder='Director'
                value={newMovie.director}
                onChange={handleChange}
               />    
              <input 
                type='text'
                name='metascore' 
                placeholder='Metascore'
                value={newMovie.metascore}
                onChange={handleChange}
               />  
             <input 
                type='text'
                name='stars' 
                placeholder='Stars'
                value={newMovie.stars}
                onChange={handleChange}
               />  
           </label>
          <button>Submit</button>            
        </form> 
        <Link to='/'>Home</Link>
    </div>
 )
}

export default AddMovie;