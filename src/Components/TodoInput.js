import React, { Component } from 'react'
//to grab values you set the structure in render
export default class TodoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit, editItem} = this.props
        return (
            <div className="card card-body my-3">
              <form onSubmit= {handleSubmit}>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white">
                    <i class="fas fa-book"></i>
                     </div>  
                    </div> 
                    <input type="text" className="form-control text-capitalize"
                    placeholder="add your item"
                    value={item}
                    onChange={handleChange} />
                    
                </div>
              <button type="submit" className={
                  editItem 
                  ? "btn btn-block btn-success mt-3" 
                  :  "btn btn-block btn-primary mt-3"}>
                {editItem ? "edit item" : "add item"} </button>
              </form>
            </div>
        );//if edit is true  the name in the button will say edit item and if it false it will say add item
    }// remember we only set it true if we click the pen icon
}
