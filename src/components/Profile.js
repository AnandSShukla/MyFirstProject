// this is not used by me , instead we are using class based component in the place of this functional based component

import { useEffect, useState } from "react";

const Profile = (props) => {
  // const [count, setCount] = useState(0);
  const [count] = useState(0);
  const { name, xyz } = props;
  useEffect(() => {
    setInterval(() => {
      console.log("namaste react");
    }, 1000);
  }, []);
  return (
    <div style={{ height: "200px", border: "1px solid red", margin: "20px" }}>
      <h2>this is Profile page </h2>
      <h3>Profile functional Component</h3>
      <h3>Count : {count}</h3>
      <h3>name : {name}</h3>
      <h4>xyz : {xyz}</h4>
    </div>
  );
};

export default Profile;
