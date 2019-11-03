import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    userName: 'Sarthak'
  }

 changeUserName = (event)=>{
  this.setState({userName: event.target.value})
 }

  render(){
  return (
    <div>
      <UserInput userName  = {this.state.userName} changed = {this.changeUserName}/>
      <UserOutput userName  = {this.state.userName}/>
      <UserOutput userName = {this.state.userName}/>
      <UserOutput userName = 'Somil'/>
    </div>
  );
}
}

export default App;
