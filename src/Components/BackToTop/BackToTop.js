import React, { useEffect, useState } from "react";

function BackToTop() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
          }}
          onClick={scrollUp}
        >
          <i
            class="fa fa-arrow-circle-up text-5xl text-gray-500 "
            aria-hidden="true"
          ></i>
        </button>
      )}
    </div>
  );
}

export default BackToTop;
