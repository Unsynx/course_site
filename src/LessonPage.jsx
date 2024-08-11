import './css/Lesson.css'
import './css/App.css'
import { Link } from 'react-router-dom'
import { getNextLessonPath, getPreviousLessonPath } from './util'

function LessonPage({ lesson, course }) {
    return (
    <>
        <div className='video'>
            <iframe src={lesson.link}
                frameborder="0" allowfullscreen 
                width="100%" height="1080"/>
        </div>
        <div className='title_head'>
            <div className='content big_row'>
                <h1 className='lesson_title'>{lesson.name}</h1>
                <div className='lesson_buttons'>
                    <Link to={getPreviousLessonPath(course, lesson.name)} className='prev lesson_button'><h4>Previous</h4></Link>
                    <Link to={getNextLessonPath(course, lesson.name)} className='next lesson_button'><h4>Next</h4></Link>
                </div>
            </div>
        </div>
        <div className='content'>
            <div className='lesson_info'>
                <div>
                    <p>{lesson.description}</p>
                </div>
                <div className='lesson_list'>
                    /* Missing entires */
                </div>
            </div>
           
        </div>
        
    </>
  )
}

export default LessonPage
