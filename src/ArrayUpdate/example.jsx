import React, { useState } from 'react'

 function Example() {

    const [ Foods , setfoods] = useState(["Apple" , "Orange" , "Banana" ]);

    function handleremove(index){
       
        const foodToDelete = document.getElementById("fooddelete").value.trim();
        document.getElementById("fooddelete").value = "";
        if (foodToDelete !== "") {
          setfoods(prevFoods => prevFoods.filter(food => food !== foodToDelete));
        }
      } 
      
  
    
    function handleadd(){
        const newfoods = document.getElementById("foodinput").value;
        document.getElementById.value="";
        setfoods(prevFoods => [...prevFoods, newfoods]);


    }
  return (
  
  
    <div>
    <h1>Updating Array in State</h1>
    <ul>
      {Foods.map((food, index) =>
        <li key={index}>{food}</li>
      )}
    </ul>
    <hr />
    <input type="text" id="foodinput" placeholder="Enter food name" />
    <button onClick={handleadd}>Add Food</button>
    <hr />
    <input type="text" id="fooddelete" placeholder="Enter food name to delete" />
    <button onClick={handleremove}>Delete</button>
  </div>
  )
}

export default Example;