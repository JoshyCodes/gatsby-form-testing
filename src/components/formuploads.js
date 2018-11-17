import React from 'react'
import createReactClass from 'create-react-class'

var FormUpload = createReactClass({
  render: function() {

    return(

      <div>

        <h3>{this.props.inputLabel}</h3>

        <input type="file" name={this.props.inputName} multiple/>
        
        <p>{this.props.inputSubText}</p>
      
      </div>

    )
  }
})

export default FormUpload