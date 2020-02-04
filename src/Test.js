import React from "react"
 
function Test(props) {
  return (
    <div className="project">
      <a href="./experiments">
        <div className="project-image">
          <img src="./experiments-image" alt="Project Image"/>
        </div>
        <div className="project-title">Experiments</div>
        <div className="project-category">Personal</div>
      </a>
    </div>
  )
}
 
export default Test;