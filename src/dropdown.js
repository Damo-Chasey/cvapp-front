import React from 'react';
import Tabs from './tab.js'

class Dropdrown extends React.component{

  handleOpen = () => {
    setOpen(!open); 
  };

  render() {
    <div>
      <ul>
        <div onClick={this.handleOpen}><img src={"burgor64blue.png"} alt={"burger menu"}/></div>
      </ul>
    </div>
  };
};

export default Dropdown;