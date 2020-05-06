/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./App.css";
import Experience from "./Experience";
import Education from "./Education";

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

        <h2>Contact</h2>
        <address id="contact">
          <ul>
            <li>
              <b>Email address:</b>{" "}
              <a
                href="mailto:sallystudent@gmail.com?subject=Hi%20Sally!"
                target="_blank" rel="noopener"
              >
                sallystudent@gmail.com
              </a>
            </li>
            <li>
              <b>Phone Number:</b> (650) 555-3452
            </li>
          </ul>
        </address>
      </main>
    </div>
  );
}

export default App;
