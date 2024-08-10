import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './css/App.css'
import Home from './Home'
import Course from './Course'
import UserHeader from './components/UserHeader'
import Lesson from './Lesson'

function App() {
  return (
    <>
      <Router>
        <UserHeader />

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/course' Component={Course}></Route>
            <Route path='/lesson' Component={Lesson}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
