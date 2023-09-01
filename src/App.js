import { useEffect } from 'react'
import axios from 'axios'
import Home from './components/Home'
import CharactersInfo from './components/PlantInfo'
import CharactersList from './components/PlantList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/character') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })

  return (
    <BrowserRouter>
  <main>
  <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/plantList' element={<CharactersList/>} />
  <Route path='/plantInfo' element={<CharactersInfo/>} />
  </Routes>
  </main>
  </BrowserRouter>
  )
}

export default App
