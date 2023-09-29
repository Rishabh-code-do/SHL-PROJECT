import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Create.css'

function Create() {
  const navigate = useNavigate();

  const[Title,setTitle]=useState("")
  const[Tech,setTech]=useState("")
  const[Frontend,setFrontend]=useState("")
  const[Backend,setBackend]=useState("")
  const[Db,setdb]=useState("")
  const[Infrastructre,setInfrastructure]=useState("")
  const[Availability,setAvailability]=useState("")

  const addNewProject = async () => {
    let formField = new FormData()
    formField.append('Project_Title',Title)
    formField.append('Project_Technologies',Tech)
    formField.append('Technical_Skillset_Frontend',Frontend)
    formField.append('Technical_Skillset_Backend',Backend)
    formField.append('Technical_Skillset_Databases',Db)
    formField.append('Technical_Skillset_Infrastructre',Infrastructre)
    formField.append('Other_Information_Availability',Availability)
    console.log(formField)
    await axios({
      method: 'POST',
      url:'http://localhost:8000/api/addProject',
      data: formField
    }).then(response=>{
      console.log(response.data);
      navigate('/');
    })
}
  return (
    <>
         <div className='header1'>
            <a href='http://localhost:3000'><h4>Home</h4></a>
            <h3>Add New Project Data</h3>
         </div>
         <div className='container'>
            <div className='form-group'>
                <div className='form-control'>
                    <label>Project Title:</label>
                    <input 
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Project Title'
                    name="Project Title"
                    value={Title}
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label>Project Technologies:</label>
                    <input 
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Project Technologies'
                    name="Project Technologies"
                    value={Tech}
                    onChange={(e)=>setTech(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label>Technical Skillset Frontend:</label>
                    <input 
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Technical Skillset Frontend:'
                    name="Technical Skillset Frontend"
                    value={Frontend}
                    onChange={(e)=>setFrontend(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label>Technical Skillset Backend:</label>
                    <input 
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Technical Skillset Backend'
                    name="Technical Skillset Backend"
                    value={Backend}
                    onChange={(e)=>setBackend(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label>Technical Skillset Databases:</label>
                    <input 
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Technical Skillset Databases'
                    name="Technical Skillset Databases"
                    value={Db}
                    onChange={(e)=>setdb(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label>Technical Skillset Infrastructre:</label>
                    <input 
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Technical Skillset Infrastructre'
                    name="Technical Skillset Infrastructre"
                    value={Infrastructre}
                    onChange={(e)=>setInfrastructure(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label>Other Information Availability:</label>
                    <input 
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Other Information Availability'
                    name="Other Information Availability"
                    value={Availability}
                    onChange={(e)=>setAvailability(e.target.value)}
                    />
                </div>
                <button className="button" onClick={addNewProject}>Add Project</button>
            </div>
         </div>
    </>
  )
}

export default Create
