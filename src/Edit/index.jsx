import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import './style.css';

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

const Edit = (props) => {
    const query = useQuery();
    
    const id = +query.get('id');

    const todos = JSON.parse(localStorage.getItem('list'));
 
    const [value, setValue] = useState(todos[id])

    function edit(){

         todos[id] = value;
        localStorage.setItem("list", JSON.stringify(todos))
        
    }
    return(
        <div className='position'>
            <textarea className="textarea" value={value} onChange={(evt) => {setValue(evt.target.value); todos[id] = evt.target.value}}>
                
            </textarea> 
           <div className="btns">
               <button onClick={edit} className='btn' > <div className="remove-secnd add"></div> </button>
               <Link to='/' ><button className="btn"> <div className="remove-secnd home"></div> </button></Link>
            </div>
        </div>
    );
}

export default Edit;