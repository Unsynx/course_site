import './css/CourseSection.css'
import './css/Entry.css'
import { Link } from 'react-router-dom';
import getPagePath from '../util';


function LessonEntry(course_name, lesson) {
  return (
    <>
        <div className='entry'>
            <div className='title'>
                <h3>{lesson.name}</h3>
            </div>
            <div className='course_buttons'>
              <Link to={getPagePath(course_name, lesson.name)} state={{ lesson: lesson }}>Start</Link>
            </div>
        </div>
    </>
  )
}

function add_lessons(course_name, section) {
  let result = [];

  section.lessons.forEach(lesson => {
    result.push(
      LessonEntry(course_name, lesson)
    )
  })

  return result
}

function CourseSection({ course_name, section }) {
  return (
    <>
        <div className='course_section'>
            <div className='title_column'>
                <h2 className='course_title'>{course_name}</h2>
            </div>
            <div className='course_entries'>
                {add_lessons(course_name, section)}
            </div>
        </div>
    </>
  )
}

export default CourseSection
