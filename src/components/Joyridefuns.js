import React from 'react'
import Joyridefun from './Joyridefun.js'

function Joyridefuns(props) {
  const { joyridefuns, handleDelete, handleUpdate } = props
    return (
      <div>
        {joyridefuns.map(joyridefun => <Joyridefun key={joyridefun.id} joyridefun={joyridefun}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
          />)}
      </div>
    )
}

export default Joyridefuns