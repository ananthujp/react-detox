import React, { useEffect, useState } from "react";
import axios from "axios";
import UserInfo  from "./UserInfo.js"
import "./App.css";
import Diagrams from "./elements/Diag.js";
import Tabulate from "./elements/Tabulate.js";
import Feed from "./Feed.js";
import Login from "./Login.js"
import { useStateValue} from "./StateProvider.js"

function App() {
  const sheetURLDeploy =
    "https://script.google.com/macros/s/AKfycbxoDOWuEPgfo6jYyENnIsdhzTe_BkCXonPBCcSKBzCbj3aJ0B-zwcoi0EUmbvC1Vjg_ng/exec";
   const [data1, setdata] = useState(null);
  useEffect(() => {
    axios.get(sheetURLDeploy).then(response => {
      setdata(response.data);
    });
  }, [sheetURLDeploy]);
  const [{ user }, dispatch]=useStateValue();


  return (

    <div className="App">
       {!user ? <Login /> :  
      <header className="App-header">
        <div className="sideBar">
       <h2> DETOX </h2>
       <UserInfo name={user.displayName} img={user.photoURL} email={user.email}/>
       <p>Widgets : </p>
        {data1 == null ? (
          "Loading..."
        ) : (
          <Diagrams pass1={JSON.stringify(data1)} />
        )}
        <br />
        {data1 == null ? (
          "..."
        ) : (
          <Tabulate pass1={JSON.stringify(data1)} />
        )}
        <br/>
        </div>
        <div className="FeedB">
        <Feed /> 
          </div>
      </header> }
    </div>
  );
}

export default App;
