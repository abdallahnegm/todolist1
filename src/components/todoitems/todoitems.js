import React from "react";
import "./todoitems"
const Todoitems =(props)=>{
    const {items,deletitem} =props;
    let len =items.length
    const listitems = len?(
    items.map(item => {
        return(
            <div key={item.id}>
                <span className="name"> {item.name }</span>
                <span className="age"> {item.age} </span>
                <span className="action icon" onClick={()=>deletitem(item.id)}>&times;</span>
            </div>
        )
    })):<p>There No Items To Show</p>
    return(
        <div className="listitem">
            <div>
                <span className="name title"> Name </span>
                <span className="age title">Age </span>
                <span className="action title"> Action</span>
            </div>
            {listitems}
        </div>
    )
}

export default Todoitems