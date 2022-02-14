import logo from './logo.svg';
import './App.css';
import Main from './components/Calendar/Main'
import react, {Component} from 'react'

const style ={
  position : "relative",
  margin : "50px auto"
}
class App extends Component {
  render(){
  return (
      <Main style={style} width="302px" />
  );
  }
}

export default App;
