import React from 'react';
import Socials from './social.js';

export default class SideBar extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            styleSheet: this.props.styleSheet,
        };
    }

    render(){
        return(
            <div className={"sidebar" + this.props.styleSheet}>        
                <ul>
                    <li>
                      <p>Check this box to change the style! </p>
                        <input
                          type="checkbox"
                          checked={this.state.styleCheck}
                          onChange={this.props.actions.changeStyle}    
                        />
                    </li>
                    <li>
                      <p>Check this box to activate the bolt widget! </p>
                        <input
                          type="checkbox"
                          checked={this.state.checked}
                          onChange={this.props.actions.changeValue}    
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
            </div>
        )
    }
}