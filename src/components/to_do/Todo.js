import React from 'react'
import './todo.css'
const Todo = () => {
    return (
        <div class="card">
            <div class="card-body">
                <h4>Todo form</h4>
               <form>
                   <input type="text" class="form-control mb-2" placeholder="nama" />
                   <input type="text" class="form-control mb-2"  placeholder="sekolah" /> 
                   <button class="btn btn-primary" type="submit">Submit</button>
               </form>
            </div>
        </div>
    )
}

export default Todo
