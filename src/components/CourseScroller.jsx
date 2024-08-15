import CourseCard from './CourseCard'
import './css/CourseScroller.css'
import data from '../courses/courses.json'
import { Link } from 'react-router-dom';


function CourseScroller({ header }) {
  return (
    <>
      <div className='course_scroller_header'>
        <h1>{header}</h1>
        <hr className='line_fill'/>
        <Link to='' className='search_link'>
          <h3>{'see more ->'}</h3>
        </Link>
      </div>
      <div id='course_container' className='courses'>
        <CourseCard course={data.courses[0]} />
        <CourseCard course={data.courses[0]} />
        <CourseCard course={data.courses[0]} />
        <CourseCard course={data.courses[0]} />
      </div>
    </>
  )
}

export default CourseScroller
