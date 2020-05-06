import React from "react";
import "./App.css";
import Experience from "./Experience";

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

        <section id="education">
          <h2>Education</h2>
          <h3>San Francisco Art Institute</h3>
          <p>2016</p>
          <p>Post-Baccalaureate, New Genres</p>
          <h3>Middlebury College</h3>
          <p>2015</p>
          <p>Bachelors, Humanities & Liberal Arts</p>
        </section>

        <h2>Contact</h2>
        <address id="contact">
          <ul>
            <li>
              <b>Email address:</b>{" "}
              <a
                href="mailto:sallystudent@gmail.com?subject=Hi%20Sally!"
                target="_blank"
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
