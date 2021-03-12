import React, { useState, useEffect } from 'react';
import Details from './Details';
import heroService from './../services/heroes';
import { Link } from 'react-router-dom';

const Heroes = () => {
    const heroes = heroService.getHeroes();
    return (
        <div>
            <ul className="heroes">
                {heroes.map((h, i) => (
                    <Link to={`/details/${h.id}`}>
                    <li onClick={() => setSelected(h)} >
                        <span key={i} className="badge">{h.id}</span> {h.name}
                    </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Heroes;