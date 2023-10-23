import React from "react";
import { Component } from "react";

class Profile extends Component {
  //constructor is a place used for intialization , whenever class is invoked/component is rendered this contructor is called.
  //this place is best for declaring states variables.
  constructor(props) {
    //mandatory to write props and super(props)
    super(props);

    this.state = {
      count: 0,
      count2: 2,
      image: "",
      userName: "",
    };
    //React Lifecycle
    // Following is the order of lifecycle methods calls in Class Based Components:
    // constructor()
    // render ()
    // componentDidMount()
    console.log("Child Constructor  " + this.props.name);
  }

  async componentDidMount() {
    console.log("Child componentDidMount  after render", this.props.name);
    const data = await fetch("https://api.github.com/users/AnandSShukla");
    const Json = await data.json(); //best place to make API CALL like useEffect in functional component
    this.setState({ image: Json?.avatar_url, userName: Json?.login });
    //first render it and then update it later like useEffect
  }

  //the most imp part of a class based component is render method

  //mandatory render method return some jsx. whatever we return here gets injected to DOM
  render() {
    // console.log("Child render props", this.props.name);
    console.log("Child render state", this.state);

    //destrucure this.state
    const { count, count2, userName, image } = this.state;
    return (
      <div style={{ height: "400px", border: "1px solid red", margin: "20px" }}>
        <h1>HELLO CLASS BASED COMPONET </h1>
        {/* <h3>Count state : {this.state.count}</h3> */}
        <h3>Count state this.state : {count}</h3>
        {/* <h3>Count state 2: {this.state.count2}</h3> */}
        <h3>Count state state this.state 2 : {count2}</h3>
        <h2> name as prop this.prop :{this.props.name}</h2>
        <h2> xyz as prop this.prop :{this.props.xyz}</h2>
        <h2>API FETCHED LOCAL STATE : {userName}</h2>
        <h2>API FETCHED LOCAL image </h2>
        <img
          src={image}
          alt=""
          width="100px"
          // height="140px"
        />
        {/*in class based component never update the state variables directly , Never do this.state.count = something */}
        {/* always use this.setState = ({key:value}) */}
        <button
          onClick={() =>
            this.setState({
              count: 1,
              count2: 5,
            })
          }
        >
          {" "}
          set local state{" "}
        </button>
        <button
          onClick={() =>
            this.setState({
              // count: 5,
              count2: 10,
              //react will only just modify partial object, that means count2 will be updated and count will remain same
            })
          }
        >
          {" "}
          set local state{" "}
        </button>
      </div>

      //Suppose we had a Child component inside render() method in the class based component
      // <ChildrenComponent/>
      // then the React Life cycle sequence will go like this

      // Parent constructor()
      // Parent render ()
      // if child component is inside render then new child life cycle starts
      //                 Child Constructor()
      //                  Child render()
      //                  Child ComponentDidMount()
      // Parent componentDidMount()
    );
  }
}

export default Profile;
//why we do super(props);
