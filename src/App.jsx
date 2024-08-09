import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Course from './Course'
import UserHeader from './UserHeader'
import Lesson from './Lesson'

function App() {
  return (
    <>
      <Router>
        <UserHeader />

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/course' element={<Course />}></Route>
            <Route path='/lesson' element={<Lesson />}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
