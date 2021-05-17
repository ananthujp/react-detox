import React from "react"
import "./Donut.css"
function Donut(props){
    return(
        <div><svg viewBox="0 0 36 36" className={props.color} id="svg_prop">
        <path className="circle-bg" d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path id="c_path" className="circle"
        strokeDasharray={props.min * 100/props.max+",100"}
        d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text id="c_txt" x="18" y="20.35" className="percentage">{props.min}</text>
    </svg></div>
    )
}
export default Donut