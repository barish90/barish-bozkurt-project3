import firebase from './firebase';
import { useEffect, useState} from 'react'
import './App.css';

const dbRef = firebase.database().ref(); // declaring db ref
const storageRef = firebase.storage().ref(); // declaring storage ref


function App() {
  return (
    <div className="App">
      <header className="App-header">
     <h1>Tree Planter</h1>
      </header>
    </div>
  );
}

export default App;
