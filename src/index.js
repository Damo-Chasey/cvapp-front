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
      dropOpen: true,
      styleCheck: false,
      styleSheet: "",
      tabs:[
        {name: "Home", isOpen: true},
        {name: "Database", isOpen: false},
        {name: "Resume", isOpen: false},
      ],
    }

    this.flipValue = this.flipValue.bind(this)
  } 
    handleDropOpen = () => {
      this.setState({dropOpen: !this.state.dropOpen});
    }

    changeValue = () => {
      this.setState({checked: !this.state.checked});
    }

    changeStyle = () => {
      this.setState({styleCheck: !this.state.styleCheck});
      if(this.state.styleCheck === false){
        this.setState({styleSheet: "red"});
      }else{
        this.setState({styleSheet: ""});
      }
    }

    flipValue(i){
      this.setState(prevState => {
          const newArray = [prevState.tabs];
          for(let j = 0 ; j < 3 ; ++j){
              newArray[0][j] = {name: newArray[0][j].name, isOpen: false};
          }
          newArray[0][i] = {name: newArray[0][i].name, isOpen: !newArray[0][i].isOpen};
          return {array: newArray[0]};
      });
  }

  render(){
    return(
      <body className={"body" + this.state.styleSheet}>
         
          <div className={"indexBody" + this.state.styleSheet}>

              <div className={"dropDown" + this.state.styleSheet}>
                <div onClick={this.handleDropOpen}><img src={"burgor64blue.png"} alt={"burger menu"}/></div>
                {this.state.styleCheck === true ? this.linkUp() : null}
              </div>

              <li>
                <Tabs tabs={this.state.tabs} 
                styleSheet={this.state.styleSheet} 
                isOpen={this.state.dropOpen}
                actions={{flipValue: this.flipValue}}/>
              </li>
          </div>

          <div className={"freefloat" + this.state.styleSheet}>
            <div>
              <div>
                <p>Check this box to activate the bolt widget! </p>
                <input
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.changeValue}    
                />
              </div>

              <div>
                <p>Check this box to change the style! </p>
                <input
                    type="checkbox"
                    checked={this.state.styleCheck}
                    onChange={this.changeStyle}    
                />
              </div>

            <div>
              <p>Github for this project:</p><a href="https://github.com/Damo-Chasey/cvapp"><img 
              src="gitlogo.png" width="30px" alt="github logo"></img></a>
            </div>

            <div>
              {this.state.styleCheck === false ? this.linkUp() : null}
            </div>

            <div>
              {this.state.checked === true ? <img src={"bolt-black.gif"} alt={"lighting bold icon"}/> : null}
            </div>
          </div>
          
        </div>
      </body>
    );
  }

  linkUp(){
    return(<ReactLink styleSheet={this.state.styleSheet}/>)
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);