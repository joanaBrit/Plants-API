import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

// Bootstrap components
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'


export default function CharacterInfo() {

  //  State
  const [character, setCharacterInfo] = useState(null)
  const { id } = useParams()

  // console.log(characters)

  useEffect(() => {

    async function getCharacterData() {
      try {
        const { data } = await axios(`/character/${id}`)
        console.log(data.data)
        setCharacterInfo(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCharacterData()
  }, [id])


  return (
    <>
      {character ?
      
        <div className="character-info">
          <h1 className="name-character">{character.name}</h1>
          <img className='info-img' alt={'disneycharacter'} src={character.imageUrl} />
          <h2>Films:</h2>
          <div>
            {character.films.length > 0 ? character.films.map((films)=> {
            return <div key={films}>{films}</div>
            }) : <div>No Films Found </div>}
          </div>

          <h2>TV Shows:</h2>
          <div>
            {character.tvShows.length > 0 ? character.tvShows.map((tvShow) => {
            return <div key={tvShow}>{tvShow}</div>
            }) : <div>No TV Series Found </div>}
          </div>
          
          <h2>Video Games:</h2>
          <div>
            {character.videoGames.length > 0 ? character.videoGames.map((videoGames) => {
            return <div key={videoGames}>{videoGames}</div>
            }) : <div>No Video Games Found </div>}
          </div>
        </div>

      
      :
        'Loading'}
    </>
  )
}
// ? characters.imageUrl : 'not avaible'