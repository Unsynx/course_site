import './css/CourseCard.css'
import { Link } from 'react-router-dom';
import getPagePath from "../util.js"


function CourseCard({ course }) {
  return (
    <>
      <div className='course_card'>
        <h2>{course.name}</h2>
        <p>{course.author}</p>
        <Link to={getPagePath(course.name)} >go to course</Link>
      </div>
    </>
  )
}

export default CourseCard
