import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import './Home.css';
import { create } from 'apisauce';
import { baseUrl, getDetails, getRandomId } from '../../apimanager/Endpoints';
import { useDispatch } from 'react-redux';
import { getAsteroidDetails } from '../../reduxclasses/actions/AsteroidActions';


const api = create({
    baseURL: baseUrl
})

const Home = (props) => {
    const dispatch = useDispatch();
    let history = useHistory();
    const [asteroidId, setAsteroidId] = useState("");



    const handleAsteroidId = (e) => {
        setAsteroidId(e.target.value)
    }

    const handleSubmit = () => {
        fetchAsteroidDetails(asteroidId)
    }

    const fetchRandomId = () => {
        api.get(getRandomId)
            .then((res) => {
                const { data } = res
                if (res.status === 200) {
                    console.log(res, "res");
                    if (data.near_earth_objects.length > 0) {
                        fetchAsteroidDetails(data.near_earth_objects[0].id)
                    }
                }

                else {
                    alert("There was an error fetching random id.")
                }
            })
            .catch((err) => {
                console.log(err, "err");
            })
    }

    const fetchAsteroidDetails = (id) => {
        api.get(id + getDetails)
            .then((res) => {
                const { data } = res;
                if (res.status === 200) {
                    dispatch(getAsteroidDetails(data))
                    history.push({
                        pathname: "/details",
                        details: data
                    })
                }
                else if (res.status === 404) {
                    alert("No asteroids exists for the given id.")
                }
                else {
                    alert("There was an error fetching random id.")
                }
            })
            .catch((err) => {
                console.log(err, "err");
            })
    }


    return (
        <div className="home-container">
            <div className="home-form" >
                <div className="home-input">
                    <input placeholder="Enter Asteroid ID" value={asteroidId} onChange={(e) => handleAsteroidId(e)} />
                    <button onClick={() => fetchRandomId()} >Random Asteroid</button>
                </div>

                <button disabled={asteroidId.length === 0} className={asteroidId.length === 0 ? "submit-disabled" : "submit-button"} type="button" onClick={() => handleSubmit()}>Submit</button>
            </div>
        </div>
    )
}

export default Home;
