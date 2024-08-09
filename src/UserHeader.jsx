import './css/UserHeader.css'
import { Link } from 'react-router-dom'

function UserHeader() {
  return (
    <>
    <div className='header'>
      <p>Bowdoin Maker Space</p>
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
