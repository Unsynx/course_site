import './css/Entry.css'
import { Link } from 'react-router-dom';


function Entry({ lesson }) {
  return (
    <>
        <div className='entry'>
            <div className='title'>
                <h3>{lesson.name}</h3>
            </div>
            <div className='course_buttons'>
              <Link to='/lesson' state={{ lesson: lesson }}>Start</Link>
            </div>
        </div>
    </>
  )
}

export default Entry
