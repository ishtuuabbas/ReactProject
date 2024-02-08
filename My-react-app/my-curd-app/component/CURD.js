import React, { useRef, useState } from 'react'
import './CURD.css'
function CURD(){
    
        const list=[
            {
                id:1,
                MedicineName:"Xanax",
                Tablet:"0.5 mg",
                Composition:"Alprazolam",
                Price:"3,500"
            },
            {
                id:2,
                MedicineName:"Nuxam",
                Tablet:"40 mg",
                Composition:": Getz Pharma (PVT) LTD",
                Price:"461"
            },
            {
                id:3,
                MedicineName:"",
                Tablet:"100 mg",
                Composition:"140",
                Price:"140"
            },
            
        ]
        const[lists, setList]= useState(list)
        const[updateState,setUpdateState]=useState(-1)
        return(
            <div className="curd">
              
              <div>
                  <AddList setList={setList}/>
              <form onSubmit={handleSubmit}>
            <table>
            {
                lists.map((current)=>(
                    updateState===current.id ? <EditList  current={current} lists={lists} setList={setList} />: 
                
                        
                    <tr>
                    <td>{current.MedicineName}</td>
                    <td>{current.Price}</td>
                    <td>
                        <button className='edit' onClick={()=> handleEdit(current.id)} >Edit</button>
                        <button className='delete' type="button" onClick={() =>  handleDelete(current.id)}>Delete</button>
                    </td>
                 
                    </tr>
                ))
            }
            </table>
         </form>
            </div>
        </div>
        )

function handleEdit(id){
    setUpdateState(id)
}

function handleDelete(id){
    const newlist = lists.filter((li)=> li.id !== id)
    setList(newlist)
}
function handleSubmit(event){
    event.preventDefault()
    const name= event.target.elements.MedicineName.value
    const price= event.target.elements.Price.value
    const newlist=lists.map((li) => (
        li.id === updateState? {...li, MedicineName:name, Price:price} : li
    ))
    setList(newlist)
    setUpdateState(-1)
}
}

function EditList({current,lists,setList}){
    function handInputname(event){
        const value = event.target.value;
        const newlist=lists.map((li)=>(
            li.id===current.id ?{...li,MedicineName:value}:li
        ))
        setList(newlist)
    }
     function handInputprice(event){
        const value =event.target.value;
        const newlist=lists.map((li)=>(
            li.id===current.id ?{...li, Price:value}:li
        ))
        setList(newlist)
    }
    return(
        <tr>
            <td><input type="text" onChange={handInputname} name="Medicine Name"  value={current.MedicineName}/></td>
            <td><input type="text"onChange={handInputprice} name="Price" value={current.Price}/></td>
            <td><button type="submit">Update</button></td>
        
        </tr>
    )
}


function AddList({setList}){

    const MNameRef=useRef();
    const priceRef=useRef();

    function handleSubmit(event){
        event.preventDefault();
        const MedicineName=event.target.elements.MedicineName.value;
        const Price=event.target.elements.Price.value;
         const newlist={
            id:3,
            MedicineName, 
            Price
         }
    setList((prevList)=>{
        return prevList.concat(newlist)
    })
    MNameRef.current.value=""
    priceRef.current.value=""
 
    }
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input type="text" name="Medicine Name" placeholder="Enter Medicine Name" ref={MNameRef}/>
            <input type="text" name="Price" placeholder="Enter Price"ref={priceRef}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default CURD;
                     