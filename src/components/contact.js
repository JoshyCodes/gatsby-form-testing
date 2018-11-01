import React from "react";

const IndexPage = () => (
  <div>

    <h1>Greetings Friend!</h1>
    <p>Welcome to our new HelpDesk site.</p>
    <p>Please fill out the form below to begin the healing!</p>

    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thanks/"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <input name="name" placeholder="Your Name" type="text" />
      <input name="email" placeholder="name@name.com" type="email" />
      <textarea name="message" />
      <button>Send</button>
    </form>

  </div>
)

export default IndexPage