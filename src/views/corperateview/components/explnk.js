import React from 'react';

class ReactLink extends React.Component{
    constructor(props){
      super(props);
      this.state = {apiResponse: ""};
    }
  
    callAPI(){
      fetch("http://3.26.130.133:3001/")
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}))

      if (this.state.apiResponse === ""){
        this.setState({apiResponse: "Failed to mount API: Switching from Mongo to AWS"})
      }
    }
    
    componentWillMount() {
      this.callAPI();
    }
    
    render(){
      return(
        <div>
          <p>{this.state.apiResponse}</p>
        </div>
      );
    }
  }

  export default ReactLink;