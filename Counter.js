import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state={
            counter:0,
        }
    }
    increment(){
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    reset(){
        this.setState({
            counter: 0,
        })
        
    };
    minus(){
        this.setState({
            counter: this.state.counter - 1,
        })
    };
    render(){
        return(
        <div>
            <h3>Count value is: {this.state.counter} </h3>
            <button onClick={()=> this.increment()}>Click</button>
            <button onClick={()=> this.reset()}>Reset</button>
            <button onClick={()=> this.minus()}>Minus</button>
        </div>
        );
         
    }
}
export default Counter;