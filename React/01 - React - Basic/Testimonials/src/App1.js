import React from 'react'
import { useState } from 'react';
import './App.css';
function App() {


const[formData, setFormData] =useState({firstName:"", lastName:"", email:"",comments:" ",isVisible: true ,mode:"",favCar:""});
console.log(formData);



function changeHandler(event){
  const{name, value , checked , type} = event.target;
  setFormData(prevFormData =>{
    return{
      ...prevFormData,
      [name] : type ==="checkbox" ? checked :value 

   

    }  
  })
}



function submitHandler(e){
   e.preventDefault();
   console.log("finaaly pritning the entire darta of form");
}

  return (
    <div className='App'>


    <form  onSubmit={submitHandler}>
      <input type="text" placeholder=' enter firstName' name='firstName'  onChange={changeHandler} value={formData.firstName}/>
      <br/><br/><br/><br/>
      <input type="text" placeholder=' enter lastName' name= 'lastName' onChange={changeHandler} value={formData.lastName}/>
      <br/><br/><br/><br/>
      <input type="email" placeholder='enter your email here' name ='email' onChange={changeHandler} value={formData.email}/>
      <br/><br/><br/><br/>
      <textarea placeholder='enter your email here'  name="comments" value={formData.comments}  onChange={changeHandler} />
<br/>
    <input type='checkbox' name='isVisible' id='isVisible'   value={formData.isVisible} onChange={changeHandler} checked={formData.isVisible}/>
<label htmlFor='isVisible'>Am I isVisible</label>


<br/><br/><br/><br/>



<fieldset>
  <legend>Modes</legend>
  <input type="radio" onChange={changeHandler}  name ='mode'  value="Online-Mode" id = "Online-Mode" checked={formData.mode === "Online-Mode"}/>
<label htmlFor='Online-Mode' >Online Mode</label>
<br/><br/><br/><br/>
<input type="radio" onChange={changeHandler}  name ='mode'  value="Offline-Mode" id = "Offline-Mode" checked={formData.mode === "Offline-Mode"} />
<label htmlFor='Offline-Mode' >Offline-Mode</label>
</fieldset>

<label htmlFor='favCar' > Tell me Your Favorite Car</label>

<select 
name="favCar" 
onChange = {changeHandler}
value ={formData.favCar}
>
  <option value="scorpio">Scorpio </option>
  <option value="fartuner">fartuner</option>
  <option value="Thar">Thar</option>
  <option value="Legender">Legender</option>
  <option value="Defender">Defender</option>

</select>

<br/><br/><br/><br/><br/>

<button>Submit</button>

    </form> 
    </div>
  )
}

export default App
