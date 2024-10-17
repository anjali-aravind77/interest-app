import React from 'react'
//rafce
const Company = () => {
    const allEmp = [
        {name:"anjali",designation:"developer",salary:590000},
        {name:"aravind",designation:"programmer",salary:875666},
        {name:"arun",designation:"developer",salary:2122220},
        {name:"boom",designation:"developer",salary:56322}
    ]
  return (
    <div>
<h1 className="my-5 text-center text-danger">
    employee details
</h1>
<table className="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Salary</th>
            
        </tr>
    </thead>
    <tbody>{
        allEmp.map((obj,index)=>(
            <tr key={obj.name}>
        <td className='text-warning'>{index+1}</td>
        <td className='text-danger'>{obj.name}</td>
        <td className='text-success'>{obj.designation}</td>
        <td className='text-success'>{obj.salary}</td>
    </tr>

        ))
        }
        
    
    </tbody>
   
</table>

    </div>
  )
}

export default Company