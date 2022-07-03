import './style.css';
import Main from '../Main';

const Remove = (props) => {
 
 const todolist = JSON.parse(localStorage.getItem('list'));

 
    function removeItem(){      
        todolist.splice(props.index, 1);  
         localStorage.setItem("list", JSON.stringify(todolist))
         props.removed();
     
    }

    return(
        <div>
            <button className='btn' onClick={removeItem}> <div className='remove-secnd'></div> </button>
        </div>
    );
}

export default Remove;