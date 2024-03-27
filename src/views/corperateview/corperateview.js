import React from 'react';
import Socials from '../../components/social.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './corperateview.css';
import Tabs from './components/tab.js'
import NavBar from './components/navbar.js';

export default class CorperateView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      checked: false,
      dropOpen: true,
      styleCheck: false,
      styleSheet: "",
      view: "corperate",
      tabs:[
        {name: "Home", isOpen: false},
        {name: "Database", isOpen: false},
        {name: "Widgets", isOpen: true},
      ],
    }

    this.flipValue = this.flipValue.bind(this)
  } 
    handleDropOpen = () => {
      this.setState({dropOpen: !this.state.dropOpen});
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
        <div>
        <NavBar tabs={this.state.tabs} 
          styleSheet={this.state.styleSheet} 
          isOpen={true}
          actions={{flipValue: this.flipValue}}/>
        </div>
      </div>
    )
  }

  corperateViewBody(){
    return(
      <div className={"mainBody" + this.state.styleSheet}>
         
          <div className={"indexBody" + this.state.styleSheet}>
              <Tabs tabs={this.state.tabs} 
              styleSheet={this.state.styleSheet} 
              isOpen={true}
              actions={{flipValue: this.flipValue}}/>

              

              {this.props.checked === true ? <img src={"bolt-black.gif"} alt={"lighting bold icon"}/> : null}
          </div>

      </div>
    );
  }

  corperateView(){
    return(
      <div>
        {this.renderHeader()}
        {this.corperateViewBody()}
      </div>
    )
  }

  render(){
    return(
        <div>
          {this.state.view === "corperate" ? this.corperateView() : null}
        </div>
      );
  }
}