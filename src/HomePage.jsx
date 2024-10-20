import CourseCard from './components/CourseCard'
import './css/App.css'
import './css/Home.css'
import data from './courses/courses.json'
import DynamicBackground from './components/DynamicBackground'
import CourseScroller from './components/CourseScroller'
import HomeHero from './components/HomeHero'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <DynamicBackground />
      <HomeHero />
      <div className='content'>
        <div className='writting'>
          <p>Hi 👋—</p>
          <p>Welcome to Nik's Maker Guide.</p>
          <p>Want to learn how to make 🔨 all sorts of cool stuff, but don't know where to start 🤔</p>
          <p>Then you're in the right place!</p>
          <br />
          <p>Here you can:</p>
        </div>

        <CourseScroller header={'Learn to Use Equipment'} tag={'equipment'} />
        <CourseScroller header={'Learn Design Skills'} tag={'skill'}/>
        <CourseScroller header={'Make Projects that Push Your Skills'} tag={'project'}/>
      </div>
    <Footer />
    </>
  )
}

export default HomePage
