import React from 'react'
import './Subject.css'

const Subject = () => {
  return (
    <div>
      <>
  {/* subject*/}
  <div className="IntroMsg">
    <h1> Stunning food, Amazing Quaility</h1>
    <br />
    <span>Let us host your next special occassion</span>
    <h2>
      <a
        href="call:111-111-111"
        style={{ textDecoration: "none", color: "white" }}
      >
        {" "}
        <i className="bi bi-telephone-forward-fill">
          {" "}
          <span> Contact US today </span>
        </i>
      </a>
    </h2>
  </div>
</>

    </div>
  )
}

export default Subject
