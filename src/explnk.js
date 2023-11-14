import React from 'react';

class ReactLink extends React.Component{
    constructor(props){
      super(props);
      this.state = {apiResponse: ""};
    }
  
    callAPI(){
      fetch("https://cvapp-back2-6c82f98e0687.herokuapp.com/")
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}))

      if (this.state.apiResponse === ""){
        this.setState({apiResponse: "Failed to mount API"})
      }
    }
    
    componentWillMount() {
      this.callAPI();
    }
    
    render(){
      return(
        <div>
          <p className="express-link">{this.state.apiResponse}</p>
        </div>
      );
    }
  }

  export default ReactLink;