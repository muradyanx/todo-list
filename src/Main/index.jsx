
import React from 'react';
import Remove from "../Remove";
import './style.css';
import {Link} from 'react-router-dom'
import First from '../First' ;
import {useState} from 'react'

function Main() {
const str = 'Seems you have no todo list yet...';
const [arr, setArr] = useState(JSON.parse(localStorage.getItem('list')) || []);

const removed = () => {
  setArr(JSON.parse(localStorage.getItem('list')) || []);
}

 
  const Todos = () => { 
   return  arr ? arr.map((el, index) => {return <section className='item' key={index}>
                        <p className='article'> {el} </p>
                        <div className='remove-edit'>
          
                        <Link to={'/edit?id=' + index}><button className='btn' > <div className='edit-secnd'></div> </button></Link>
                        <Remove index={index} removed={removed}/>
                        </div>
                        </section>}): str
  }

  

  return (
    <div className='main'>     
  
     
    <Link to='/add'>
        <button className='button'> Add Your Todos </button> 
    </Link>
    
      <div className='todos'>
        {Todos()}
     
         
        
      </div>
      
      

    </div>
  );
}

export default Main;
