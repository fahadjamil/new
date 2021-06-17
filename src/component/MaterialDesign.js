import React, { useState } from "react";
import "./MaterialDesign.css";

const MaterialDesign = () => {

const [genderState,setgender]=useState({gender:"male"});
 const check=(event)=>{
   console.log(event.target.value);
   setgender({gender: event.target.value});

 }

  return (
    <div className="container">
      <div className="group1">
        <input type="text" required />
        <label>Name</label>
      </div>



      <form>
        <p>Please select your gender:</p>
        <input type="radio" checked={genderState.gender === "male"}  value="male" onChange={check} />
        <label for="male">Male</label>
        <br />
        <input type="radio" checked={genderState.gender === "female"}  value="female" onChange={check}/>
        <label for="female">Female</label>
        <br></br>
      </form>
    </div>
  );
};
export default MaterialDesign;
