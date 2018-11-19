import React from 'react'
import createReactClass from 'create-react-class'
import FormInput from '../components/forminput'
import FormRadio from '../components/formradio'

var BasicInfo = createReactClass({
  render: function() {

    return(

        <div>

            <div className="flex-row">

              <FormInput 
                inputLabel="Name"
                inputType="input"
                inputPlaceholder="BOB"
                inputName="fname"
                inputSubText="First"
                inputFlow="column"
                specials=""
              />

              <button onClick={this.logging} > test </button>

              <FormInput 
                inputLabel="Name"
                inputType="input"
                inputPlaceholder="Ross"
                inputName="lname"
                inputSubText="Last"
                inputFlow="column"
                specials=""
              />

              </div>

          <div className="flex-row">

              <FormInput 
                inputLabel="Email"
                inputType="input"
                inputPlaceholder=""
                inputName="email"
                inputSubText="Where can we keep you updated on the status of your ticket?"
                inputFlow="column"
                specials=""
              />

              <FormInput 
                inputLabel="Company"
                inputType="input"
                inputPlaceholder=""
                inputName="company"
                inputSubText=""
                inputFlow="column"
                specials=""
              />

          </div>

          <div className="flex-row">

              <FormRadio 
                inputQuestion="What brings you to our humble abode?"
                inputSubText=" "
                inputName="radioQ1"
                inputOptions={[
                  'Something is Broken 🙁',
                  'I Need Help with Content Updates',
                  'I Want to Add New Functionality',
                  'I Need Help With Something Else'
                ]}
                inputFlow="column"
              />

          </div>

          <div className="flex-row">

            <FormRadio 
              inputQuestion="Is this an urgent request?"
              inputSubText="When we see an urgent request we are going to prioritize it over other items in our pipeline. As such, a 25% urgency charge will be added to the total cost of the completed request."
              inputName="radioQ2"
              inputOptions={[
                'No',
                'Yes'
              ]}
              inputFlow="row"
            />

          </div>

        <button className="c-btn c-form__submit" onClick={this.nextStep}>Send</button>
      
        </div>
    )
  },

  nextStep: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      fname     : document.querySelector('[name="fname"]').value
    //  password : this.refs.password.getDOMNode().value,
    //  email    : this.refs.email.getDOMNode().value,
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

export default BasicInfo