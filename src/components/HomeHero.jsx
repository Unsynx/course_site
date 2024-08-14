import { Link } from 'react-router-dom'
import './css/HomeHero.css'


function HomeHero() {
  return (
    <>
    <div className='hero_container'>
      <div className='hero_left'>
        <div className='big_logo'>
          <img src='src\assets\logo_fill_white.svg' 
          className='big_logo_back logo_white'
          />
          <img src='src\assets\logo_fill_blue.svg' 
          className='big_logo_back logo_blue'
          />
          <img src='src\assets\logo_fill_green.svg' 
          className='big_logo_back logo_green'
          />
          <img src='src\assets\logo_fill_red.svg' 
          className='big_logo_back logo_red'
          />
          <img src='src\assets\logo_outline.svg'
          className='big_logo_front'
          />
        </div>
      </div>
      <div className='hero_right'>
        <p>Learn how to make stuff</p>
        <Link className='hero_button'>
          <h2>Let's Go!</h2>
        </Link>
      </div>

    </div>
    <div className='hero_end'>
      <img src='src\assets\semi-circle.svg' />
    </div>
    </>
  )
}

export default HomeHero
