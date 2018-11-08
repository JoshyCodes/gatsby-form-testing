var React = require('react')
var BasicInfo = require('../components/form')
//var MoreInfo = require('./MoreInfo')
//var Confirm = require('./Confirm')
//var Success = require('./Success')


var ticketValues = {
    name : null,
    email: null,
    message : null
}

var helpdesk = React.createClass({
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
                return <Confirm   ticketValues={ticketValues}
                                    previousStep={this.previousStep}
                                    submitTicket={this.submitTicket} />                        
            case 4:
                return <Success   ticketValues={ticketValues} />
        }
    },

    render: function() {
        return(
            <div>
                {this.showStep()}
            </div>
        )
    }

})

module.exports = helpdesk