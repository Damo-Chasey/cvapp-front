import React from 'react';

class Info extends React.Component{
    render() {
        return(
            <div className="windowsContent">  
                <object data="Resume v2.pdf" type="application/pdf" title="Resume" width="100%" height="1000px"/>
            </div>
        )
    }
}

export default Info;