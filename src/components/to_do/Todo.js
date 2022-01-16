import React, {useState} from 'react'
import './todo.css'
import {useDispatch, useSelector } from 'react-redux'
import {add} from '../../redux/feature/feature'

const Todo = () => {
 
    const dispatch = useDispatch();
    const index = useSelector(state => state.todo.list)
    const [input, setInput] = useState({
        type_todo:'',
        describe_todo:'',
    })


  const handleChange= (e) => {
     let nilai = e.target.value;
     let typeOfNama = e.target.name;
     setInput({...input, [typeOfNama]: nilai })
  }
    
    const handleSubmit = (e) => {
         e.preventDefault();
         let i = index.length;

         dispatch(add({id:i+1, ...input}))

         setInput({
             type_todo:null,
             describe_todo:null
         })
    }

    console.log(index)
    
    return (
        <div className="card">
            <div className="card-body">
                <h4>Todo form</h4>
               <form onSubmit={handleSubmit}>
                   <input type="text" className="form-control mb-2" name="type_todo" value={input.nama} onChange={handleChange} placeholder="type todo" />
                   <input type="text" className="form-control mb-2" name="describe_todo" value={input.sekolah} onChange={handleChange}  placeholder="describe todo" /> 
                   <button className="btn btn-primary" type="submit">Submit</button>
               </form>
            </div>
        </div>
    )
}

export default Todo
