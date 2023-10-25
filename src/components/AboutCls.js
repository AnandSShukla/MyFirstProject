import React, { Component } from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon you want to use
import { Outlet } from "react-router-dom";

export class About extends Component {
  constructor(props) {
    // debugger;
    //mandatory to write props and super(props)
    super(props);

    this.state = {
      UserInfo: {
        name: "Parent's Default Name",
        location: "Parent Location",
      },
    };
    //React Lifecycle
    // Following is the order of lifecycle methods calls in Class Based Components:
    // constructor()
    // render ()
    // componentDidMount()
    // console.log("Parent Constructor runs first with its local state ");
  }

  ///while calling API WE HAVE TO MAKE THIS ASYNC , WHEREAS IN THE USEEFFECT WE CAN'T MAKE IT ASYCH. you cannot do this
  //   useEffect(asyc () => {
  //     return () => {
  //
  //     }
  //   }, [third])

  async componentDidMount() {
    // console.log("PARENT COMPONENT DID MOUNT ");
    //best place to make API CALL like useEffect in functional component,
    // const data = await fetch("https://api.github.com/users/AnandSShukla");
    // const Json = await data.json();
    // console.log("Parent componentDidMount  at last ", Json);
    // //this will update at last
    // this.setState({
    //   UserInfo: { name: Json?.login, location: Json?.id },
    // });
  }

  render() {
    // console.log("Parent render runs 2nd ");
    return (
      <>
        <div
          style={{
            margin: "100px 40px 20px",
            display: "flex",
            // , height: "80vh"
          }}
        >
          <FontAwesomeIcon
            icon={faStar}
            size="2xl"
          />
          <h1>ABOUT US PAGE </h1>
        </div>
        <div>
          {/* Childrens are always rendered inside an Outlet. 
        Outlet Should always be created in Parent.  */}
          {/* <Outlet/> */}

          {/* or just place the child directly  , but child will be always there even at the parents url and children url both */}
          {/* <Profile
            name="ANAND SHUKLA"
            xyz="xyz"
          /> */}
          {/* <ProfileClass
            // name="first child"
            name={this.state?.UserInfo?.name}
            location={this.state?.UserInfo?.location}
          /> */}
          {/* suppose multiple childs are there then what will be the sequence of react lifecycle */}
          <ProfileClass
            name={this.state?.UserInfo?.name}
            location={this.state?.UserInfo?.location}
          />
        </div>
      </>
    );
  }
}

export default About;
