import React, { useState } from "react";

function App() {
//rather than pass a string we pass an object  
  const [contact,updateContact] = useState({
    fName:"",
    lName:"",
    email:""
  });  

  function inputHandler(event) {
    //destructuring object 
    const {value,name} = event.target;
    //this function take a callback function
    //this callback function store previous object that object is used for update new value
    updateContact((prevValue) =>{
      if (name === "fName") {
        return {
          fName:value,
          lName:prevValue.lName,
          email:prevValue.email
        }
      }else if (name === "lName") {
        return {
          fName:prevValue.fName,
          lName:value,
          email:prevValue.email
        }
      }else if (name === "email") {
        return {
          fName:prevValue.fName,
          lName:prevValue.lName,
          email:value
        }
      }
    });

  }

  return (
    <div className="container">
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form>
        <input
         name="fName" 
         placeholder="First Name"
         onChange ={inputHandler} 
         value ={contact.fName}
         />
        <input 
        name="lName" 
        placeholder="Last Name"
        onChange ={inputHandler}
        value ={contact.lName}
         />
         <input 
        name="email" 
        placeholder="Email"
        onChange ={inputHandler}
        value ={contact.email}
         />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
