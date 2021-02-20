//🌟 Character component
// Import React, styles
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
font-weight: bold;
color: orange;
`

const Character = props => {
    const {character} = props;
    return (
        <StyledCharacter>
        <div>
            <p className="characterName">{character.name}</p>
            <p className="characterBorn">{character.birth_year}</p>
        </div>
        </StyledCharacter>
    )
}
export default Character;

// TODO data I eventually want to select for in App.js helper f: {name}{species}{homeworld}

//TODO styling