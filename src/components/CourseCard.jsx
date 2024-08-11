import './css/CourseCard.css'
import { Link } from 'react-router-dom';
import getPagePath from "../util.js"


function CourseCard({ course }) {
  return (
    <>
      <Link to={getPagePath(course.name)} className='course_card'> 
        <div className='thumb'>
          <div className='thumb_overlay'>
            <img src={'src/assets/' + course.level + '_icon.svg'} className='diff_icon'/>
            <h4>{course.level}</h4>
          </div>
          <img src='src\assets\hero.jpg' className='thumb_img'/>
        </div>
        <div className='card_info'>
          <h2>{course.name}</h2>
          <p>{course.short_description}</p>
        </div>
        <img src='src\assets\plus.svg' className='plus' />
      </Link>
    </>
  )
}

export default CourseCard
