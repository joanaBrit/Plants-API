import { useEffect } from 'react'
import axios from 'axios'
import Home from './components/Home'
import CharacterInfo from './components/CharacterInfo'
import CharactersList from './components/CharactersList'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'



const App = () => {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/character') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })

  return (
    <BrowserRouter>
      <main>
        <Link className='home' to='/'>
          <img className='logo' src='/images/disney-logo.png' alt="Logo"></img>
        </Link>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<CharactersList />} />
          <Route path='/characters/:id' element={<CharacterInfo />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
