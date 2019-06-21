import React from 'react'
import Joyridefuns from './Joyridefuns.js'
// import Joyridefun from './Joyridefun.js'
// import joyridefuns from '../App.js'

function Main(props) {
  // console.log(props)
  const { joyridefuns, handleDelete, handleUpdate } = props
  return (
    <>

      {joyridefuns.map((joyridefun) => {
        return (
          <main key={joyridefun.id}>
            <Joyridefuns
              joyridefuns={joyridefuns}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          </main>
        )
      },
          // <div key={joyridefuns.id}>
          // <div className="row">
          
          <div className="card" key={joyridefuns._id}>
          <h3>Name:{joyridefuns.name}</h3>
          <img src={joyridefuns.image} alt={joyridefuns.name}/>
          <h4>Location: {joyridefuns.location} </h4>
          <h4>Comments: {joyridefuns.comments} </h4>
        </div>
       
        
        
         
      )
      })}
      </>
      
  )
}

export default Main