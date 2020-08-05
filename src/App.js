import React, {useEffect, useState}from 'react';
import './App.css';
import axios from 'axios';
import CharacterCardCreator from './components/CharcterCardCreator.js'
import { Spinner, Button } from 'reactstrap';
import showMe from './images/show-me.png'
function App() {
  const [data, setData] =  useState([]);
  const [query, setQuery] = useState("1");
  const [IQ, setIQ] = useState(180);



  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/" + query)
        .then(res => {
          console.log(res)
          setData(res.data)
        })
        .catch(error =>{
          console.log("Error: ", error);
        })
    };
    fetchData();
  }, [query]);
  if(Object.keys(data).length == 0){
    return <Spinner style={{ width: '6rem', height: '6rem' }} />
  }
  return (  
    <div className="App">
      <div className="header">
        <img src={showMe} alt="Beg head" width="100px" height="100px"/>
        <h2>Show Me What You Got!</h2>
      </div>
      <div className="game">
        <h1>Dead or Alive?</h1>
        <div className="Character-Card">
          <CharacterCardCreator
            image={data.image}
            name={data.name}
            species={data.species}
            gender={data.gender}
            location={data.location.name}
            origin={data.origin.name}>
          </CharacterCardCreator>
        </div>
        <div className="buttons">
          <Button color="success" onClick={()=>{
            if(data.status == "Alive"){
              setIQ(IQ + randomNumber(10))
            }
            else{
              setIQ(IQ - randomNumber(10))
            }
            setQuery(randomNumber(591))
            }}>Alive</Button>
          <p>OR</p>
          <Button color="danger" onClick={()=>{
            if(data.status == "Dead"){
              setIQ(IQ + randomNumber(10))
            }
            else{
              setIQ(IQ - randomNumber(10))
            }
            setQuery(randomNumber(591))
            }}>Dead</Button>
        </div>
        <h3>IQ = {IQ}</h3>
      </div>
    </div>
  );
}
function randomNumber(max){
  return Math.floor(Math.random() * max) + 1;
}
export default App;
