import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [setData, setSetData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });


  
  // taking value from input from
  const handleStore = (e) => {
    const { name, value } = e.target;

    setSetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  let validPhone =setData.phone.length;  // taking integer lenght in input[type=number];

  if (validPhone > 10) {
    alert("maxximum  number is 10");
    setData.phone = "";
  }
  
  

//for checking validation of email
const isValid=()=> {
    let validEmail= setData.email
    return /\S+@\S+\.\S+/.test(validEmail);
}

  // storing in local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if ( validPhone !== 10 || !isValid(e.target.value) )  {
      alert("please check above information and enter correctly ");
    } else {
      localStorage.setItem("setData", JSON.stringify(setData));
      setSetData({
        name: "",
        phone: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="main">
      <h1 className="form_header">Form</h1>

{/* from field */}
      <div className="fromdiv">
        <h2 className="regis_form">Registration</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="namefield">
            <label htmlFor="">Name: </label>
            <input
              type="text"
              name="name"
              className="f_name"
              value={setData.name}
              onChange={handleStore}
              required
            />
          </div>
{/* phone field */}
          <div className="phone_field">
            <label htmlFor="">Phone: </label>
            <input
              type="number"
              name="phone"
              className="U_number"
              value={setData.phone}
              onChange={handleStore}
              required
            />
          </div>

{/* email feild */}
          <div className="email_field">
            <label htmlFor="">Email: </label>
            <input
              type="email"
              name="email"
              className="Mail"
              value={setData.email}
              onChange={handleStore}
              required
            />
          </div>

          {/* password field */}
          <div className="password_field">
            <label htmlFor="password" className="password">
              Password:{" "}
            </label>
            <input
              type="password"
              name="password"
              className="Key"
              value={setData.password}
              onChange={handleStore}
              required
            />
          </div>
          
          {/* submit button */}
          <button type="submit"  className="btn_submit">
            submit
          </button>
         
        </form>
      </div>
    </div>
  );
};

export default Home;
