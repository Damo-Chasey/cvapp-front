import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactLink from './explnk.js';
import Dropdown from './dropdown.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';

class App extends React.Component{
  

  render(){
    return(
      <header className='App-header'>
        <div>
        
        <Dropdown element={this.linkUp()}/>
        
        </div>

        <p>Github for this project:</p><a href="https://github.com/Damo-Chasey/cvapp"><img 
          src="gitlogo.png" width="30px" alt="github logo"></img></a>
      </header>
    );
  }

  linkUp(){
    return(<ReactLink/>)
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);