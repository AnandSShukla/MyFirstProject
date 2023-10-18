import React from "react";
import {Component} from "react";

class Profile extends Component {

//constructor is a place used for intialization , whenever class is invoked/component is rendered this contructor is called.
//this place is best for declaring states variables. 
  constructor (props){
    //mandatory to write props and super(props)
    super(props);

    this.state = {
      count:0, 
    };


  }

  //the most imp part of a class based component is render method 

//mandatory render method return some jsx. whatever we return here gets injected to DOM 
  render(){
    const {count}=this.state;
    return (
      <div style={{ height: "400px", border: "1px solid red", margin: "20px" }}>
        <h1>HELLO CLASS BASED COMPONET </h1>
        <h3>Count state : {this.state.count}</h3>
        <h2> name as prop :{this.props.name}</h2>
        <h2> xyz as prop :{this.props.xyz}</h2>
      </div>
    );


  }

}

export default Profile;
//why we do super(props);