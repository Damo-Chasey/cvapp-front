import React from 'react';

function Tab(props) {
    return(
        <p className="nav-link" onClick={props.onClick}>{props.name}</p>
    );
}

export default class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            styleSheet: this.props.styleSheet,
            open: props.isOpen,
        };
    }

    renderTab(i){
        return(
            <Tab onClick={() => this.handleOpen(i)} name={this.props.tabs[i].name}/>
        );
    }

    handleOpen(i){
        this.props.actions.flipValue(i); 
        console.log("Item picked " + this.props.tabs[i].name);
    }

    render(){
        return(
            <div className={"nav-bar" + this.props.styleSheet}>        
                {this.props.isOpen ? (
                    <div>
                        <ul className={"nav-tabs" + this.props.styleSheet}>
                            <li>{this.renderTab(0)}</li>
                            <li>{this.renderTab(1)}</li>
                            <li>{this.renderTab(2)}</li>
                        </ul>
                    </div>
                ) : null}
            </div>
        )
    }
}