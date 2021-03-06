import './App.css';
import PlantTree from './PlantTree';
import Planters from './Planters';
import bg from './images/bg.mp4'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <video autoPlay loop muted>
          <source src={bg} type="video/mp4"/>
        </video>
      </header>
      <div className="content">
        <h1>Tree Planter</h1>
        <p>Plant a tree to curb the effects of climate change</p>
      </div>
      <PlantTree />
      <Planters />
      <footer>
        <span> &copy; Created at Juno College by</span> <a href="http://bbozkurt.com"> Barish Bozkurt</a>
      </footer>
    </div>
  );
}

export default App;
