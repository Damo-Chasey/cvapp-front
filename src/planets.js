import React from 'react';

function Planets() {
    const planets = [
      { name: "Mars", isGasPlanet: false },
      { name: "Earth", isGasPlanet: false },
      { name: "Jupiter", isGasPlanet: true },
      { name: "Venus", isGasPlanet: false },
      { name: "Neptune", isGasPlanet: true },
      { name: "Uranus", isGasPlanet: true },
    ];
  
    return (
        <div className="Planets">
        <ul>
            {planets.map((planets, key) => {
                return(
                    <li key={key}> <Planet name={planets.name} isGasPlanet={planets.isGasPlanet}/></li>
                );
            })}
        </ul>
        </div>
    );
  }

  const Planet = (props) => {
    return(
        <div className="Planets">
            {props.name} 
            {props.isGasPlanet === true ? <p>Gas planet!</p> : <p> No gas</p>}
        
        </div>
    );
  }

  export default Planets;