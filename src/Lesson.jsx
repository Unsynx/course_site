import './Lesson.css'
import './App.css'
import Entry from './Entry'

function Lesson() {
  return (
    <>
        <div className='video'>
            <iframe src="https://www.youtube.com/embed/7q_sOSFLWEY?si=RPvh25oNOVZt8V0F"
                frameborder="0" allowfullscreen 
                width="100%" height="1080"/>
        </div>

        <div className='content'>
            <div className='big_row'>
                <div className='lesson_name'> 
                    <h1>Title</h1>
                </div>
                <div className='lesson_buttons'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>

            <div className='lesson_info'>
                <div>
                    <p>This is the info section</p>
                </div>
                <div className='lesson_list'>
                    <Entry />
                    <Entry />
                    <Entry />
                    <Entry />
                </div>
            </div>
           
        </div>
        
    </>
  )
}

export default Lesson
