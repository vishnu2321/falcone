import './App.css';
import React,{useState,useEffect} from 'react';
import Destination from './Components/Destination';

function App() { 
  const [planets,setPlanets] = useState([]);
  const [vehicles,setVehicles] = useState(null);
  const [selectedPlanets,setSelectedPlanets] = useState([null,null,null,null]);
  const [selectedVehicles,setSelectedVehicles] = useState([null,null,null,null]);

  const getData = async (URL,setState) =>{
    await fetch(URL)
      .then((res)=>{return res.json()})
      .then((data)=>{setState(data)})
  }
  
  useEffect(() => {
    getData('https://findfalcone.herokuapp.com/planets',setPlanets);
    getData('https://findfalcone.herokuapp.com/vehicles',setVehicles);
  }, [])

  return (
    <div className="">

      <nav>
        <div>

        </div>
      </nav>

      {selectedPlanets && <Destination 
        destination={1}
        key={1}
        planets={planets.filter((planet)=>!selectedPlanets.filter((p,index)=>index!==0).includes(planet.name))}  
        vehicles={vehicles} 
        setSelectedPlanet={setSelectedPlanets}
      />}

      {selectedPlanets && < Destination 
        destination={2}
        key={2}
        planets={planets.filter((planet)=>!(selectedPlanets.filter((p,index)=>index!==1).includes(planet.name)))}
        vehicles={vehicles} 
        setSelectedPlanet={setSelectedPlanets} 
      />}

    </div>
  );
}

export default App;
