import firebase from './firebase';
import { useEffect, useState} from 'react'
import './Planters.css';


const dbRef = firebase.database().ref(); // declaring db ref

function Planters() {
    const [planters, setPlanters] = useState([]);

    useEffect( () => {
      dbRef.on('value', (response) =>{
  
        const newArray = [];
  
        const data = response.val()
  
        for (let key in data) {
          // we need the key and the book name value 
          // the key will tell firebase which specific book we want to remove
          newArray.push({ name: data[key]})
        }
        // update state with SetBooks and the newState array
        setPlanters(newArray)
      })
  }, [])
    return(
        <section className="planters">
          <h2>Previous Tree Planters</h2>
        <ul>
        {
          planters.map(planter => {
            return(
              <li key={planter.key}>
                {planter.name}
              </li>
            )
          })
        }
      </ul>
      </section>
    )
}
export default Planters