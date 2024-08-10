import './css/App.css'
import CourseSection from './components/CourseSection'
import Hero from './components/Hero'
import { useLocation } from 'react-router-dom';
import data from './courses/courses.json'

function add_sections(sections) {
  let result = [];

  sections.forEach(section => {
    result.push(
      <CourseSection name={section.name} lessons={section.lessons} />
    )
  })

  return result
}

function CoursePage({ course }) {
  return (
    <>
      <Hero></Hero>
      <div className='content'>
        {add_sections(course.sections)}
      </div>
      
    </>
  )
}

export default CoursePage
