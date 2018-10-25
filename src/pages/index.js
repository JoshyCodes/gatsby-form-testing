import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>


      <form className="m-form" name="helpdesk" method="POST" netlify-honeypot="bot-field" data-netlify={true}>

      <input name="bot-field" hidden/>
      
      <input placeholder="Your Name" required></input>
      <textarea placeholder="What can we help you with?" required></textarea>
      <button type="submit">Submit Ticket</button>

      </form>


  </Layout>
)

export default IndexPage
