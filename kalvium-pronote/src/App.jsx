import { Component } from 'react'
import './App.css'
import Display from "./component/display"

class App extends Component{
  constructor(){
    super()
    this.state={
      ToDoList:[],
      TodoItem:{Key:"",description:""}

    }
  }
  
  handleSubmit=(e)=>{
    e.preventDefault()
    const inputValue=this.state.TodoItem
    console.log(inputValue.Key)
    if (inputValue.description!==""){
      const newItem = [...this.state.ToDoList,inputValue]
    console.log(inputValue.description)
    this.setState({
      ToDoList: newItem,
      TodoItem:{Key:"",description:""}
    })}
  }

  handleInput=(e)=>{
    this.setState({
      TodoItem:{
        Key:Date.now(),
        description: e.target.value}});
  }

  handleDelete=(key)=>{
     const filtered=this.state.ToDoList.filter(el=>el.Key!==key)
      this.setState({
        ToDoList: filtered
      })
  }

  handleUpdate=(newDes,key)=>{
    const listItems= this.state.ToDoList

    listItems.map((ele) => {
      if (ele.Key===key){
        ele.description= newDes;
      }

    })
    this.setState({
      ToDoList: listItems
    })
  }
 

  render() {
    return<>
    <p></p>
    <h1>TO DO LIST</h1>
     <form onSubmit={this.handleSubmit} className='form'>
      <input type='text' className="input" placeholder='Type Here' onChange={this.handleInput} value={this.state.TodoItem.description}/>
      <button type='submit'>Add Item</button>
      <p>{this.state.TodoItem.description}</p>
      <Display todoItem={this.state.ToDoList} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete}/>
      </form>
    </>
  }
}

export default App
