import React from 'react'

function List() {

    const names= ["ajit","abhay","amey"]
  return (
    <div>
        {
            names.map((e)=>{
                return(
                    <p key={e}>{e}</p>
                )
            })
        }
    </div>
  )
}

export default List