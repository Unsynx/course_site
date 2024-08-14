import CourseCard from './components/CourseCard'
import './css/App.css'
import './css/Home.css'
import Hero from './components/Hero'
import data from './courses/courses.json'
import DynamicBackground from './components/DynamicBackground'
import CourseScroller from './components/CourseScroller'
import HomeHero from './components/HomeHero'

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
      <HomeHero />
      <div className='content'>
        
        <CourseScroller />
        <div id='course_container' className='courses'>
          
          {add_courses()}

        </div>
      </div>
      
    </>
  )
}

export default HomePage
