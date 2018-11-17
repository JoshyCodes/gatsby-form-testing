import React from 'react'
import createReactClass from 'create-react-class'

var FormInput = createReactClass({
  render: function() {

    return(

      <div>

        <h3>{this.props.inputLabel}</h3>

        <input placeholder={this.props.inputPlaceholder} name={this.props.inputName}/>
        
        <p>{this.props.inputSubText}</p>
      
      </div>

    )
  }
})

export default FormInput