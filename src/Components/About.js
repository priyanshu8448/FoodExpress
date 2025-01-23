import { useContext } from "react";
import { Link } from "react-router";
import DateContext from "../utils/DateContext";

const About = () => {
  const {date}= useContext(DateContext);
  return (
    <div id="About">
      <div className="header-date">
        Date: {date}
      </div>
      <h1>About Us</h1>
      <p>
        Welcome to my food ordering website! My name is Priyanshu Tyagi, and I
        created this platform during my exciting journey of learning React JS.{" "}
      </p>
      <p>
        You can enjoy delicious meals at the comfort of your home. We provide a
        variety of dishes, ranging from desi gems to exotic dishes, to bring you
        a wide selection of options to suit every taste and preference.
      </p>
      <p>
        You can provide your feedback here:{" "}
        <Link to="/feedback" className="links">Feedback</Link>{" "}
      </p>
      <p>
        As a learner, I will continue to enhance this platform by incorporating
        user feedback and implementing new sections. This journey has will
        include several phases like from refining app interface to expanding our
        range of features, and adding backend services later.
      </p>
    </div>
  );
};

export default About;
