import React from 'react'
import createReactClass from 'create-react-class'
import FormInput from '../components/forminput'
import FormRadio from '../components/formradio'
import FormTextarea from '../components/formtextarea'
import FormUpload from '../components/formuploads'

var MoreInfo = createReactClass({
  render: function() {

    return(

      <form>
        
        <div className="flex-row">

          <FormInput 
            inputLabel="Short Request Title*"
            inputType="input"
            inputPlaceholder=""
            inputName="requestTitle"
            inputSubText="A couple of words describing the nature of the request (Think email subject line)"
            inputFlow="column"
            specials=""
          />

          </div>
          <div className="flex-row">

          <FormTextarea
            inputLabel="Request Details*"
            inputPlaceholder=""
            inputName="requestDetails"
            inputSubText="The more details we have, the easier it will be for us to help you out 🙂"
            inputFlow="column"
          />

          </div>
          <div className="flex-row">

          <FormUpload 
            inputLabel="File Upload"
            inputName="uploads"
            inputSubText="Please send along any files, examples, imagery, or screenshots that will help us support your request. **10MB limit per file."
          />

          </div>
          <div className="flex-row">

            <FormRadio
              inputQuestion="I agree that any request deemed to require less than 5 hours to complete will be processed and worked on at the standard hourly rate without CreativeFuse needing to provide me a formal estimate."
              inputSubText=" "
              inputName="radioQ3"
              inputOptions={[
                'Yes, I agree',
                'No, I do not agree'
              ]}
              inputFlow="row"
            />

            </div>
        
        <button className="c-btn c-form__submit" onClick={this.previousStep}>Back</button>
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
  },

  previousStep: function(e) {
    e.preventDefault()
    this.props.previousStep()
  }

})

export default MoreInfo