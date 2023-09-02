
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import MissingImage from "./MissingImages"


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
    <section className="container">
      <h1>Hello</h1>
      {/* <Container> */}
      {characters.length > 0 ? characters.map((character => {
        const characterName = character.name
        return (
          <section  key={character._id}>
          <div className="character-list character">
            {characterName}
            <Link to={`/characters/${character._id}`}>
              {/* <img alt={'disneycharacter'} src={character.imageUrl} /> */}
              <MissingImage key={`missingImage-${character._id}`} imageUrl={character.imageUrl} altText={character.name} 
              placeHolderImageUrl={'https://static.wikia.nocookie.net/disney/images/7/7c/Noimage.png'}  />
              </Link>
          </div>
          </section>
        )
      })) : 'Loading'}
</section>
      {/* </Container> */}
    </>
  )
}
// <section className="container">