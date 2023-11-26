import React from 'react';

const CheckBox = (props) => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = () => {
        setChecked(!checked);
        props.changeValue(checked);
    }
    return(
        <div>
            <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}    
            />
            {checked === true ? <p>Checkbox has been checked! component</p> : null}  
        </div>
    );
};

export default CheckBox;