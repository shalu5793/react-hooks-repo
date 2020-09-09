import React, {Component} from 'react';
import { arrayExpression } from '@babel/types';

class Hello extends Component {
constructor(props){
super(props);
this.state = {
    count:0,
    term: 'you can write here'
}
}

increament = () =>{
this.setState({count: this.state.count +1 });
}


decreament = () =>
 {
this.setState({count: this.state.count -1 });
}
    render() {
      return (
        <div className = "App">
          <button onClick = {this.increament} className = "counter">Increament by 1</button>
          <button onClick = {this.decreament} className = "counter">Decreament by 1</button>
          <h1>Counter:{this.state.count}</h1>
          <div>
            <input value={this.state.term}
            onChange = {event => this.setState({term:event.target.value})} />
            {this.state.term}
          </div>
        </div>
      );
    }
  }
  
  export default Hello;
