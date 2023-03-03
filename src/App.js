import './App.css';
import React, {Component} from "react"
import Todoitems from './components/todoitems/todoitems';
import Additems from './components/Additem/additem';
class App extends Component {
  state={
    items:[
      {id:1,name:"Negm",age:21},
      {id:2,name:"Negm",age:17 },
      {id:3,name:"Negm",age:22},
      {id:4,name:"Negm",age:24},
    ]
  }
  deletitem =(id)=>{
    // let items =this.state.items;
    // let i= items.findIndex(item=> item.id===id)
    // items.splice(i,1)
    // this.setState({items})
    let items = this.state.items.filter(item=>{return item.id !== id})
    this.setState({items})
  }
  additem =(item ) => {
    item.id=Math.random()
    let items=this.state.items;
    items.push(item);
    // console.log(this.state)
    this.setState({items})
  }
  render(){
  return (
    <div className="App container">
      <h1 className='center'>Todo List <i class="fa-solid fa2x fa-circle-check"></i></h1>
      <Todoitems items={this.state.items} deletitem={this.deletitem}/>
      <Additems additem={this.additem}/>
    </div>
  );
}
}
export default App;
