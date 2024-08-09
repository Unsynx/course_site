import './css/CourseSection.css'
import Entry from './Entry'

function CourseSection() {
  return (
    <>
        <div className='course_section'>
            <div className='title_column'>
                <h2 className='course_title'>Section</h2>
            </div>
            <div className='course_entries'>
                <Entry></Entry>
                <Entry></Entry>
                <Entry></Entry>
            </div>
        </div>
    </>
  )
}

export default CourseSection
