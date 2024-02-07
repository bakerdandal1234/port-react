import { useEffect, useState } from "react";
import "./Header.css";
import Modal from "./Modal";

const Header = () => {
  const [showmodal, setshowmodal] = useState(false);
  const [theme, settheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
    // {theme==="light"?document.body.classList.remove("dark"):document.body.classList.add("light")}
  }, [theme]);
  const closeModal = () => {
    setshowmodal(false);
  };
  return (
    <header className=" flex">
      <button
        onClick={() => {
          setshowmodal(true);
        }}
        className="show icon-menu flex"
      ></button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">articles</a>
          </li>
          <li>
            <a href="">projects</a>
          </li>
          <li>
            <a href="">speaking</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          settheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showmodal && (
        <Modal closeModal={closeModal}>
          <ul className="flex menu">
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">articles</a>
            </li>
            <li>
              <a href="">projects</a>
            </li>
            <li>
              <a href="">speaking</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
          </ul>
        </Modal>
      )}
    </header>
  );
};

export default Header;
