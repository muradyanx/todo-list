import { useRef, useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import './style.css'
 



const First = () => {
    const [list, setList] =  useState(JSON.parse(localStorage.getItem('list')) || []);
    const myRef = useRef('');
    const [text, setText] = useState('')


    

    function setTodos(){
        setList([...list, myRef.current.value]);
    
        setText('Your article was successfully added!')

        setTimeout(() => {
            setText('')
        }, 800)
        }

 
        useEffect(() => {
            // debugger
            localStorage.setItem('list', JSON.stringify(list));       
            myRef.current.value = '';

        }, [list])

        
    return(
        <div className='position'> 
        

           <p className="text"> {text} </p>
           
             <textarea  ref={myRef} className='textarea' placeholder=" ..."/> 
             <div className="btns">
             <button onClick={setTodos} className="btn"> <div className="remove-secnd add"></div> </button>
         <Link to='/' className="home-link">
         <button className="btn"> <div className="remove-secnd home"></div> </button>
        </Link>
             </div>
       
           
            
         
       


        </div>
    )

}

export default First;