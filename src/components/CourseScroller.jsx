import CourseCard from './CourseCard'
import './css/CourseScroller.css'
import data from '../courses/courses.json'
import { Link } from 'react-router-dom';


function CourseScroller() {
  return (
    <>
        <h1>Courses</h1>
        <div id='course_container' className='courses'>
          <CourseCard course={data.courses[0]} />
          <CourseCard course={data.courses[0]} />
          <CourseCard course={data.courses[0]} />
          <CourseCard course={data.courses[0]} />
        </div>
        <Link to=''>
          <h3>{'see more ->'}</h3>
        </Link>
    </>
  )
}

export default CourseScroller
