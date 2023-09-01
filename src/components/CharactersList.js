
import { useState, useEffect } from "react"
import axios from "axios"

export default function CharactersList() {

const [ characters, setCharacters ] = useState()

useEffect(() => {

  async function getCharacterData() {
    try {
      const { data } = await axios('/character')
      setCharacters(data)
      console.log(data)
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
  { characters.map((character => {
const characterName = character.name
return characterName
  }))}
  {/* </Container> */}
  </>
  )
}