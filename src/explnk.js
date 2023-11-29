import React from 'react';

class ReactLink extends React.Component{
    constructor(props){
      super(props);
      this.state = {apiResponse: ""};
    }
  
    callAPI(){
      fetch("http://13.239.20.181:3001/")
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}))

      if (this.state.apiResponse === ""){
        this.setState({apiResponse: "Failed to mount API, this may be due to AWS migration, try: http://54.206.75.134:3000/"})
      }
    }
    
    componentWillMount() {
      this.callAPI();
    }
    
    render(){
      return(
        <div>
          <p className={"express-link" + this.props.styleSheet}>{this.state.apiResponse}</p>
        </div>
      );
    }
  }

  export default ReactLink;