import firebase from './firebase';
import {useState, useEffect} from 'react';
import './Plant.css';
import { useLottie } from "lottie-react";
import animation from "./newdata.json";

function PlantTree () {
    const dbRef = firebase.database().ref(); // declaring db ref

    const [userInput, setUserInput] = useState();

    const handleChange = (event) => {
        setUserInput(event.target.value)
      }

    const handleClick = (e) => {
        e.preventDefault();
        dbRef.push(userInput);

        // 
      }

      const options = {
        loop: false,
        autoplay: true,
        animationData: animation,
      };
      const style = {
        height: 300,
      };
      const { View } = useLottie(options, style)

      // const handleAnimation = () => {
      //   animation.playSegments([0,60], true);
      // }

      // useEffect(() => {
      //   lottie.loadAnimation({
      //     container: document.querySelector("#tree-animation"),
      //     animationData: newdata
      //   });
      // }, []);
    

    return(
            <section className="App-plant-tree">
              <form action="submit">
                <label htmlFor="planterName">Please enter your name</label>
                <input onChange={handleChange} placeholder="Your name" type="text" id="planterName" value={userInput} required="required"/>
                <button class="button"onClick={handleClick}>Plant a Tree</button>
                {/* <div id="tree-animation" style={{ width: 200, height: 200 }}>
                </div> */}
                {/* <useLottie options={animation} style={{ width: 200, height: 400 }}/> */}
                { View }
              </form>
            </section>
    )
}

export default PlantTree