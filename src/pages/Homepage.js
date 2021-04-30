import { useEffect, useState } from "react";
import './Homepage.css'

// Component to display dinosaur info
const Dino = (props) => {
  return (
    <div className="dinodata">
      <h1>{props.name}</h1>
      <p>{props.info}</p>
    </div>
  )
}

const Homepage = () => {

  const [dinosaur, setDinosaur] = useState('')
  const [dinos, setDinos] = useState([])
  const [filteredDinos, setFilteredDinos] = useState([])

    // fetching data from API and saving it in the variable *dinos*
    useEffect(() => {
      fetch('https://dinosaursapi.herokuapp.com/api/getall')
        .then(result => {
          return result.json()
        })
        .then(data => {
          setDinos(data)
        })
    }, [])

    // saving input string into varibale *dinosaur* everytime there is a change
    const handleChange = (event) => {
      setDinosaur(event.target.value)
    }

    // filter trought data and display wanted dinosaur
    useEffect(() => {
      let dinosCopy = [...dinos]
      dinosCopy = dinosCopy.filter( dino => 
        dino.dino.toLowerCase().includes(dinosaur.toLowerCase()))
      setFilteredDinos(dinosCopy)
    }, [dinosaur, dinos])

    return (
        <>
            <form>
              <label>Which dinosaur are you looking for?</label>
              <input value={dinosaur} type='text' onChange={handleChange} />
            </form>
              {/*Make as many components of dinosaur as there are in the filteredDino array, which can be all or the searched dinosaur */}
              {
                filteredDinos.map(dino => 
                  <Dino key={dino.dino} name={dino.dino} info={dino.info}/>
                )
              }
        </>
    )
}

export default Homepage