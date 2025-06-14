import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import { useEffect } from 'react'

function App() {
    const [jokes, setJokes] = useState([])

    useEffect(() => {
      axios.get('/api/jokes')
      .then ((res) => { 
         setJokes(res.data)
       })
    }, [])
    

  return (
     <>
       <h1>this Jokes </h1>
       <p>Jokes: {jokes.length}</p>


           {
             jokes.map((joke, index) => (
                 <div key={jokes.id || index}>
                      <h1>{joke.joke}</h1>
                 </div>
             ))
           }
     </>
  )
}

export default App
