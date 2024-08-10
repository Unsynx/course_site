import './css/UserHeader.css'
import { Link } from 'react-router-dom'

function UserHeader() {
  return (
    <>
    <div className='header'>
      <img src='src\assets\Logo.svg' className='logo'/>
      <nav>
      <button><Link to="/">Home</Link></button>
      <button><Link to="/course_temp">course</Link></button>
      <button><Link to="/course_temp/lesson_1">lesson</Link></button>
      </nav>
    </div>
    </>
  )
}

export default UserHeader
