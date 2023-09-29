import React ,{ useState , useEffect }from 'react'
import './Projects.css'
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
function Projects() {
    const [searchTerm, setSearchTerm] = useState("");
    const [projects, setProjects] = useState([]);
    const[details,setDetails]=useState(0);
    const [openPanel, setOpenPanel] = useState(false);
    const fetchData = () => {
    return fetch('http://localhost:8000/api/data')
          .then((response) => response.json())
          .then((data) => setProjects(data));
    }
    useEffect(() => {
    fetchData();
    },[])

    function handleInputChange(event) {
      const { value } = event.target;
      setSearchTerm(value);
    }

  return (
    <>
    <div className='header'>
      <h2>Project Data</h2>
      <input className='search'
      type="text"
      placeholder="Search projects"
      value={searchTerm}
      onChange={handleInputChange}
    />
    {/* <button onClick={filterProjects}>Search</button> */}
      <a href='http://localhost:3000/addProject'><p> + Add Data</p></a>
    </div>
    <div className='body'>
        <div className="flex-container">
        {projects && projects.length > 0 && 
        projects.map((Obj, index) => (
          <>
          { (Obj.Project_Title+Obj.Project_Technologies+Obj.Technical_Skillset_Frontend+
             Obj.Technical_Skillset_Backend+Obj.Technical_Skillset_Databases+
             Obj.Technical_Skillset_Infrastructre+
             Obj.Other_Information_Availability).toLowerCase().includes(searchTerm.toLowerCase())?
            <div className="flex-item">
                <div className="card">
                <p><span>Project Title</span><br></br>{Obj.Project_Title}</p>
                <p><span>Project Technologies</span><br></br>{Obj.Project_Technologies}</p>
                <p><span>Technical Skillset Frontend</span><br></br>{Obj.Technical_Skillset_Frontend?Obj.Technical_Skillset_Frontend:'--'}</p>
                <p><span>Technical Skillset Backend</span><br></br>{Obj.Technical_Skillset_Backend?Obj.Technical_Skillset_Backend:'--'}</p>
                <p><span>Technical Skillset Databases</span><br></br>{Obj.Technical_Skillset_Databases?Obj.Technical_Skillset_Databases:'--'}</p>
                <p><span>Technical Skillset Infrastructre</span><br></br>{Obj.Technical_Skillset_Infrastructre?Obj.Technical_Skillset_Infrastructre:'--'}</p>
                <p><span>Other Information Availability</span><br></br>{Obj.Other_Information_Availability?Obj.Other_Information_Availability:'--'}</p>
                <button className='button1' onClick={(e)=>[setOpenPanel(true),setDetails(Obj.id)]}>Full Details</button>
                </div>
            </div>:<></>
          }
          </>
          ))}
        </div>
        <SlidingPanel 
        panelClassName='slider' 
        type={'right'} 
        isOpen={openPanel} 
        size={30}>
        <div className='slide'>
          {
            projects.map((Obj, index) => (
                Obj.id===details && <div className="flex-item">
                    <div className='details'>
                    <h2>{Obj.Project_Title}</h2>
                    <hr></hr>
                    <p><span>Project Title</span><br></br>{Obj.Project_Title}</p>
                    <p><span>Project Technologies</span><br></br>{Obj.Project_Technologies}</p>
                    <p><span>Technical Skillset Frontend</span><br></br>{Obj.Technical_Skillset_Frontend?Obj.Technical_Skillset_Frontend:'--'}</p>
                    <p><span>Technical Skillset Backend</span><br></br>{Obj.Technical_Skillset_Backend?Obj.Technical_Skillset_Backend:'--'}</p>
                    <p><span>Technical Skillset Databases</span><br></br>{Obj.Technical_Skillset_Databases?Obj.Technical_Skillset_Databases:'--'}</p>
                    <p><span>Technical Skillset Infrastructre</span><br></br>{Obj.Technical_Skillset_Infrastructre?Obj.Technical_Skillset_Infrastructre:'--'}</p>
                    <p><span>Other Information Availability</span><br></br>{Obj.Other_Information_Availability?Obj.Other_Information_Availability:'--'}</p>
                    </div>
                </div>
              ))}
          <button className='button_panel' onClick={() => setOpenPanel(false)}>close</button>
        </div>
        </SlidingPanel>
    </div>
    </>
  )
}

export default Projects
