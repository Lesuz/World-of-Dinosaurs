import { useEffect, useState } from "react";
import './Homepage.css'

const Dino = (props) => {
  return (
    <div className="dinodata">
      <h1>{props.name}</h1>
      <p>{props.info}</p>
    </div>
  )
}

const Homepage = () => {

  const [dinosaur, setDinosaur] = useState()
  const [dinos, setDinos] = useState([])

    useEffect(() => {
      fetch('https://dinosaursapi.herokuapp.com/api/getall')
        .then(result => {
          return result.json()
        })
        .then(data => {
          setDinos(data)
        })
    }, [])

    const handleChange = (event) => {
      setDinosaur(event.target.value)
    }

    useEffect(() => {
      let dinosCopy = [...dinos]
      dinosCopy = dinosCopy.filter( dino => dino.dino.includes(dinosaur))

      setDinos(dinosCopy)
    }, [dinosaur])

    return (
        <>
            <form>
              <label>Which dinosaur are you looking for?</label>
              <input value={dinosaur} type='text' onChange={handleChange} />
            </form>
              {
                dinos.map(dino => 
                  <Dino key={dino.dino} name={dino.dino} info={dino.info}/>
                )
              }
        </>
    )
}

export default Homepage