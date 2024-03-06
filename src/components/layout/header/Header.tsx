import React from "react";
import styled from "styled-components";

const Container = styled.div`
  .header {
    background-color: #1b1b1b;
    color: white;
    width: 100%;
    height: 60px;
    margin-bottom: 50px;
    border-radius: 20px;
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 110px;
    }
  }

  .logo {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  .menu {
    display: flex;
    align-items: center;
  }

  p {
    margin-right: 20px;
    cursor: pointer;
    color: grey;
  }

  .button {
    font-size: 17px;
    font-weight: bold;
    border: 0px;
    color: white;
    background-color: #1877f2;
    padding: 1rem 2rem;
    border-radius: 15px;
    cursor: pointer;
  }

  .button:hover {
    background-image: linear-gradient(
      90deg,
      #b799ff 0%,
      #acbcff 50%,
      #aee2ff 75%,
      #e6fffd 100%
    );
    color: black;
    animation: slide 10s linear infinite;
  }

  @keyframes slide {
    100% {
      background-position: 50rem;
    }
  }

  .Trello {
    color: grey;
    font-weight: bold;
    font-size: 22px;
    margin-left: 15px;
  }

  .searchContainer {
    display: flex;
    align-items: center;
  }
  .glowbutton {
    --glow-color: rgb(176, 252, 255);
    --glow-spread-color: rgba(123, 251, 255, 0.781);
    --enhanced-glow-color: rgb(206, 255, 255);
    --btn-color: rgb(61, 127, 136);
    border: 0.25em solid var(--glow-color);
    padding: 1em 3em;
    color: black;
    font-size: 15px;
    font-weight: bold;
    background-color: var(--btn-color);
    border-radius: 1em;
    outline: none;
    box-shadow: 0 0 1em 0.25em var(--glow-color),
      0 0 4em 1em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
    text-shadow: 0 0 0.5em var(--glow-color);
    position: relative;
    transition: all 0.3s;
  }

  .glowbutton::after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--glow-spread-color);
    filter: blur(2em);
    opacity: 0.7;
    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
  }

  .glowbutton:hover {
    color: var(--btn-color);
    background-color: var(--glow-color);
    box-shadow: 0 0 1em 0.25em var(--glow-color),
      0 0 4em 2em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
  }

  .glowbutton:active {
    box-shadow: 0 0 0.6em 0.25em var(--glow-color),
      0 0 2.5em 2em var(--glow-spread-color),
      inset 0 0 0.5em 0.25em var(--glow-color);
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    position: relative;
  }

  .input {
    border-style: none;
    margin-right: 50px;
    height: 20px;
    width: 50px;
    padding: 10px;
    outline: none;
    border-radius: 50%;
    transition: 0.5s ease-in-out;
    box-shadow: 0px 0px 3px #f3f3f3;
    border: 0.25em solid var(--glow-color);
    color: #000000;
    font-size: 15px;
    font-weight: bold;
    background-color: var(--btn-color);
    border-radius: 1em;
    outline: none;
    box-shadow: 0 0 1em 0.25em var(--glow-color),
      0 0 4em 1em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
    text-shadow: 0 0 0.5em var(--glow-color);
    --glow-color: rgb(176, 252, 255);
    --glow-spread-color: rgba(123, 251, 255, 0.781);
    --enhanced-glow-color: rgb(206, 255, 255);
    --btn-color: rgb(61, 127, 136);
  }

  .input::placeholder,
  .input {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 17px;
  }

  .input::placeholder {
    color: black;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    outline: none;
    border-style: none;
    border-radius: 80%;
    pointer-events: painted;
    background-color: transparent;
    transition: 0.2s linear;
  }

  .icon:focus ~ .input,
  .input:focus {
    box-shadow: none;
    width: 180px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 3px solid #7e4fd4;
    transition: all 300ms cubic-bezier(0, 0.11, 0.35, 2);
  }

  .kolokol {
    top: 50%;
    left: 10px;
    width: 20px;
    height: 20px;
  }
  .infoICon {
    top: 50%;
    left: 10px;
    margin-right: 20px;
    width: 40px;
    height: 40px;
  }
  .infoICons {
    width: 30px;
    height: 30px;
  }
  .Btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition-duration: 0.4s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to right, #3498db, #e74c3c);
  }

  .sign {
    width: 100%;
    transition-duration: 0.4s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sign svg {
    width: 17px;
  }

  .sign svg path {
    fill: white;
  }

  .text {
    position: absolute;
    right: 0%;
    width: 0%;
    opacity: 0;
    color: #ecf0f1;
    font-size: 1.2em;
    font-weight: 600;
    transition-duration: 0.4s;
  }

  .Btn:hover {
    width: 150px;
    border-radius: 20px;
    transition-duration: 0.4s;
    background: linear-gradient(to right, #3498db, #e74c3c);
  }

  .Btn:hover .sign {
    width: 30%;
    transition-duration: 0.4s;
    padding-left: 12px;
  }

  .Btn:hover .text {
    opacity: 1;
    width: 70%;
    transition-duration: 0.4s;
    padding-right: 10px;
  }

  .Btn:active {
    transform: translate(2px, 2px);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
  }
`;

const Header: React.FC = () => {
  return (
    <Container>
      <header className="header">
        <div className="head">
          <div className="menu">
            <p className="Trello">PeakSoft</p>
            <p> Staff</p>
            <p>Bill Gates</p>
            <p>Ilon Mask</p>
            <p>Taigan</p>
            <button className="glowbutton">JS-12 РУЛИТ</button>{" "}
          </div>
          <div className="searchContainer">
            <div className="input-wrapper">
              <button className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="25px"
                  width="25px"
                >
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    stroke="#fff"
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  ></path>
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    stroke="#fff"
                    d="M22 22L20 20"
                  ></path>
                </svg>
              </button>
              <input
                placeholder="Search..."
                className="input"
                name="text"
                type="text"
              />
            </div>{" "}
            <button className="Btn">
              <div className="sign">
                <svg viewBox="0 0 512 512">
                  <path
                    d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                  ></path>
                </svg>
              </div>
              <div className="text">H E l l O </div>
            </button>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Header;
