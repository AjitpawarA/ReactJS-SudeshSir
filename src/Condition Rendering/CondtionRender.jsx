import React, { useState } from 'react'

function CondtionRender() {

    const [ismyroomcleand]=useState(false);

  return (
    <div>
        {
            (ismyroomcleand?(<h1>Yes boss room is cleaned</h1>):(<h1>No Boss Room is not cleand </h1>))
        }
    </div>
  )
}

export default CondtionRender