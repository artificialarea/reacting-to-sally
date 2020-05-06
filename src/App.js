/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./App.css";
import Experience from "./Experience";
import Education from "./Education";
import Contacts from "./Contacts";

function App() {
  return (
    <div className="App">
      <header>
        <img
          src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg"
          alt="Photo of Sally Student"
          width="134"
        />
        <h1>Sally Student</h1>
      </header>

      <nav>
        <ul>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <main>
        <Experience />
        <Education />
        <Contacts />
      </main>
    </div>
  );
}

export default App;
