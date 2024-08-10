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

        <div className='content'>
            <div className='big_row'>
                <div className='lesson_name'> 
                    <h1>{lesson.name}</h1>
                </div>
                <div className='lesson_buttons'>
                    <Link to={getPreviousLessonPath(course, lesson.name)}>Previous</Link>
                    <Link to={getNextLessonPath(course, lesson.name)}>Next</Link>
                </div>
            </div>

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
