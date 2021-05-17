import React, { useState, useEffect } from "react";
import "./Tabulate.css";
function Tabulate(props) {
  var db = JSON.parse(props.pass1);
  var [state, setState] = useState(true);
  {useEffect(() => {
    state
      ? (container.style.height = "125px")
      : (container.style.height = "0px");
  })}
  const parser = new DOMParser();
  return (
    
    <div>
      <p onClick={() => (state ? setState(false) : setState(true))}>
        Hostel wise distribution{" "}
        {
          parser.parseFromString(state ? "&#x25B2;" : "&#x25BC;", "text/html")
            .body.textContent
        }
      </p>

      <div id="container">
        <table id="tabu">
          <tbody>
            <tr className="hilite">
              <td>{db.hostel[0].a}</td>
              <td>{db.hostel[0].b}</td>
              <td>{db.hostel[0].c}</td>
              <td>{db.hostel[0].d}</td>
              <td>{db.hostel[0].e}</td>
              <td>{db.hostel[0].f}</td>
            </tr>
            <tr>
              <td>{db.hostel[1].a}</td>
              <td>{db.hostel[1].b}</td>
              <td>{db.hostel[1].c}</td>
              <td>{db.hostel[1].d}</td>
              <td>{db.hostel[1].e}</td>
              <td>{db.hostel[1].f}</td>
            </tr>
            <tr className="hilite">
              <td>{db.hostel[2].a}</td>
              <td>{db.hostel[2].b}</td>
              <td>{db.hostel[2].c}</td>
              <td>{db.hostel[2].d}</td>
              <td>{db.hostel[2].e}</td>
              <td>{db.hostel[2].f}</td>
            </tr>
            <tr>
              <td>{db.hostel[3].a}</td>
              <td>{db.hostel[3].b}</td>
              <td>{db.hostel[3].c}</td>
              <td>{db.hostel[3].d}</td>
              <td>{db.hostel[3].e}</td>
              <td>{db.hostel[3].f}</td>
            </tr>
            <tr className="hilite">
              <td>{db.hostel[4].a}</td>
              <td>{db.hostel[4].b}</td>
              <td>{db.hostel[4].c}</td>
              <td>{db.hostel[4].d}</td>
              <td>{db.hostel[4].e}</td>
              <td>{db.hostel[4].f}</td>
            </tr>
            <tr>
              <td>{db.hostel[5].a}</td>
              <td>{db.hostel[5].b}</td>
              <td>{db.hostel[5].c}</td>
              <td>{db.hostel[5].d}</td>
              <td>{db.hostel[5].e}</td>
              <td>{db.hostel[5].f}</td>
            </tr>
            <tr className="hilite">
              <td>{db.hostel[6].a}</td>
              <td>{db.hostel[6].b}</td>
              <td>{db.hostel[6].c}</td>
              <td>{db.hostel[6].d}</td>
              <td>{db.hostel[6].e}</td>
              <td>{db.hostel[6].f}</td>
            </tr>
            <tr>
              <td>{db.hostel[7].a}</td>
              <td>{db.hostel[7].b}</td>
              <td>{db.hostel[7].c}</td>
              <td>{db.hostel[7].d}</td>
              <td>{db.hostel[7].e}</td>
              <td>{db.hostel[7].f}</td>
            </tr>
            <tr className="hilite">
              <td>{db.hostel[8].a}</td>
              <td>{db.hostel[8].b}</td>
              <td>{db.hostel[8].c}</td>
              <td>{db.hostel[8].d}</td>
              <td>{db.hostel[8].e}</td>
              <td>{db.hostel[8].f}</td>
            </tr>
            <tr>
              <td>{db.hostel[9].a}</td>
              <td>{db.hostel[9].b}</td>
              <td>{db.hostel[9].c}</td>
              <td>{db.hostel[9].d}</td>
              <td>{db.hostel[9].e}</td>
              <td>{db.hostel[9].f}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default Tabulate;
