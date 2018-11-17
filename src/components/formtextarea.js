import React from 'react'
import createReactClass from 'create-react-class'

var FormTextarea = createReactClass({
  render: function() {

    return(

      <div>

        <h3>{this.props.inputLabel}</h3>

        <textarea rows="4" cols="50" placeholder={this.props.inputPlaceholder} name={this.props.inputName} />
        
        <p>{this.props.inputSubText}</p>
      
      </div>

    )
  }
})

export default FormTextarea