import React from 'react'
import Child from './Child'
import ChildClass from './ChildClass';

function Parent() {
    function darkmode(){
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
    }
  return (
    <div>
      <p>Props for functional Component</p>
        <Child name="Ajit" age="22" Dark={darkmode}/>
        <p>Props for Class Component</p>
        <ChildClass name="Abhay" age="23"/>
    </div>
  )
}

export default Parent