import React, {useState} from 'react'
import './todo.css'
import {useDispatch, useSelector } from 'react-redux'
import {add} from '../../redux/feature/feature'

const Todo = () => {
 
    const dispatch = useDispatch();
    const index = useSelector(state => state.todo.list)
    const [input, setInput] = useState({
        nama:'',
        sekolah:''
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
    }

    console.log(index)
    
    return (
        <div className="card">
            <div className="card-body">
                <h4>Todo form</h4>
               <form onSubmit={handleSubmit}>
                   <input type="text" className="form-control mb-2" name="nama" value={input.nama} onChange={handleChange} placeholder="nama" />
                   <input type="text" className="form-control mb-2" name="sekolah" value={input.sekolah} onChange={handleChange}  placeholder="sekolah" /> 
                   <button className="btn btn-primary" type="submit">Submit</button>
               </form>
            </div>
        </div>
    )
}

export default Todo
