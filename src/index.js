//import { Route, Redirect, Switch } from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom/client';
import ArtView from './views/artview/artview.js';
import CorperateView from './views/corperateview/corperateview.js';
import './index.css'; 
import SideBar from "./components/sidebar.js"


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      view: "art",
      checked: false,
      dropOpen: false,
      checked: false,
    }
    this.changeView = this.changeView.bind(this)
  } 

  handleDropOpen = () => {
    this.setState({dropOpen: !this.state.dropOpen});
  }

  changeValue = () => {
    console.log("attempting to change value");
    this.setState({checked: !this.state.checked});
  }

  changeView = () => {
    console.log("attempting to change veiw");
    var curView = this.state.view;
    if(curView === "art"){
      curView = "corperate"
    }else{
      curView = "art"
    }
    this.setState({view: curView});
  }

  render(){
    return(
        <div className="mainBody">
          
            <button className={"dropDown"} onClick={() => this.handleDropOpen()}><img src={"burgor64.png"} alt={"burger menu"}/></button>
          
          
            {this.state.dropOpen === true ? 
              <SideBar 
                
                view={this.state.view}
                actions=
                {{
                changeValue: this.changeValue,
                changeView: this.changeView}}/> 
            : null}

            <div className="contentArea">
              {this.state.view === "corperate" ? <CorperateView
                checked={this.state.checked}/> : null}
              {this.state.view === "art" ? <ArtView/> : null}
            </div>
        </div>
      );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);