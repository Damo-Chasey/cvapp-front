import React, {useState, useEffect} from 'react';

export function ShowData() {
    const [name, setName] = useState([]);

    useEffect(() => {
        names()
    }, [])

    const names = async () => {
        const response = await fetch('https://desolate-eyrie-13469-959621a3e284.herokuapp.com/users');
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

