import React,{Component} from "react";
import "./additem.css"
class Additems extends Component {
    state ={
        name:"",
        age:""
    }
    handlechange=(e)=>{
        // console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handlesubmit=(e)=>{
        e.preventDefault();
        if(e.target.name.value ===""){
            return false
            }
            else{
                this.props.additem(this.state)
                this.setState({
                    name:"",
                    age:""
            }
        )}
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handlesubmit}>
                    <input type='text' placeholder="Enter Name.." id="name" onChange={this.handlechange} value={this.state.name}/>
                    <input type='number' placeholder="Enter age" id="age" onChange={this.handlechange} value={this.state.age}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}

export default Additems