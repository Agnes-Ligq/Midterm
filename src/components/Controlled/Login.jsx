import React, {useState} from "react";
import "./login.css";
export default function Login(){
    const [formData, setFormData]=useState({
        username:"",
        password:"",
    });

    const handleChange=(event)=>{
        const {name, value}=event.target;
        setFormData((prevFormData)=>({...prevFormData, [name]: value}));
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(
            `Username: ${formData.username}, Password: ${formData.password}`);
        

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
            <label className="multiple__text" htmlFor="username">
                Username:
            </label>
            <input
                type="text"
                id="username"
                className="multiple__input"
                name="username"
                placeholder="name"
                value={formData.username}
                onChange={handleChange}
            />
            <label className="multiple__text" htmlFor="password">
                Password:
            </label>
            <input
                type="password"
                id="password"
                className="multiple__input"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
            />
            <div className="button_class">
                <button className="multiple__button" type="submit">
                    Submit
                </button>
                <button className="multiple__button" type="clear" onClick={handleClear}>
                    Clear
                </button>
            </div>
        </form>
    );



}