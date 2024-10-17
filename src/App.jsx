import Employee from './Employee'
import './App.css'
import Company from './Company'
import MyCar from './MyCar'
import { useEffect, useRef, useState } from 'react'
import Counter from './Counter'
import Todo from './Todo'


function App() {

const [username, setUsername] = useState("")


  const empName = 'max miller'
  //const empstatus = 'active'
const dispalyData = (data) => {
alert(`data from app component ${data}`)
}

//useref hook
const inputRef= useRef(null)
useEffect(()=>{
  inputRef.current.focus()
},[])



const ref = useRef(0)
const showData = ()=>{
  ref.current = ref.current++
  alert('you clicked '+ref.current+' times')
}



const getUserName = (tag) => {
console.log(typeof tag, tag.value)
setUsername(tag.value)
}
  
  return (
    <>
    <Todo/>
    <div style={{backgroundColor:'black'}}>
      <h1 style={{textAlign:'center',color:'greenyellow'}}>Demo Project</h1>
      <Counter/>
      <div className="text-center">
        <button className='btn btn-warning' onClick={showData}>click me</button>
      <button className='btn btn-success' onClick={()=>dispalyData(empName)}>Show alert with Data</button>
      </div>
      <h5 style={{textAlign:'left', color:'yellowgreen',marginLeft:'15px'}}>Inside App Component: {empName}</h5>
      <div className="w-50 m-5">
        <input ref={inputRef} type="text" placeholder='enter your name here' className='form-control' onChange={(ev)=> getUserName(ev.target)} />

        <h3>user input is : <span>{username}</span></h3>
      </div>
    
      <Employee dtaFrmParent={empName} stringData="designation" empstatusname  />   
      <Company />
      <MyCar />
      </div>
    </>
  )
}

export default App
