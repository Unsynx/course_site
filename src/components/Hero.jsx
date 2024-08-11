import './css/Hero.css'

function Hero({ text }) {
  return (
    <>
      <div className='hero_img'>
        <h1>{text}</h1>
        <img src='src\assets\hero.jpg' className='back'></img>
      </div>
    </>
  )
}

export default Hero
