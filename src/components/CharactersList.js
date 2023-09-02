
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import MissingImages from "./MissingImages"

export default function CharactersList() {

  const [characters, setCharacters] = useState([])
  // console.log(characters)

  useEffect(() => {

    async function getCharacterData() {
      try {
        const { data } = await axios('/character', { params: { pageSize: 7450 } })
        // console.log(data)
        setCharacters(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCharacterData()
  }, [])


  return (
    <>
      <h1>Hello</h1>
      {/* <Container> */}
      {characters.length > 0 ? characters.map((character => {
        const characterName = character.name
        return (
          <section className="container">
          <div className="character-list character" key={character._id}>
            {characterName}
            <Link to={`/characters/${character._id}`}>
              {/* <img alt={'disneycharacter'} src={character.imageUrl} /> */}
              <MissingImages imageUrl={character.imageUrl} altText={character.name} placeHolderImageUrl={'https://placehold.co/600x400/png'}  />
              </Link>
          </div>
          </section>
        )
      })) : 'Loading'}

      {/* </Container> */}
    </>
  )
}