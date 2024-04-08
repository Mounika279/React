import { Component } from "react";

class CounterComponent extends Component{
    state={
        count:0
    }
    incrementcount=()=>{
        this.setState(
            {
                count:this.state.count+1
            }
        )
    }
    decrementcount=()=>{
        this.setState(
            {
                count:this.state.count-1
            }
        )
    }
    reset=()=>{
        this.setState(
            {
            count:0
            }
        )
    }
    render(){
  
        return(
          <>
  <h1>Counter App</h1>
  <h5>Count is :{this.state.count}</h5>
  <button onClick={this.incrementcount}>Increase</button>
  <button onClick={this.decrementcount}>Decrease</button>
  <button onClick={this.reset}>Reset</button>
          </>
        )
    }
}
export default CounterComponent