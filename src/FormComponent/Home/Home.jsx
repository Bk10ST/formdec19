import React, { useState } from "react";
import "./Home.css";
import { useForm } from "../../hooks/useForm";

const Home = () => {

  const {handleStore , handleSubmit , data } = useForm(); 

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
              value={data.name}
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
              value={data.phone}
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
              value={data.email}
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
              value={data.password}
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
