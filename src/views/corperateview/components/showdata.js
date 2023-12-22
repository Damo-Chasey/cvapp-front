import React, {useState, useEffect} from 'react';

export function ShowData() {
    const [name, setName] = useState([]);

    useEffect(() => {
        names()
    }, [])

    const names = async () => {
        const response = await fetch('http://13.239.20.181:3001/users');
        console.log("Fetched entries");

        setName(await response.json());
    }

    return(
        <div className={"showData"}>
            {console.log("Displaying entries")}
            
                {name.map((data) => (
                    <div key={data._id}>
                        <li>
                            {data.name} {data.colour}
                        </li>
                    </div>
                ))}
            
        </div>
    );
};

