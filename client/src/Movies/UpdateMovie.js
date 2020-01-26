import React, { useState } from 'react'
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input,  } from 'reactstrap';
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
            .put(`http://localhost:5000/api/movies/${props.id}`, starsSplitter)
            .then(res => {
            console.log(res.data);
            document.querySelector('form').reset();
            props.history.push('/');
        })  
            .catch(err => console.log(err));
       }
        
        return (
            <div className='form'>
             <Form  onSubmit={handleSubmit}>
               <FormGroup>
                  <Label htmlFor='title'></Label>
                   <Input style={formStyle}
                     type='text'
                     name='title'
                     placeholder='Title'
                     onChange={handleChange}
                     value={movie.title}
                    /><br />
                 </FormGroup>
                 <FormGroup> 
                   <label htmlFor='director'></label>
                    <Input style={formStyle}
                     type='text'
                     name='director'
                     placeholder='Director'
                     onChange={handleChange}
                     value={movie.director}
                    /><br />
                  </FormGroup> 
                  <FormGroup>    
                    <label htmlFor='metascore'></label>
                     <Input style={formStyle}
                     type='text'
                     name='metascore'
                     placeholder='Metascore'
                     onChange={handleChange}
                     value={movie.metascore}
                    /><br />
                  </FormGroup> 
                  <FormGroup> 
                    <label htmlFor='stars'></label>
                     <Input style={formStyle}
                     type='text'
                     name='stars'
                     placeholder='Starring'
                     onChange={handleChange}
                     value={movie.stars}
                    /><br />
                  </FormGroup>  
                  <Button className='update-button'>Update!</Button>  
               </Form><br />
             </div> 
            )
         }


export default UpdateMovie;



