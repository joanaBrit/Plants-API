import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import axios from "axios"
import Spinner from 'react-bootstrap/Spinner'


export default function CharacterInfo() {

  //  State
  const [character, setCharacterInfo] = useState(null)
  const { id } = useParams()


  useEffect(() => {

    async function getCharacterData() {
      try {
        const { data } = await axios(`/character/${id}`)
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
          <img className='info-img' alt={character.name} src={character.imageUrl || 'https://static.wikia.nocookie.net/disney/images/7/7c/Noimage.png'} />
          <section className="text-wrap">
            <h2>Films:</h2>
            <div className="text">
              {character.films.length > 0 ? character.films.map((films) => {
                return <div key={films}>{films}</div>
              }) : <div>No Films Found</div>}
            </div>

            <h2>TV Shows:</h2>
            <div className="text">
              {character.tvShows.length > 0 ? character.tvShows.map((tvShow) => {
                return <div key={tvShow}>{tvShow}</div>
              }) : <div>No TV Series Found</div>}
            </div>

            <h2>Video Games:</h2>
            <div className="text">
              {character.videoGames.length > 0 ? character.videoGames.map((videoGames) => {
                return <div key={videoGames}>{videoGames}</div>
              }) : <div>No Video Games Found</div>}
            </div>
          </section >
        </div>
        : <Spinner style={{ marginTop: '3rem' }} animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>}
      
    </>
  )
}
