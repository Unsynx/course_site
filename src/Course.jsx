import './css/App.css'
import CourseSection from './components/CourseSection'
import Hero from './components/Hero'
import { useLocation } from 'react-router-dom';

function add_sections(sections) {
  let result = [];

  sections.forEach(section => {
    result.push(
      <CourseSection name={section.name} lessons={section.lessons} />
    )
  })

  return result
}

function Course() {
  const location = useLocation()
  const { sections } = location.state;

  return (
    <>
      <Hero></Hero>
      <div className='content'>
        {add_sections(sections)}
      </div>
      
    </>
  )
}

export default Course
