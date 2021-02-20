//🌟 Character component
// Import React
import React from 'react';

const Character = props => {
    const {character} = props;
    return (
        <div>
            <p className="characterName">{character.name}</p>
            <p className="characterBorn">{character.birth_year}</p>
        </div>
    )
}
export default Character;

// TODO data I eventually want to select for in App.js helper f: {name}{species}{homeworld}

//TODO styling