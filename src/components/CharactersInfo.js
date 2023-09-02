import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

// Bootstrap components
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'


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
        // <Container>
        //   <Row>
        //   <Col>
        <div className="character-info">
          <h1 className="name-character">{characters.name}</h1>
          <img className='info-img' alt={'disneycharacter'} src={characters.imageUrl} />
          {/* <MissingImages imageUrl={characters.imageUrl} altText={characters.name} placeHolderImageUrl={'https://placehold.co/600x400'}  /> */}
        </div>
        /* </Col>
        </Row>
        </Container> */
      :
        'Loading'}
    </>
  )
}
// ? characters.imageUrl : 'not avaible'