import React from 'react'
import './listtask.css'
import {useSelector} from 'react-redux'
const ListTask = () => {


   const list = useSelector(state => state.todo.list)



    return (
        <div className="card" style={{width:'30rem'}}>
        <div className="card-header">
           <div style={{paddingLeft:'6px', paddingRight:'6px'}}>
               <h4>list task</h4>
           </div>
           <div style={{paddingLeft:'6px', paddingRight:'6px'}}>
               <h6>action</h6>
           </div>
      </div>
       

           <table className="table">
                <tbody>
                    {list.map(e => (
                      <tr>
                          <td>{e.type_todo}</td>
                          <td>
                              <button className="btn btn-success">done</button>
                              <button className="btn btn-primary">detail</button>
                              <button className="btn btn-danger">delete</button>
                              
                             
                          </td>
                      </tr>
                    ))}
                  
               </tbody>
                 
            </table>
      </div>
    )
}

export default ListTask
