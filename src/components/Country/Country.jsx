
import { useState } from 'react';
import './Country.css'
const Country = ({country , handleVisitedCountries , handleVisitedCountryFlags}) => {
    const {name,flags,population,area,cca2} = country;
    const buttonStyle ={
        border:"2px solid skyblue",
        marginTop:"10px",
        marginRight:'10px'
    }
    
    const [visited,setVisited] =useState(false);
    const handleVisited =()=>{
        setVisited(!visited)
    }

    return (
        
        <div className={ `country ${visited && 'visited' }`} >
            <h3 style={{color: visited ? 'black' : 'purple'}} >Name : {name.common}</h3>
            <img style={{height:'70px'}} src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <small>Code: {cca2}</small><br />
             
            <button onClick={()=>handleVisitedCountryFlags(country)} style={buttonStyle}>Add Flag</button>
            <button onClick={()=>handleVisitedCountries(country)} style={buttonStyle}>Add to visited</button>
            <button onClick={handleVisited} style={buttonStyle}>{visited?'visited':'going'}</button>
            {visited?' I have visited':' I want to visit'}

        </div>
    );
};

export default Country;