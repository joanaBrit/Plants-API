
import { useState, useEffect } from "react"
import axios from "axios"

export default function CharactersList() {

const [ characters, setCharacters ] = useState([])
// console.log(characters)

useEffect(() => {

  async function getCharacterData() {
    try {
      const { data } = await axios('/character')
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
  <div key={character._id}>
    {characterName}
    <img alt={'disneycharacter'}src={character.imageUrl}/>
  </div>
)
  })) : 'Loading'}

  {/* </Container> */}
  </>
  )
}