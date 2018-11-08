import React from 'react'
import Layout from '../components/layout'
import Form from '../components/form'

const IndexPage = () => (

  <Layout>
    
    <div className="c-intro">
      <h1 className="c-intro__title">Greetings Friend!</h1>
      <p className="c-intro__copy">Welcome to our new HelpDesk site. Please fill out the form below to begin the healing!</p>
    </div>

    <Form />
 
  </Layout>

)

export default IndexPage
