import React from 'react';


class Homepage extends React.Component{
    //constructor (props){
    //    super(props)
    //    this.state = {
    //        checked: false,
    //    };
//
    //    this.handleChange = this.handleChange.bind(this);
    //}

    //handleChange(){
    //    this.setState({checked: !checked});
    //}
    
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
                    
                </div>
            </div>
        )
    }
}

export default Homepage;
//
//<input
//                        type="checkbox"
//                        checked={checked}
//                        onChange={handleChange}    
//                    />