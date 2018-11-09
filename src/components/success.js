import React from 'react'
import createReactClass from 'create-react-class'

var Success = createReactClass({
  render: function() {

    return(

        <div>
            <h1>Thank You for informing us of you issue.</h1>
            <p>Our team will now be looking at this issue and will let you know what done broke!</p>
            <a href="#">Go back to the homepage</a>
        </div>
    )
  }
})

export default Success