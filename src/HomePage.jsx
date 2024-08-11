import CourseCard from './components/CourseCard'
import './css/App.css'
import './css/Home.css'
import Hero from './components/Hero'
import data from './courses/courses.json'

function add_courses() {
  let result = [];

  data.courses.forEach(course => {
    result.push(
      <CourseCard course={course} />
    )
  })

  return result
}

function HomePage() {
  return (
    <>
      <div className='content'>
        <div id='course_container' className='courses'>
        {add_courses()}

        </div>
      </div>
      
    </>
  )
}

export default HomePage
