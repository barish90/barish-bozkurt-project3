import firebase from './firebase';
import { useState } from 'react';
import './Plant.css';
import Lottie from "lottie-react"; // importing Lottie library
import animation from "./newdata.json"; //importing animation file

function PlantTree () {
    const dbRef = firebase.database().ref(); // declaring db ref

    // use state to take userinput
    const [userInput, setUserInput] = useState(''); 
    // useState to set animation to run
    const [showAnimation,  setShowAnimation] = useState(false) 

    // function to handle the change on input field
    const handleChange = (event) => {
        setUserInput(event.target.value)
      }

    // function to handle the click event  
    const handleClick = (e) => {
        e.preventDefault();
        dbRef.push(userInput);
        setShowAnimation(true);
        setUserInput('');
      }

    return(
            <section className="App-plant-tree">
              <div className="about">
                <h2>Why we need to save tress?</h2>
                <p>Trees help clean the air we breathe, filter the water we drink, and provide habitat to over 80% of the world's terrestrial biodiversity. They also provide jobs to over 1.6 billion people, absorb harmful carbon from the atmosphere, and are key ingredients in 25% of all medicines.</p>
                <p>We are dedicated to making it easier for individuals and businesses to give back to the environment, create a healthier climate, protect biodiversity and help reforestation efforts around the world. All by planting trees!</p>
                <h3>Plant a tree by filing out the from below</h3>
              </div>
              <form onSubmit={handleClick}>
                <label htmlFor="planterName">Please enter your name</label>
                <input onChange={handleChange} placeholder="Your name" type="text" id="planterName" value={userInput} required/>
                <button type="submit" className="button">Plant a Tree</button>
                
                {/* code to show the animation when button is clicked  */}
                {
                showAnimation ? <div className="animation"><Lottie animationData={animation} loop={false} style={{ width: 200, height: 200, marginTop: 40, paddingLeft: 150 }}/><p className="fadeInUp">Thank you for helping us to save our planet</p> </div> : <div className="animation"></div>
                }
              </form>
            </section>
    )
}

export default PlantTree