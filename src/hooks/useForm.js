import { useState } from "react";

export const useForm = () => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
      });
      // taking value from input from
      const handleStore = (e) => {
        const { name, value } = e.target;
    
        setData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      let validPhone = data.phone.length;  // taking integer lenght in input[type=number];
    
      if (validPhone > 10) {
        alert("maxximum  number is 10");
        setData.phone = "";
      }
    //for checking validation of email
    const isValid=()=> {
        let validEmail= data.email
        return /\S+@\S+\.\S+/.test(validEmail);
    }
    
      // storing in local storage
      const handleSubmit = (e) => {
        e.preventDefault();
        
        if ( validPhone !== 10 || !isValid(e.target.value) )  {
          alert("please check above information and enter correctly ");
        } else {
          localStorage.setItem("data", JSON.stringify(data));
          setData({
            name: "",
            phone: "",
            email: "",
            password: "",
          });
        }
      };
      return {handleStore , handleSubmit ,  data}
}