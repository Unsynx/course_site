import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './css/App.css'
import HomePage from './HomePage'
import CoursePage from './CoursePage'
import UserHeader from './components/UserHeader'
import LessonPage from './LessonPage'
import data from './courses/courses.json'

// Reads from courses.json to make all course pages
function setupPages() {
  let result = [];

  data.courses.forEach(course => {
    let course_path = "/course_" + course.name.replace(/\s+/g, '_');

    result.push(
      <Route path={course_path} element={<CoursePage course={course}/>} />
    )

    course.sections.forEach(section => {
      section.lessons.forEach(lesson => {
        let lesson_path = course_path.concat("/", lesson.name.replace(/\s+/g, '_'));

        result.push(
          <Route path={lesson_path} element={<LessonPage lesson={lesson}/>} />
        )
      })
    })
  })

console.log(result)

  return result
}

function App() {
  return (
    <>
      <Router>
        <UserHeader />

          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            {setupPages()}
          </Routes>
      </Router>
    </>
  )
}

export default App
