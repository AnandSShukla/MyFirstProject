// Footer component for footer section
export const Footer = () => {
  return (
    <div className="footer">
      <i className="fa-solid fa-heart"></i>
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/anandsshukla/"
        target="_blank"
        title="Anand Shukla's Linkedin Profile"
      >
        {/* &copy; ANAND SHUKLA  */}
        Anand Shukla
      </a>
      {/* <i className="fa-solid fa-copyright"></i>2023 */}
      <i className="fa-solid fa-copyright"></i> &copy;2023
      <strong>
        Food <span>Villa</span>
        {/* 2023 &copy; */}
      </strong>
    </div>
  );
};
