import './css/App.css'
import CourseSection from './components/CourseSection'
import Hero from './components/Hero'

function add_sections(course) {
  let result = [];

  course.sections.forEach(section => {
    result.push(
      <CourseSection course_name={course.name} section={section} />
    )
  })

  return result
}

function CoursePage({ course }) {
  return (
    <>
      <Hero text={course.name}/>
      <div className='content'>
        {add_sections(course)}
      </div>
      
    </>
  )
}

export default CoursePage
