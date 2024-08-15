import CourseCard from './CourseCard'
import './css/CourseScroller.css'
import { Link } from 'react-router-dom';
import { getCourseListFromTag } from '../util';

function getCards(count, tag) {
  let courses = getCourseListFromTag(tag)

  let result = [];
  for (let i = 0; i < Math.min(count, courses.length); i++) {
    result.push(
      <CourseCard course={courses[i]} />
    )
  }
  return result
}

function CourseScroller({ header, tag }) {
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
        {getCards(4, tag)}
      </div>
    </>
  )
}

export default CourseScroller
