import React from 'react';
import Socials from '../../components/social.js';
import './artview.css';

export default class ArtView extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            
        };
    }

    render(){
        return(
            <div className = "artBody">
                
                <h1>Danadragoness</h1>

                <img src="500x.gif"></img>

                <Socials/>
            </div>
        )
    }
}





