import React, { useState } from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 9rem 0 5rem 0;
  `;

  const Container = styled.div`
    width: 100%;
    max-width: 600px; /* Adjust the max-width as needed */
    text-align: center;
  `;

  const ContactForm = styled.div`
    border: 1px solid #a334e6;
    padding: 1em;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #a334e6;
      padding: 1em; 
      width:100%;
    }

    input[type="submit"] {
      background: #a334e6;
      border: 0;
      color: #fff;
      padding: 1em;
      text-transform: uppercase;
      width: 25%;
      margin-top: 1em; /* Adjust the margin as needed */

      &:hover,
      &:focus {
        background: #b8161f;
        color: #fff;
        outline: 0;
        transition: background-color 2s ease-out;
      }
    }
  `;

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "eb0b8dc0-b012-4883-a326-c64acaf00b9c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <Wrapper>
      <h1>
        <strong className="main-name">Feel Free to Contact us</strong>
      </h1>

      <Container>
        <ContactForm>
          <form onSubmit={onSubmit} className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="50"
              rows="10"
              autoComplete="off"
              required
            ></textarea>

            <button type="submit">Send</button>
          </form>
          <span>{result}</span>
        </ContactForm>
      </Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Wrapper>
  );
};

export default Contact;
