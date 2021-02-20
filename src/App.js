//🌟 Import React, State hook, and Character component
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Character from './components/Character';
import './App.css';

const App = () => {
  
  // Fetch characters from the API in an effect hook
  const [data, setData] = useState(null);
  // TODO Helper function to prune data would go here (Stretch)
  /*
    const dataSelector = (data) => {
    return data.map((item) => {
    call API for species, homeworld
    })
  }
  */
  useEffect(() => {
      axios
      .get(`https://swapi.dev/api/people/`)
      .then(res => {
        setData(res.data) //TODO call helper function to prune data: setData(dataSelector(res.data))
      })
      .catch(err => {
        console.log('Hmm, something went wrong!');
      })
      return () => {}
  }, []);
  
  // Display a loading message while the data is fetching
  if (!data) {
    return <h3>Long ago, in a galaxy far, far away...</h3>;
  } else {
    // Display component as intended after the data has been fetched
    return (
      <div className="App">
        <h1 className="Header">Characters</h1>
        {
          //Map over characters API & for each character render a Character to the page
          data.map((character) => {
            return <
              Character
              key={character.id}
              character={character} 
            />
          })
        }
      </div>
    );
  }  
}
export default App;
