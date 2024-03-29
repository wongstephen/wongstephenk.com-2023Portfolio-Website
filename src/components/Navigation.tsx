import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./navigation.css";

const Navigation = ({
  topRef,
}: {
  topRef: React.RefObject<HTMLDivElement>;
}) => {
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [show, setShow] = useState<boolean>(true);

  function handleScroll(): void {
    if (window.scrollY > lastScrollY) {
      // scrolling down
      setShow(() => false);
    } else {
      setShow(() => true);
    }
    setLastScrollY(() => window.scrollY);
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <header className={`header ${!show && "header-hide"}`}>
      <div className="header__container section__container">
        <button
          className="navigation__button-top"
          onClick={() => {
            topRef.current &&
              topRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Scroll to top"
        >
          <h1 className="header__title">wongstephenk.com</h1>
        </button>
        <div className="header__social">
          <a
            href="mailto: contact@wongstephenk.com"
            target="_blank"
            className="navigation__social-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/wongstephen"
            target="_blank"
            className="navigation__social-link"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/wongs/"
            target="_blank"
            className="navigation__social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
};
export default Navigation;
