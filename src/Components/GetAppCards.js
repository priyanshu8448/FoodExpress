import { useState } from "react";
import {Link} from 'react-router';

const GetAppCards = (props) => {
  const { naam, isExpanded, setIndexFunc } = props;

  const handleClick = () => {
    setIndexFunc();
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleClick}>
        <span className="accordion-title">Download From {naam}</span>
        <span className="accordion-icon">🔽</span>
      </div>
      <div className="accordion-content">
        {isExpanded ? (
          <p>
            Download from {naam+" "}
            <Link to="/">Click Here</Link>
          </p>
        ) : ""}
      </div>
    </div>
  );
};

export default GetAppCards;
