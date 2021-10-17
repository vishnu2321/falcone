import React, { useState,useEffect } from 'react'

function Destination({destination,planets,vehicles,setSelectedPlanet}) {

    const [planet,setPlanet] = useState(null);
    const [vehicle,setVehicle] = useState(null);

    const changePlanet = (e)=>{
        setPlanet(e.target.value);
        setSelectedPlanet((prev)=>{
            let _new = prev.slice();
            _new[destination-1]=e.target.value;
            return _new;
        });
    }

    const changeVehicle =(e)=>{
        setVehicle(e.target.value);
    }


    return (
        <div>
            <select name="planets" onChange={changePlanet}>
                <option value={null} selected>Select</option>
                {planets?.map((planet)=>{
                    return <option value={planet.name}>{planet.name}</option>
                })}
            </select>
            {
                planet?<div>
                    {vehicles.map((vehicle)=>{
                        return (<div>
                            <input type="radio" name="vehicle_group" value={vehicle.name} id={vehicle.name} onChange={changeVehicle}/>
                            <label htmlFor={vehicle.name}>{vehicle.name} ({vehicle.total_no})</label>
                        </div>)
                    })}
                </div>
                :''
            }
            <p>{vehicle}</p>
        </div>
    )
}

export default Destination
