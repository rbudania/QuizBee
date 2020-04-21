import React,{useState,useEffect} from 'react';
import '../../style.css'

 const Questionbox= ({question,answers,selected}) =>{
      const [clicked,setclicked]=useState(answers);  
     return (
       
        <div className='questionBox'>
              <div className='question'>{question}</div>
              <div>
                 { clicked.map(
                     (element,i) =>(<button className='answerBtn' key='i' onClick={() => { setclicked([element]); selected(element); } }>{element}</button>)
                 )    }
              </div>              
        </div>
     )    
}
export default Questionbox

// this is the questionbox component