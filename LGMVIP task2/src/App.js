import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import "./App.css";

const App=()=> {
  const[users, setUsers] = useState([])

  const getUsers=async()=>{
    const data = await fetch("https://reqres.in/api/users?page=1" );
    const jsonD = await data.json();
    setUsers(jsonD.data);
    
  };

return (
    <div className="App">
      <header>
      <Navbar/>
      
      <button onClick={getUsers} className="btn btn-outline-primary get-btn" type="submit" > Get User</button>
      </header>
      <div class="w3-container animated fadeOut">
        <p><i class="fa fa-spinner w3-spin loader"></i></p>
      </div>
      
      <div className="row dm">
        {users.map(({ id , email,first_name,last_name,avatar }) => (
            <div className="col-md-4 my-4 dc">
              <div className="card main" style={{width: "15rem"}} key={id}>
                  <img src={avatar} className="card-img-top ig" alt="img"/>
                  <div className="card-body body">
                    <h5 className="card-title name">Name : {first_name} {last_name} </h5>
                    <p className="card-text email">Email id : <br/> {email} </p>
                  </div>
              </div>
            </div>
        ))}

      </div>  
    </div>
  );
}
export default App;