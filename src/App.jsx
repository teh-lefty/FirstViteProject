
import './App.css'
import {puppyList} from './data'
import { useState } from 'react'  

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log("puppyList: ", puppyList)

  return (
    
     <div className="App">
      {
        puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>
        })
      }
        
      </div>
    
    
  )
}

export default App
