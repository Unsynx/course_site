import './css/CourseSection.css'
import Entry from './Entry'

function add_lessons(lessons) {
  let result = [];

  lessons.forEach(lesson => {
    result.push(
      <Entry lesson={lesson} />
    )
  })

  return result
}

function CourseSection({ name, lessons}) {
  return (
    <>
        <div className='course_section'>
            <div className='title_column'>
                <h2 className='course_title'>{name}</h2>
            </div>
            <div className='course_entries'>
                {add_lessons(lessons)}
            </div>
        </div>
    </>
  )
}

export default CourseSection
