import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (

  <Layout>

    <form 
      name="contact"
      method="POST" 
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <p>
        <label>Your Name: <input type="text" name="name" /></label>   
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>

</Layout>

)

export default IndexPage
