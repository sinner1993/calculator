import React from 'react';
import ReactDOM from 'react-dom/client';
import "../../calculator/src/index.css"
class App extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    value_0 : "0",
    value_1 : "1",
    value_2 : "2",
    value_3 : "3",
    value_4 : "4",
    value_5 : "5",
    value_6 : "6",
    value_7 : "7",
    value_8 : "8",
    value_9 : "9",
    plus : "+",
    minus : "-",  
    multiple : "*",
    divide : "/",
    sum : "",
    dot: ".",
    resultUpperScreen: "",
    resultLowerScreen : ""
  }
this.handle = this.handle.bind(this);
this.AC = this.AC.bind(this);
this.output = this.output.bind(this);
}
handle(value){
  this.setState({
    sum : this.state.sum += value
   })
  let checkOperators = this.state.sum?.match(/-/g);
  if(/^[0-9]\.\d*/g.test(this.state.sum)|| this.state.sum === "" || this.state.sum === "0"  || /[1-9]/.test(this.state.sum)){
   
    if(this.state.sum.search(/[+-/*]/) === -1){
    this.setState({
      resultLowerScreen : this.state.resultLowerScreen += value
     })
     }
     else{
    this.setState({
      resultLowerScreen : value
     })
      }
   this.setState({
    resultUpperScreen : this.state.sum
   })
}
 }
AC(sum){
this.setState({
  sum : "0"
})
}
output(){
  if(this.state.resultUpperScreen.search(/=/) === -1){
  this.setState({
    resultUpperScreen : this.state.resultUpperScreen + "=" + eval(this.state.resultUpperScreen)
  })
  this.setState({
    resultLowerScreen : eval(this.state.resultUpperScreen)
  })
  }
  }
  render() {
    return (
    <div className="container">
    <div className="screen__wrapper">
    <p className="upper__scren">{this.state.resultUpperScreen}</p>
    <p className="lower__screen">{this.state.resultLowerScreen}</p>
   </div>
   <div>
    <div class="first__row">
    <div className = "AC__wrapper">
    <button   onClick={()=>this.AC()}>AC</button>
    </div>
    <button  onClick={()=>this.handle(this.state.divide)}>/</button>
    <button  onClick={()=>this.handle(this.state.multiple)}>X</button>
    </div>

    <div className="second__row">
    <button  onClick={()=>this.handle(this.state.value_7)}>7</button>
    <button  onClick={()=>this.handle(this.state.value_8)}>8</button>
    <button  onClick={()=>this.handle(this.state.value_9)}>9</button>
    <button  onClick={()=>this.handle(this.state.minus)}>-</button>
    </div>

    <div className="third__row">
    <button  onClick={()=>this.handle(this.state.value_4)}>4</button>
    <button  onClick={()=>this.handle(this.state.value_5)}>5</button>
    <button  onClick={()=>this.handle(this.state.value_6)}>6</button>
    <button  onClick={()=>this.handle(this.state.plus)}>+</button>
    </div>
    
    <div className="four__fifth__row">
    <div className="wrapper__four__three">
    <div>
    <button  onClick={()=>this.handle(this.state.value_1)}>1</button>
    <button  onClick={()=>this.handle(this.state.value_2)}>2</button>
    <button  onClick={()=>this.handle(this.state.value_3)}>3</button>
    </div>
    <div>
    <button  onClick={()=>this.handle(this.state.value_0)}>0</button>
    <button  onClick={()=>this.handle(this.state.dot)}>.</button>
    </div>
    </div>
    <div class="equal__wrapper">
    <button  onClick={()=>this.output(this.state.output)}>=</button>
    </div>
    </div>
   </div>
      </div>
    )
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);


