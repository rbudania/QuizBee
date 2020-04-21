import React from 'react';
import  qBank from  './Api';
import './style.css'
import Questionbox from './Api/components/Questionbox.jsx';
import Result from './Api/components/Result.jsx';

class App extends React.Component{
    constructor(props)
    {
        super(props);
    this.state={
             isloaded:false,
             questions:[],
             count:0,
             attempted:0,
    }
    this.getQuestions=this.getQuestions.bind(this)
    this.computeAnswer=this.computeAnswer.bind(this)
    this.playagain=this.playagain.bind(this)
}
// this is a function used get the promise
getQuestions(){
    qBank().then( (questions)=>{
         this.setState({
             questions:questions,
             isloaded:true
            
         })
    }
    )
    //console.log(this.state.questions.length)
}

playagain(){    
               this.getQuestions();
    this.setState({
        count:0,attempted:0
    })
}
computeAnswer(answer,correct){
    if(answer===correct){
        this.setState({
            count: this.state.count+1
        })
    }
    this.setState({
        attempted: this.state.attempted<5 ? this.state.attempted+1: 5
    })
}

    componentDidMount(){
      this.getQuestions();      
    // console.log(this.state.questions.length)
    }
    render()
    {
        return(
                <div className='container'> 
                    <div className='title'>QUIZBEE </div>                           
                      {  this.state.questions.length>0 && this.state.attempted<5  &&
                         this.state.questions.map(
                             ({question,correct,answers,questionId})=>{
                                 return(
                               //  <h4>{question} <br/> {correct} </h4>
                               <Questionbox question={question} answers={answers}  correct={correct} key={questionId}
                                selected={
                                    (answer)=> {  this.computeAnswer(answer,correct)  }                        
                                   
                                } />
                                 )
                             }
                         )
                      }
                      
                      {this.state.attempted===5? (<Result count={this.state.count} playagain={this.playagain}/>) :null}
                                                               
                </div>

        )
    }
}

export default App