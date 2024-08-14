import { Link } from 'react-router-dom'
import './css/BigLogo.css'


function BigLogo() {
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
          <img src='src\assets\logo_outline.svg'/>
        </div>
      </div>
      <div className='hero_right'>
        <p>This is a sae pitch</p>
        <Link>This is a button</Link>
      </div>

    </div>
        
    </>
  )
}

export default BigLogo
