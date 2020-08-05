import React from 'react';
import { Card } from 'reactstrap';
function CharacterCardCreator(props){
    console.log(props);
    const {image, name, species, gender, location, origin} = props;
    return(
        <Card className="mb-3 text-white bg-dark text-left" style={{"maxWidth": "540px"}}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={image} className="card-img" alt={name}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{`Species: ${species}, Gender: ${gender}`}</p>
                
                <p className="card-text">{`Last Seen: ${location}`}<br/> {`First Seen: ${origin}`}</p>
              </div>
            </div>
          </div>
        </Card>
    )
}

export default CharacterCardCreator;
/*
            <ButtonGroup>
            <Button color="success">Alive</Button>
            <Button color="danger">Dead</Button>
            </ButtonGroup>
*/