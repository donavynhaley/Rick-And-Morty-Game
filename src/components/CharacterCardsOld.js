import React from 'react';
import CharacterCardCreator from './CharcterCardCreator.js';
function CharacterCards(props){
    const {data}=props;
    console.log(data)
    const firstC = data[0];
    return(
        <div>
        {
            data.map((character)=>{
                return<div className="Character-Card">
                <CharacterCardCreator
                    image={character.image}
                    name={character.name}
                    species={character.species}
                    gender={character.gender}
                    location={character.location.name}
                    origin={character.origin.name}>
                </CharacterCardCreator>
            </div>
            })
        }
        </div>
    )
}
export default CharacterCards;