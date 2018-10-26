import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (

  <Layout>

<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
  {/* You still need to add the hidden input with the form name to your JSX form */}    
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
