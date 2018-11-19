import React from 'react'
import createReactClass from 'create-react-class'

var Submit = createReactClass({
  render: function() {

    return(

        <div className="c-intro">

            <div className="loader"></div>
            <h1>{this.props.ticketValues.fname}</h1>
            <button className="c-btn c-form__submit" onClick={this.nextStep}>Send</button>
  
        </div>

    )
  },

    nextStep: function(e) {
    e.preventDefault()

    // Get values via this.refs
    //var data = {
    //  name     : this.refs.name.getDOMNode().value,
    //  password : this.refs.password.getDOMNode().value,
    //  email    : this.refs.email.getDOMNode().value,
    //}

    //this.props.saveValues(data)
    this.props.nextStep()
  }
})

export default Submit