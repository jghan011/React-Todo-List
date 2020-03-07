
import React, { Component } from 'react';

import TodoInput from './Components/TodoInput';
import TodoList from "./Components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import  uuidv1 from 'uuid/v1';
class App extends Component {
  state={
    items: [],
    id: uuidv1(),
    item:'',
    editItem:false
  };

  //SelectedItem item will be equal to title so you'll see in the display with setState in handleEdit//
//uuid creates a unique value//
  //... spread operator splits the arrays up into the items..keeps track of old and new arrays and splits them up inside of items[]//
  
  //With preventg default when you type something in then you will notice everything stays there after you click add item
 
  //item handlechange and handlesubmit are passed as props into TodoInput//
 
  //we will preserving the item value in state
 
  // THis.setState will make changes to state
 
  //the handles are listening for ther event listener//
  
  //anything typed in the form will be perserved in the sate
  
  handleChange = (e)=>{
    this.setState({
      item:e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
        id:this.state.id,
        title:this.state.item
    }

   
    const updatedItems = [...this.state.items,newItem];
    
    this.setState({
      items: updatedItems,
      item:'',
      id: uuidv1(),
      editItem: false
    });
  };

  clearList = ()=>{
    this.setState({
     
      items:[]
    })

  };
  handleDelete = (id) =>{
    const filteredItems = this.state.items.filter(item => item.id !== id)

    this.setState({items:filteredItems});
  
  }
  handleEdit = id =>{
    const filteredItems = this.state.items.filter(item => item.id !== id)
//filter id where it isn't equal to td and const selectedItem does the opposite//
   


    const selectedItem = this.state.items.find(item => item.id === id)

    console.log(selectedItem);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id:id
    });
  }

  // item: selectedItem.title will make the item which you click the pen appear in the handleedit 
  // passing editItem as a prop in todoInput 
  //in setState the id will be equal to the id we are passing in the arrow funt parameter//
  //in handleEdit we have access to the id cuzz it's passed as parameter in the arrow function// 
  //we will overide uuid in handleEdit setState and will access this.state.if
  //because you willbe editing the item we will set it to true in the  setState
//handledelete = {this.handleDelete}  handleDelete is the prop and it is = {handleDelete} which is the method we created earlier
  render() {
    return (
      <div className= "container">
        <div className= "row">
          <div className="col-10 mx-auto col-md-8 mt-4">
       
        <h3 className="text-capitalize text-center">todo input</h3>
        <TodoInput item={this.state.item} 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} 
        editItem={this.state.editItem}/>
        
        <TodoList items={this.state.items} clearList={this.clearList}
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}/>
          </div>
        </div>
      </div>
      
    );
  }
}





export default App;
