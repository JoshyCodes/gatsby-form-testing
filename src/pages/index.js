import React from 'react'
import Layout from '../components/layout'
var helpdesk = require('../components/helpdesk')

const IndexPage = () => (

  <Layout>
    
    <div className="c-intro">
      <h1 className="c-intro__title">Greetings Friend!</h1>
      <p className="c-intro__copy">Welcome to our new HelpDesk site. Please fill out the form below to begin the healing!</p>
    </div>

    <helpdesk />
 
  </Layout>

)

export default IndexPage
