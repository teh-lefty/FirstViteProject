
import './App.css'
import {puppyList} from './data'
import { useState } from 'react'  

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log("puppyList: ", puppyList)

  const featuredPup = puppies.find((pup) => pup.id === featPupId)

  return (
    
     <div className="App">
      {
        puppies.map((puppy) => {
          return <div className="puppyGroup"><p className="puppyName" onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p></div>
        })
      }
      
        
        { featPupId && (
          <div className="featPupID">
        <h2>Featured Puppy:</h2> 
          <h1>{featuredPup.name}</h1>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
          
        </ul>
      </div>
      )}
        
      </div>
    
    
  )
}

export default App
