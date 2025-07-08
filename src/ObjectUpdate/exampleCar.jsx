import React, { useState } from 'react';

function ExampleCar() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang"
  });
   function handleyearchange(event){
    setCar( c=>({...c, year: event.target.value}))
  
  }
  function handlemakechange(event) {
    setCar(c => ({ ...c, make: event.target.value }));
  }


  function handlemodelchange(event) {
    setCar(c => ({ ...c, model: event.target.value }));
  }

  return (
    <div>
      <p>Your favorite car is {car.year} {car.make} {car.model}</p>
      <input type="number" value={car.year} onChange={handleyearchange}/><br></br>
      <input type="text" value={car.make} onChange={handlemakechange}/><br></br>
      <input type="text" value={car.model} onChange={handlemodelchange}/><br></br>
    </div>
  );
}

export default ExampleCar;
