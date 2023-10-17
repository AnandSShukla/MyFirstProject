import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon you want to use

const About = () => {
  return (
    <>
      <div style={{ margin: "100px 40px 20px", display: "flex" }}>
        <FontAwesomeIcon
          icon={faStar}
          //   style={{ color: "blue" }}
        />
        <FontAwesomeIcon
          icon={faStar}
          size="2xs"
        />
        <FontAwesomeIcon
          icon={faStar}
          size="xs"
        />
        <FontAwesomeIcon
          icon={faStar}
          size="sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          size="lg"
        />
        <FontAwesomeIcon
          icon={faStar}
          size="xl"
        />
        <FontAwesomeIcon
          icon={faStar}
          size="2xl"
        />
        <h1>ABOUT US PAGE</h1>
      </div>
    </>
  );
};
export default About;
