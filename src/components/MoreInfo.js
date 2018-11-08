import React from 'react'
import createReactClass from 'create-react-class'

var MoreInfo = createReactClass({
  render: function() {

    return(

      <form>
        
        <h1>This is the second page</h1>
        
        <button className="c-btn c-form__submit" onClick={this.nextStep}>Submit</button>
      
      </form>

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

export default MoreInfo