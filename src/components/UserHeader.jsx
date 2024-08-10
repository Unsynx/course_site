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
        <button><Link to="/">Home</Link></button>
      </nav>
    </div>
    </>
  )
}

export default UserHeader
