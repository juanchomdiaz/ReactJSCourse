import React from 'react';

const Clima = ({resultado}) => {

    const {name, main} = resultado;

    if(!name) return null;

    //convert to celcius

    const kelvin = 273.15;

    return ( 
        <div className="card-panel white col s12">
            <h2>El clima en {name} es:</h2>
            <p className="temperatura">
                {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
            </p>
            <p>
                Temp. Max: {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
            </p>
            <p>
                Temp. Min: {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
            </p>
        </div>        
     );
}
 
export default Clima;