import React from 'react';
import Tabs from './tab.js'

const Dropdown = (props) => {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  return(
    <div>
      <ul>
        <div onClick={handleOpen}><img src={"burgor64blue.png"} alt={"burger menu"}/></div>
      </ul>
      <ul>
        <div>
          <Tabs isOpen={open}/>
        </div>
      </ul>
    </div>
  );
};

export default Dropdown;