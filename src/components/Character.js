//🌟 Character component
// Import React, styles
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
.characterName {
    font-weight: bold;
    color: #D6E1EB;
    align-items: center;
}

.characterBorn {
    color: #CEB598;
}

hr {
    width: 75%;
}

`

const Character = props => {
    const {character} = props;
    return (
        <StyledCharacter>
        <div>
            <div className="characterName">{character.name}</div>
            <div className="characterBorn">Born: {character.birth_year}</div>
            <hr />
        </div>
        </StyledCharacter>
    )
}
export default Character;

// TODO data I eventually want to select for in App.js helper f: {name}{species}{homeworld}

//TODO styling