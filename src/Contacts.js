import React from "react";

function Contacts() {
  return (
    <div>
      <h2>Contact</h2>
      <address id="contact">
        <ul>
          <li>
            <b>Email address:</b>{" "}
            <a
              href="mailto:sallystudent@gmail.com?subject=Hi%20Sally!"
              target="_blank"
              rel="noopener"
            >
              sallystudent@gmail.com
            </a>
          </li>
          <li>
            <b>Phone Number:</b> (650) 555-3452
          </li>
        </ul>
      </address>
    </div>
  );
}

export default Contacts;
