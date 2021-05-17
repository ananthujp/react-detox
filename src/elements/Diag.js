import React, { useEffect } from "react";
import "./Diag.css";
import "donutty";
import Donut1 from "./Donut.js"

function Diag(props) {
  var db = JSON.parse(props.pass1);
  useEffect(() => {
    new Donutty("#donut", { value: 80, color: "lightcoral" });
    new Donutty("#donut2", { value: 40, color: "aquamarine" });
    new Donutty("#donut3", { value: 90 });
  }, [db]);
  return (
    <div id="grid-container">
      <div className="item r">
        <Donut1 min={db.general[1].data} max={db.general[0].data} color="red"/>

        <div>Active cases  </div>
      </div>
      <div className="item g">
      <Donut1 min={db.general[2].data} max={db.general[0].data} color="green"/>
        <div>Recovered </div>
      </div>
      <div className="item v">
      <Donut1 min={db.general[3].data} max="180" color="blue"/>
        <div>Contact  </div>
      </div>
      
    </div>
  );
}

export default Diag;
