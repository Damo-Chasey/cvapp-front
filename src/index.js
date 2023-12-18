//import { Route, Redirect, Switch } from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactLink from './explnk.js';
import Socials from './components/social.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import Tabs from './tab.js'
import NavBar from './navbar.js';
import SideBar from "./components/sidebar.js"

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
    this.changeStyle = this.changeStyle.bind(this)
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

  renderHeader(){
    return( 
      <div className="header">
        <div className={"dropDown" + this.state.styleSheet}>
          <div onClick={this.handleDropOpen}><img src={"burgor64blue.png"} alt={"burger menu"}/></div>
          {this.state.styleCheck === true ? this.linkUp() : null}
        </div>

        <div>
        <NavBar tabs={this.state.tabs} 
          styleSheet={this.state.styleSheet} 
          isOpen={true}
          actions={{flipValue: this.flipValue}}/>
        </div>
      </div>
    )
  }

  extraButtons(){
    return(
      <ul>
        <li>
          <p>Check this box to change the style! </p>
            <input
              type="checkbox"
              checked={this.state.styleCheck}
              onChange={this.changeStyle}    
            />
        </li>
        <li>
          <p>Check this box to activate the bolt widget! </p>
            <input
              type="checkbox"
              checked={this.state.checked}
              onChange={this.changeValue}    
            />
        </li>
        <li>
          <a href="https://github.com/Damo-Chasey/cvapp"><p>Github for this project:</p><img 
            src="gitlogo.png" width="30px" alt="github logo"></img></a>
        </li>
        <li>
          {this.state.styleCheck === true ? <Socials/> : null}
        </li>
      </ul>
    )
  }

  corperateView(){
    return(
      <body className={"mainBody" + this.state.styleSheet}>
          {this.state.dropOpen === true ? 
            <SideBar styleSheet={this.state.styleSheet}
            actions=
              {{changeStyle: this.changeStyle,
              changeValue: this.changeValue}}/> 
            : null}

          

          <div className={"indexBody" + this.state.styleSheet}>
              <Tabs tabs={this.state.tabs} 
              styleSheet={this.state.styleSheet} 
              isOpen={true}
              actions={{flipValue: this.flipValue}}/>

              {this.state.styleCheck === false ? this.linkUp() : null}

              {this.state.checked === true ? <img src={"bolt-black.gif"} alt={"lighting bold icon"}/> : null}
          </div>

      </body>
    );
  }

  artView(){
    return(
      <Socials/>
    );
  }

  render(){
    return(
        <div>
          {this.renderHeader()}
          {this.corperateView()}
        </div>
      );
  }

  linkUp(){
    return(<ReactLink styleSheet={this.state.styleSheet}/>)
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);