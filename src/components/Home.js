import '../styles/components/buttonstyles.scss'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
  <section className = 'home-container'>
    <div className = 'background-container'>
      <h1>DisneyME</h1>
      <img className ='background-image image-with-border' src='/images/disney-ears.gif' alt="background"></img>
    </div>

    <div>
      <Link to='/characters'>
      <Button variant='secondary' size='lg'className='custom-button'>To The Magic!</Button>
      </Link>

    </div>
  </section>

  )
}