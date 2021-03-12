import React, { useState, useEffect } from 'react';
import heroService from '../services/heroes';

const Details = (props) => {

    const [hero, setHero] = useState(null);
    const goBack = () => {
        props.history.goBack();
    };

    useEffect(() => {
        const id = props.match.params.id;
        let h = heroService.getHero(id);
        setHero(h);
    }, []);

    return !hero ? (
        <div>Loading...</div>
    ) : (
        <div>
            <div>
                <button onClick={goBack}> Go Back </button>
            </div>
            <div>
                <h2>{hero.name} Details:</h2>
                <div><span>ID: {hero.id}</span></div>
                <div><span>Name:</span></div>
                <input type="text" value={hero.name} onChange={event => setHero({name: event.target.value})}/>
            </div>    
        </div>
    )
}

export default Details;