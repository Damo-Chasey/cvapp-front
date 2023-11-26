import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactLink from './explnk.js';
//import Dropdown from './dropdown.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import Tabs from './tab.js'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        checked: false,
        dropOpen: true
    }
  } 
    handleDropOpen = () => {
      this.setState({dropOpen: !this.state.dropOpen});
    }

    changeValue = () => {
      this.setState({checked: !this.state.checked});
    }

  render(){
    return(
      <header className='App-header'>
        <div>
        
        
          <div className="indexBody">

              <div className={"dropDown"}>
                <div onClick={this.handleDropOpen}><img src={"burgor64blue.png"} alt={"burger menu"}/></div>
                
              </div>

              <li>
              <Tabs isOpen={this.state.dropOpen}/>
              </li>
          </div>

          <div>
            <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.changeValue}    
            />
          </div>
          {this.state.checked === true ? <p>Checkbox has been checked!</p> : null}
          <p>Github for this project:</p><a href="https://github.com/Damo-Chasey/cvapp"><img 
                src="gitlogo.png" width="30px" alt="github logo"></img></a>
        </div>

        

        {this.linkUp()}
      </header>
    );
  }

  linkUp(){
    return(<ReactLink/>)
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);