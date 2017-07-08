import React,{Component} from 'react';
import '../styles/main.scss';
import Menu from './Menu';
export default class App extends Component{
  render(){
    return(
      <div className="main">Here is the React App boilerplate
        <span className="test">Test</span>
        <Menu />
      </div>

    );
  };
}
