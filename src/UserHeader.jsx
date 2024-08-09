import './css/UserHeader.css'
import { Link } from 'react-router-dom'

function UserHeader() {
  return (
    <>
    <div className='header'>
      <img src='src\assets\Logo.svg' className='logo'/>
      <nav>
        <button><Link to="/course">Course</Link></button>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/lesson">lesson</Link></button>
      </nav>
    </div>
    </>
  )
}

export default UserHeader
