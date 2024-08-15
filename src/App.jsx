import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './css/App.css'
import HomePage from './HomePage'
import CoursePage from './CoursePage'
import UserHeader from './components/UserHeader'
import LessonPage from './LessonPage'
import data from './courses/courses.json'
import getPagePath from "./util.js"
import SearchPage from './SearchPage.jsx'

// Reads from courses.json to make all course pages
function setupPages() {
  let result = [];

  data.courses.forEach(course => {
    result.push(
      <Route path={getPagePath(course.name)} element={<CoursePage course={course}/>} />
    )

    course.sections.forEach(section => {
      section.lessons.forEach(lesson => {
        result.push(
          <Route path={getPagePath(course.name, lesson.name)} element={<LessonPage lesson={lesson} course={course}/>} />
        )
      })
    })
  })

  return result
}

function App() {
  return (
    <>
      <Router>
        <UserHeader />

          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/search' element={<SearchPage />}></Route>
            {setupPages()}
          </Routes>
      </Router>
    </>
  )
}

export default App
