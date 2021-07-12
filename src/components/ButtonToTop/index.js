import React, { useEffect, useState } from "react";
import "./style.scss";

function ButtonToTop(props) {
  const [height, setHeight] = useState(0);
  const handleToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.onscroll = () => {
      setHeight(window.pageYOffset);
    };
  }, []);

  return (
    <>
      {height ? (
        <div className="btn-container">
          <button onClick={handleToTop} className="btn--primary btn--top">
            <i class="fas fa-arrow-up"></i>
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ButtonToTop;
