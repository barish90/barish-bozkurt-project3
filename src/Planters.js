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
          newArray.push({ key: key, name: data[key]})
        }
        setPlanters(newArray)
      })
  }, [])
    return(
        <section className="planters">
            <h2>Global forest watch map</h2>
          <div className="mapcontainer">
          <iframe className="map" width="10240" height="590" frameborder="0" padding="0" src="https://www.globalforestwatch.org/embed/map/?map=eyJjZW50ZXIiOnsibGF0Ijo0My44MjY0MTUzMTY4MTY3LCJsbmciOjEzLjM5NTI3MzMzNzQ1Njc0MX0sImJib3giOm51bGwsImNhbkJvdW5kIjpmYWxzZSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJ0cmVlLWNvdmVyLWdhaW4iLCJsYXllcnMiOlsidHJlZS1jb3Zlci1nYWluLTIwMDEtMjAxMiJdLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlfSx7ImRhdGFzZXQiOiJ0cmVlLWNvdmVyLWxvc3MiLCJsYXllcnMiOlsidHJlZS1jb3Zlci1sb3NzIl0sIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWUsInRpbWVsaW5lUGFyYW1zIjp7InN0YXJ0RGF0ZSI6IjIwMDEtMDEtMDEiLCJlbmREYXRlIjoiMjAyMC0xMi0zMSIsInRyaW1FbmREYXRlIjoiMjAyMC0xMi0zMSJ9fSx7ImRhdGFzZXQiOiJ0cmVlLWNvdmVyIiwibGF5ZXJzIjpbInRyZWUtY292ZXItMjAxMCJdLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlfV19&mapPrompts=eyJvcGVuIjp0cnVlLCJzdGVwc0tleSI6InN1YnNjcmliZVRvQXJlYSJ9" > Global forest watch map</iframe>
          </div>
          <div className="banner"><h2>Previous Tree Planters</h2></div>
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