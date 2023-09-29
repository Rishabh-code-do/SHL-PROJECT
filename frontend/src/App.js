import React from 'react'
import Projects from './Projects'
import Create from './Create'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Projects/>} />
            <Route path="/addProject" element={<Create/>} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
