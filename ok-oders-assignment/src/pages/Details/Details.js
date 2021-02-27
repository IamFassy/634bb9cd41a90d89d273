import React, { useEffect, useState } from 'react';
import './Details.css';

const Details = (props) => {
    const [details, setDetails] = useState([])
    useEffect(() => {
        setDetails(props.location.details)
    }, [])

    console.log(details);

    return (
        <div className="details-container">
            {details &&
                <div className="details-view">
                    <p>Asteroid Name : <span>{details?.name}</span></p>
                    <p>Nasa JPL URL :  <span>{details?.nasa_jpl_url}</span></p>
                    <p>Is the asteroid potentially hazardous ? <span>{details?.is_potentially_hazardous_asteroid === false ? "No" : "Yes"}</span></p>
                </div>
            }
            {!details && <p>No details found. <a href="/">Go To Home.</a> </p>}
        </div>
    )
};


export default (Details);
