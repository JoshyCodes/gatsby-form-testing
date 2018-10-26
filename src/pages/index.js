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
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <input name="name" />
      </p>
      <p>
        <textarea name="message" />
      </p>
      <p>
        <button>Send</button>
      </p>
    </form>

</Layout>

)

export default IndexPage
