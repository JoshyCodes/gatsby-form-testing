import React from 'react'
import BasicInfo from '../components/form'
import MoreInfo from '../components/MoreInfo'
import Submit from '../components/submit'
//xvar Success = require('./Success')
import createReactClass from 'create-react-class'


var ticketValues = {
    name : null,
    email: null,
    message : null
}

var Helpdesk = createReactClass({
    getInitialState: function() {
        return{
            step: 1 
        }
    },

    nextStep: function() {
        this.setState({
            step : this.state.step + 1
        })
    },

    previousStep: function() {
        this.setState({
            step : this.state.step - 1
        })
    },

    submitTicket: function() {
        //add ajax submition stuffs

        this.nextStep();
    },

    showStep: function() {
        switch (this.state.step) {
            case 1:
                return <BasicInfo   ticketValues={ticketValues}
                                    nextStep={this.nextStep}
                                    previousStep={this.previousStep}
                                    saveValues={this.saveValues} />
            case 2:
                return <MoreInfo   ticketValues={ticketValues}
                                    nextStep={this.nextStep}
                                    previousStep={this.previousStep}
                                    saveValues={this.saveValues} />
            case 3:
                return <Submit      ticketValues={ticketValues}
                                    previousStep={this.previousStep}
                                    //submitTicket={this.submitTicket} 
                                    />                        
        //    case 4:
        //        return <Success     ticketValues={ticketValues} />
        }
    },

    render: function() {
        return(
            <div>
                <span className="progress-step">Step {this.state.step}</span>
                {this.showStep()}
            </div>
        )
    }

})

export default Helpdesk