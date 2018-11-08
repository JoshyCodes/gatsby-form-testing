import React from 'react'
import createReactClass from 'create-react-class'

var BasicInfo = createReactClass({
  render: function() {

    return(

      <form
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thanks/"
      className="c-form"
      >
        <input type="hidden" name="form-name" value="contact-form" />

        <input className="c-form__field f-form-control" name="name" placeholder="Your Name" type="text" />
        <input className="c-form__field f-form-control" name="email" placeholder="name@name.com" type="email" />
        <textarea className="c-form__field f-form-control" name="message" />
        
        <button className="c-btn c-form__submit" onClick={this.nextStep}>Send</button>
      
      </form>

    )
  }

})

export default BasicInfo