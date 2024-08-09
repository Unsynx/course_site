import CourseCard from './CourseCard'
import './css/App.css'
import './css/Home.css'
import Hero from './Hero'
import data from './courses/courses.json'

function add_courses() {
  let result = [];

  data.courses.forEach(course => {
    result.push(
      <CourseCard courseName={course.info.name} courseAuthor={course.info.author}/>
    )
  })

  return result
}

function Home() {
  return (
    <>
      <Hero></Hero>
      <div className='content'>
        <div id='course_container' className='courses'>
          {add_courses()}
        </div>
      </div>
      
    </>
  )
}

export default Home
