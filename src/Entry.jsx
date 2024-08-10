import './css/Entry.css'


function Entry({ lesson }) {
  return (
    <>
        <div className='entry'>
            <div className='title'>
                <h3>{lesson.name}</h3>
            </div>
            <div className='course_buttons'>
                <button className='course_button'>Start</button>
            </div>
        </div>
    </>
  )
}

export default Entry
