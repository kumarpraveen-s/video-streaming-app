import React, { useEffect, useState } from "react";
import "./styling/Navbar.css";
const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 && setShow(true);
      window.scrollY < 100 && setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`navbar ${show && "nav_black"}`}>
      <img
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="Netflix"
        className="img-1"
      />
      <img
        src={require("./styling/image/Netflix-avatar.png")}
        alt="profile"
        className="img-2"
      />
    </div>
  );
};

export default Navbar;
