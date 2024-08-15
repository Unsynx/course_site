import './css/SearchPage.css'
import DynamicBackground from './components/DynamicBackground'
import { getCourseList } from './util'
import CourseCard from './components/CourseCard'
import './css/App.css'

function setup() {
    let result = [];
    let courses = getCourseList();
    courses.forEach(course => {
        result.push(<CourseCard course={course} />)
    })
    return result
}

function SearchPage() {
  return (
    <>
      <DynamicBackground />
      <div className='content'>
        <p>Search</p>
      </div>
      <div className='content search_courses'>
        {setup()}
      </div>
    </>
  )
}

export default SearchPage
