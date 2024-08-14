import CourseCard from './components/CourseCard'
import './css/App.css'
import './css/Home.css'
import Hero from './components/Hero'
import data from './courses/courses.json'
import DynamicBackground from './components/DynamicBackground'
import CourseScroller from './components/CourseScroller'
import BigLogo from './components/BigLogo'

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
      <DynamicBackground />
      <div className='content'>
        <BigLogo />
        <CourseScroller />
        <div id='course_container' className='courses'>
          
          {add_courses()}

        </div>
      </div>
      
    </>
  )
}

export default HomePage
