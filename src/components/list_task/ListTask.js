import React, {Children, useState} from 'react'
import './listtask.css'
import {useSelector, useDispatch} from 'react-redux'
import {addDone, Edit, deleteds} from '../../redux/feature/feature'
const ListTask = () => {
   const dispatch = useDispatch()
   const list = useSelector(state => state.todo.list)
   const [value, setValue] = useState()
   const [detail, setDetail] = useState()
   const [btnEdit, setBtnEdit] = useState(false)
   const [type_todo, setType_todo] = useState()
   const [describe_todo, setDescribe_todo] = useState()
   const [id_todo, setId_todo] = useState()
   const [edit, setEdit] = useState()

   const handleDone = (id) => {
      let filt = list.filter(e => e.id === id)
      setValue(filt);
      dispatch(addDone(value))
      setValue(null)
   }

   const handleDetail = (id) => {
    let filt = list.filter(e => e.id === id)
       setType_todo(filt[0].type_todo)
       setDescribe_todo(filt[0].describe_todo)
       setId_todo(id)
   }

   const handleKirimEdit = (event) => {
       event.preventDefault();
       console.log('id todo',id_todo)
       dispatch(Edit({id:id_todo, type_todo:type_todo, describe_todo:describe_todo}))
      
     }

    const handleBtnEdit = () => {
         setBtnEdit(true);
        
     }



     const handleDeleted = (id) => {
       console.log('id delete button clicked', id)
        dispatch(deleteds(id))
     }

     console.log({type_todo:type_todo, descripe_todo:describe_todo})   
    return (
        <>
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
                      <tr key={e.id}>
                          <td>{e.type_todo}</td>
                          <td>
                              <button className="btn btn-success" onClick={()=>handleDone(e.id)}>done</button>
                              <button className="btn btn-primary" onClick={() => handleDetail(e.id)} data-bs-toggle="modal" data-bs-target="#exampleModal"> detail</button>
                              <button className="btn btn-danger" onClick={() => handleDeleted(e.id)}>delete</button>
                          </td>
                      </tr>
                    ))}
                  
               </tbody>
                 
            </table>
      </div>
   



   {/* modal box */}

   <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Detail To Do</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setBtnEdit(false)}></button>
      </div>
      <div className="modal-body">
        
        <p>{type_todo}</p>
        <p>{describe_todo}</p>

        {
            btnEdit? 
            
              <form onSubmit={handleKirimEdit}>
                  <input type="text" name="id" value={id_todo} onChange={(event) => setId_todo(event.target.value)}/>
                  <input type='text' name='type_todo' value={type_todo}  className="form-control" placeholder='Edit tipe todo' onChange={(event) => setType_todo(event.target.value)} />
                  <input type='text' name='describe_todo' value={describe_todo} className="form-control mt-3" placeholder='Edit tipe todo' onChange={(event) => setDescribe_todo(event.target.value)} />
                  <button type='submit' className="btn btn-warning mt-3">Kirim!</button>
              </form>
              : false
        }
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setBtnEdit(false)}>Close</button>
        <button type="button" className="btn btn-primary" onClick={handleBtnEdit}>Edit</button>
      </div>
    </div>
  </div>
</div>
      </>
    )
}

export default ListTask
