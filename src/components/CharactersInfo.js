import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"


export default function CharactersInfo() {

  //  State
  const [characters, setCharactersInfo] = useState(null)
  const { id } = useParams()
  
  // console.log(characters)

  useEffect(() => {

    async function getCharacterData() {
      try {
        const { data } = await axios(`/character/${id}`)
        // console.log(data)
        setCharactersInfo(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCharacterData()
  }, [id])


  return (
    <>
      {characters ?
        <div>
          <h1>{characters.name}</h1>
          <img alt={'disneycharacter'} src={characters.imageUrl} />
          {/* <MissingImages imageUrl={characters.imageUrl} altText={characters.name} placeHolderImageUrl={'https://placehold.co/600x400'}  /> */}
        </div>
        :
        'Loading'}
    </>
  )
}
// ? characters.imageUrl : 'not avaible'