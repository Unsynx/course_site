import './App.css'
import CourseSection from './CourseSection'
import Hero from './Hero'
import UserHeader from './UserHeader'

function Course() {
  return (
    <>
      <UserHeader></UserHeader>
      <Hero></Hero>
      <div className='content'>
        <CourseSection></CourseSection>
        <CourseSection></CourseSection>
        <CourseSection></CourseSection>
        <CourseSection></CourseSection>
        <CourseSection></CourseSection>
        <CourseSection></CourseSection>
        <CourseSection></CourseSection>
        <CourseSection></CourseSection>
        <CourseSection></CourseSection>
        <CourseSection></CourseSection>
        <CourseSection></CourseSection>
        
      </div>
      
    </>
  )
}

export default Course
