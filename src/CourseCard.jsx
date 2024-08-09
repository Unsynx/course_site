import './css/CourseCard.css'


function CourseCard({courseName, courseAuthor}) {
  return (
    <>
      <div className='course_card'>
        <h2>{courseName}</h2>
        <p>{courseAuthor}</p>
      </div>
    </>
  )
}

export default CourseCard
