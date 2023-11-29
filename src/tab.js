import React from 'react';
import DBWindow from './dbwindow.js';
import Info from './info.js';
import Homepage from './homepage.js'

function Tab(props) {
    return(
        <p className="nav-link" onClick={props.onClick}>{props.name}</p>
    );
}

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            styleSheet: this.props.styleSheet,
            tabs:[
            {name: "Home", isOpen: true},
            {name: "Database", isOpen: false},
            {name: "Resume", isOpen: false},
        ],
        open: props.isOpen,
        };
    }

    render(){
        return(
            <div>
                
                {this.props.isOpen ? (
                    <div>
                        {console.log(this.props.styleSheet)}
                        <ul className={"nav-tabs" + this.props.styleSheet}>
                            <li>{this.renderTab(0)}</li>
                            <li>{this.renderTab(1)}</li>
                            <li>{this.renderTab(2)}</li>
                        </ul>
                    </div>
                ) : null}
                
                <div className={"windows" + this.props.styleSheet}>
                    {this.renderWindow(0)}
                    {this.renderWindow(1)}
                    {this.renderWindow(2)}
                </div>
                
            </div>
            
        );
    }

    renderTab(i){
        return(
            <Tab onClick={() => this.handleOpen(i)} name={this.state.tabs[i].name}/>
        );
    }
    
    renderWindow(i){
        return(
            <div>
                {this.state.tabs[i].isOpen && i === 0 ? (
                    this.window0()
                ) : null}
                {this.state.tabs[i].isOpen && i === 1 ? (
                    this.window1()
                ) : null}
                {this.state.tabs[i].isOpen && i === 2 ? (
                    this.window2()
                ) : null}
            </div>
            
        );
    }

    handleOpen(i){
        this.flipValue(i); 
        console.log("Item picked " + this.state.tabs[i].name);
    }
    
    flipValue(i){
        this.setState(prevState => {
            const newArray = [prevState.tabs];
            for(let j = 0 ; j < 3 ; ++j){
                newArray[0][j] = {name: newArray[0][j].name, isOpen: false};
            }
            newArray[0][i] = {name: newArray[0][i].name, isOpen: this.boolFlip(newArray[0][i].isOpen)};
            return {array: newArray[0]};
        });
        this.render();
    }

    boolFlip(bool){
        let out = bool;
        out === true ? out = false : out = true;
        return out;
    }

    window0(){
        return(
            <Homepage styleSheet={this.props.styleSheet}/>
        );
    }

    window1(){
        return(
            <DBWindow styleSheet={this.props.styleSheet}/>
        );
    }

    window2(){
        return(
            <Info styleSheet={this.props.styleSheet}/>
        );
    }
}

export default Tabs;