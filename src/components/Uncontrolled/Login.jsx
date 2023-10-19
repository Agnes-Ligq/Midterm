import {useRef} from "react";
import "./login.css";

export default function Login(){
  const nameRef=useRef(null);
  const passwordRef=useRef(null);

  const handleSubmit=(event)=>{
    event.preventDefault();
    alert(`Name: ${nameRef.current.value}, Password:${passwordRef.current.value}`);
  };

  const handleClear=()=>{
    nameRef.current.value="";
    passwordRef.current.value="";
  };

  return(
    <form onSubmit={handleSubmit} className="multiple">
        <div className="new-shop-label">
            <h2>New Shop</h2>
        </div>

        <label className="multiple__text" htmlFor="name">
            Name:
        </label>
        <input
        type="text"
        id="name"
        className="multiple__input"
        name="name"
        placeholder="name"
        ref={nameRef}/>

        <label className="multiple__text" htmlFor="password">
            Password:
        </label>
        <input
        type="password"
        id="password"
        className="multiple__input"
        name="passowrd"
        placeholder="password"
        ref={passwordRef}/>

        <div className="button-container">
            <button className="multiple__button" type="submit">
                Submit
            </button>
            <button className="multiple_button" type="button" onClick={handleClear}>
                Clear
            </button>
        </div>
    </form>
  );


}