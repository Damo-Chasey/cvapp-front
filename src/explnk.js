import React from 'react';

class ReactLink extends React.Component{
    constructor(props){
      super(props);
      this.state = {apiResponse: ""};
    }
  
    callAPI(){
      fetch("https://desolate-eyrie-13469-959621a3e284.herokuapp.com/")
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