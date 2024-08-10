import CourseCard from './components/CourseCard'
import './css/App.css'
import './css/Home.css'
import Hero from './components/Hero'
import data from './courses/courses.json'

function add_courses() {
  let result = [];

  data.courses.forEach(course => {
    result.push(
      <CourseCard courseName={course.info.name} courseAuthor={course.info.author} sections={course.sections} />
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
