import React from 'react'
import createReactClass from 'create-react-class'

function QuestionOption(props) {
    return (
        <div>
            <input type="radio" name={props.name} value={props.value} />
            <label>{props.value}</label>
        </div>
        );
}

function BuildRadios(props) {

    const Options = props.options;

        return (
          <div className="flex-col">
            {Options.map((opt) =>
              <QuestionOption value={opt} name={props.name}/>
            )}
          </div>
        )
  }

var FormRadio = createReactClass({

  render: function() {

    return(

      <div className="flex-col">

        <h3>{this.props.inputQuestion}</h3>

        <p>{this.props.inputSubText}</p>

        <BuildRadios name={this.props.inputName} options={this.props.inputOptions} />
        
      </div>

    )
  }
})

export default FormRadio