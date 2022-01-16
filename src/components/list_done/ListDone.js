import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {cancel} from '../../redux/feature/feature'
const ListDone = () => {
    
    const dones = useSelector(state => state.todo.done)
    const dispatch = useDispatch()
    
    console.log(dones)
    return (
        <div className="card" style={{width:'30rem'}}>
        <div className="card-header">
          <h4>Tugas Selesai</h4>
        </div>
           <table className="table">
               <tbody>
                   
                       {
                           dones.map((doneItem) => (
                               <tr key={doneItem.id}>
                                   <td>{doneItem.type_todo}</td>
                                   <td>
                                       <button className="btn btn-danger" onClick={() => dispatch(cancel(doneItem.id))}>cancel</button>
                                   </td>
                               </tr>
                           ))
                       }
                   
               </tbody>
           </table>
      </div>
    )
}

export default ListDone
