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
                <h5>Widgets!</h5>
                <p>Now in blue</p>
                <div className="widgets">
                    <div className="widgetList">{this.renderBolts()}</div>
                </div>
            </div>
        )
    }

    renderBolts(){
        let listItems = []
        for(let i = 0 ; i < 1 ; ++i){
            listItems.push(<img src={"bolt-black.gif"} alt={"lighting bolt icon"}/>)
        }
        
        
        return <div className="widget">{listItems}</div>
    }
}





