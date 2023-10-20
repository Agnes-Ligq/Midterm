import React, { useState } from "react";
import "./multiple.css";

export default function Multiple() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    portfolioWebsite: "",
    message: "",
    phone:"",
  });

  
    const [selectedOption, setSelectedOption] = useState("option1");
  
    const handleDropdownChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.firstname}, Last name: ${formData.lastname}, Email: ${formData.email},  Portfolio Website: ${formData.portfolioWebsite}, Message: ${formData.message}`
    );
  };

  const handleClear=(event)=>{
    event.preventDefault();

    setFormData({
        usename: "",
        password: "",
    })
};





  return (
    <form onSubmit={handleSubmit} className="multiple">
      <label className="multiple__text" htmlFor="firstname">
        First name *
      </label>
      <input
        type="text"
        id="firstname"
        className="multiple__input"
        name="firstname"
        value={formData.firstname}
        onChange={handleChange}
      />

<label className="multiple__text" htmlFor="lastname">
        Last name *
      </label>
      <input
        type="text"
        id="lastname"
        className="multiple__input"
        name="lastname"
        value={formData.lastname}
        onChange={handleChange}
      />

      <label className="multiple__text" htmlFor="email">
        Email *
      </label>
      <input
        type="email"
        id="email"
        className="multiple__input"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

<label className="multiple__text" htmlFor="portfolioWebsite">
        Portofolio website:
      </label>
      <input
        type="portfolioWebsite"
        id="portfolioWebsite"
        className="multiple__input"
        name="portfolioWebsite"
        placeholder="http://"
        value={formData.portfolioWebsite}
        onChange={handleChange}
      />

    
<label>
        Position you are applying for *
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="option1">Security Analyst</option>
          <option value="option2">Tester</option>
          <option value="option3">Software Engineer</option>
          <option value="option3">Front End Deveoper</option>
        </select>
      </label>

      <label className="multiple__text" htmlFor="phone">
      Phone * (Must be ten digitals):
      </label>
      <input
        type="phone"
        id="phone"
        className="multiple__input"
        name="phone"
        
        value={formData.phone}
        onChange={handleChange}
      />


      <label className="multiple__text" htmlFor="message">
        Referece / Comments / Questions
      </label>
      <textarea
        id="message"
        className="multiple__textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
    <div>
      <button className="multiple__button" type="submit">
        Send Application
      </button>
      <button className="multiple__button" type="clear" onClick={handleClear}>
                    Reset
                </button></div>
    </form>
  );
}
