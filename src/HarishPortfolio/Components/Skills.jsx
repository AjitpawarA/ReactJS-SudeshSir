import React from 'react'
import "./skill.scss";

function Skills() {

  return (
    <>
    <div className="skills">
        <div className="sleft">
            <h2>My Skills</h2>
            <p>Here are my skills</p>
            <div className='skillname'>
              <div>
                  <div className="skillsinge">
                  <i className="fa-brands fa-html5"></i>
                  <p>Html</p>
                  </div>    
                  <progress value={0.1} style={{width:"100%", color:'yellow', marginTop:"8px"}} id='bar'/>
              </div>
              <div>
                  <div className="skillsinge">
                  <i className="fa-brands fa-css3-alt"></i>
                <p>CSS</p>
                  </div>
                  <progress value={0.3} style={{width:"100%", color:'yellow',marginTop:"8px"}}/>
              </div>
              <div>
                  <div className="skillsinge">
                  <i className="fa-brands fa-js"></i>
                <p>JavaScript</p>
                  </div>
                  <progress value={0.2} style={{width:"100%", color:'yellow',marginTop:"8px"}}/>
              </div>
              <div>
                  <div className="skillsinge">
                  <i className="fa-solid fa-recycle"></i>
                <p>Material UI</p>
                  </div>
                  <progress value={0.4} style={{width:"100%", color:'yellow',marginTop:"8px"}}/>
              </div>
              <div>
                  <div className="skillsinge">
                  <i className="fa-brands fa-bootstrap"></i>
                <p>Bootstrap</p>
                  </div>
                  <progress value={0.5} style={{width:"100%", color:'yellow',marginTop:"8px"}}/>
              </div>
              <div>
                  <div className="skillsinge">
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
                <p>Tailwind</p>
                  </div>
                  <progress value={0.9} style={{width:"100%", color:'yellow',marginTop:"8px"}}/>
              </div>
            </div>
        </div>
        <div className="sright">
            <div className="rbox1">
              <p>ReactJS</p>
            </div>
            <br />
            <div className="rbox2">
                <p>NextJS</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Skills