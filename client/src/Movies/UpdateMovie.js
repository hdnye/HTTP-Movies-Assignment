import React, { useState } from 'react'
import axios from 'axios';

const formStyle = {
    background: 'lightskyblue',
    
};

const UpdateMovie = props =>  {
    const [movie, setMovie] = useState({
        id: '',
        title: '',
        director: '',
        metascore: '',
        stars: ''
    });
  
   
    const handleChange = e => {
        e.preventDefault();
        setMovie({
            ...movie,
            [e.target.name] : e.target.value
        });
        console.log(movie);
      } 
      

    const handleSubmit = e => {
        e.preventDefault();

        const starsSplitter = {
            ...movie,
            stars: movie.stars.split('', ''),
        }  
        axios
            .put(`https://localhost:5000/api/movies/${movie.id}`, starsSplitter)
            .then(res => {
            console.log(res.data);
            document.querySelector('form').reset();
            props.history.push('/');
        })  
            .catch(err => console.log(err));
       }
        
        return (
            <div className='form'>
             <form  onSubmit={handleSubmit}>
                  <label htmlFor='title'></label>
                   <input style={formStyle}
                     type='text'
                     name='title'
                     placeholder='Title'
                     onChange={handleChange}
                     value={movie.title}
                    /><br />
                   
                   <label htmlFor='director'></label>
                    <input style={formStyle}
                     type='text'
                     name='director'
                     placeholder='Director'
                     onChange={handleChange}
                     value={movie.director}
                    /><br />
                    
                    <label htmlFor='metascore'></label>
                     <input style={formStyle}
                     type='text'
                     name='metascore'
                     placeholder='Metascore'
                     onChange={handleChange}
                     value={movie.metascore}
                    /><br />
                  
                    <label htmlFor='stars'></label>
                     <input style={formStyle}
                     type='text'
                     name='stars'
                     placeholder='Starring'
                     onChange={handleChange}
                     value={movie.stars}
                    /><br />
                   
                  <button className='update-button'>Update!</button>  
               </form><br />
             </div> 
            )
         }


export default UpdateMovie;



