import React from 'react';

export default class Widgets extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            
        };
    }

    render(){
        return(
            <div className = "titleBox">
                {this.renderBolts()}
                

            </div>
        )
    }

    renderBolts(){
        let listItems = []
        for(let i = 0 ; i < 5 ; ++i){
            listItems.push(<img src={"bolt-black.gif"} alt={"lighting bolt icon"} width={i*30}/>)
        }
        for(let i = 5 ; i >= 0 ; --i){
            listItems.push(<img src={"bolt-black.gif"} alt={"lighting bolt icon"} width={i*30}/>)
        }
        
        return <React.Fragment>{listItems}</React.Fragment>
    }
}





