import './css/UserHeader.css'
import { Link } from 'react-router-dom'

function UserHeader() {
  return (
    <>
    <div className='header'>
      <Link to="/" className='logo'>
        <img src='src\assets\Logo.svg' className='logo'/>
      </Link>
      <nav>
        <Link to="/search">Search</Link>
      </nav>
    </div>
    </>
  )
}

export default UserHeader
