import './App.css';
import PlantTree from './PlantTree';
import Planters from './Planters';

function App() {

  



  return (
    <div className="App">
      <header className="App-header">
        <h1>Tree Planter</h1>
        <h3>Plant a tree to curb the effects of climate change</h3>
      </header>
      <PlantTree>
      </PlantTree>
      <Planters/>
      <footer>
        <p>Created by Barish Bozkurt at Juno College</p>
      </footer>
    </div>
  );
}

export default App;
