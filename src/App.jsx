import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Course from './Course'

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/course">Course</Link>
              </li>
            </ul>
        </nav>

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/course' element={<Course />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
