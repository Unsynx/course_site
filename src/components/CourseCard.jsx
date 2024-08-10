import './css/CourseCard.css'
import { Link } from 'react-router-dom';


function CourseCard({courseName, courseAuthor, sections}) {
  return (
    <>
      <div className='course_card'>
        <h2>{courseName}</h2>
        <p>{courseAuthor}</p>
        <Link to='/course' state={{ sections: sections }}>go to course</Link>
      </div>
    </>
  )
}

export default CourseCard
