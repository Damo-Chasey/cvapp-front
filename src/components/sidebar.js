import React from 'react';

export default class SideBar extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      styleSheet: this.props.styleSheet,
    };
  }

  buttonText = () => {
    var viewText = this.props.view;
    if(viewText === "art"){
      viewText = "corperate"
    }else{
      viewText = "art"
    }
    return viewText;
  }

  render(){
    return(
      <div className="sidebar">        
        <ul>
          <li>
            <button>
              <a href="https://github.com/Damo-Chasey/cvapp"><p>Github for this project:</p><img 
                src="gitlogo.png" width="30px" alt="github logo"></img></a>
            </button>
          </li>
          <li>
            <button onClick={this.props.actions.changeView}><p>Change to {this.buttonText()} view </p></button>
          </li>
        </ul>
      </div>
    )
  }
}

//<button>
//              <p>Check this box to activate the bolt widget! </p>
//              <input
//                type="checkbox"
//                checked={this.state.checked}
//                onChange={this.props.actions.changeValue}    
//              />
//            </button>