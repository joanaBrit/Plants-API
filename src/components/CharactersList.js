
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import axios from "axios"
import MissingImage from "./MissingImage"
import Spinner from 'react-bootstrap/Spinner'


export default function CharactersList() {
  const [characters, setCharacters] = useState([])


  useEffect(() => {

    async function getCharacterData() {
      try {
        const { data } = await axios('/character', { params: { pageSize: 500 } })
        setCharacters(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCharacterData()
  }, [])


  return (
    <>
      <img className="disney-gif-characters" src='/images/disney.gif' alt="Disney-gif" />
      <section className="container">

        {characters.length > 0 ? characters.map((character => {
          const characterName = character.name
          return (

            <div className="character-list character" key={character._id}>
              <h2>{characterName}</h2>
              <Link to={`/characters/${character._id}`}>
                {/* <MissingImage key={`missingImage-${character._id}`} imageUrl={character.imageUrl} altText={character.name}
                  placeHolderImageUrl={'https://static.wikia.nocookie.net/disney/images/7/7c/Noimage.png'} /> */}
                <img alt={character.name} src={character.imageUrl || 'https://static.wikia.nocookie.net/disney/images/7/7c/Noimage.png'} />
              </Link>
            </div>
          )
        })) : <Spinner style={{ marginTop: '3rem' }} animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>}
      </section>
    </>
  )
}
