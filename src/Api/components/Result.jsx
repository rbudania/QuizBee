import React from "react";
import '../../style.css'

function Result(props){
    //console.log(props)
return (
    
  <div className="score-board">
    <div className="score">You scored is {props.count} / 5 correct answers!</div>
    <button className="playBtn" onClick={props.playAgain}>
      Play again!
    </button>
  </div>
)
}

export default Result;