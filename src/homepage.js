import React from 'react';
//import CheckBox from './tickbox.js';

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked: false
        }

        this.changeValue = this.changeValue.bind(this);
    }
    
    changeValue = () => {
        this.setState({checked: !this.state.checked});
    }

    render() {
        return(
            <div>  
                <div className="titleBox">
                    <h3>Damien H.</h3>
                    <h4>Software Developer</h4>
                    <p>Hi! My name is Damien, I am a graduate developer located in auckland</p>
                    <p>I made this React website as a demonstration of some of my ability to write 
                    applications in React with an Express API back-end.</p>
                </div>
                <div>
                    
                    <div>
                        <input
                        type="checkbox"
                        checked={this.state.checked}
                        onChange={this.changeValue}    
                        />
                    </div>

                    {this.state.checked === true ? <p>Checkbox has been checked!</p> : null}
                </div>
            </div>
        )
    }
}

export default Homepage;

//<CheckBox inputValue={this.state.checked} onChange={this.changeValue}/>