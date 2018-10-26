import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (

  <Layout>

    <form name="contact" method="post" action="/" data-netlify="true" data-netlify-honeypot="bot-field">

      <input type="hidden" name="bot-field" />

      <p>
        <input name="name" id="fname" />
      </p>
      
      <p>
        <textarea name="message" id="fmsg" />
      </p>
      
      <p>
        <button type="submit" value="Send" />>
      </p>

    </form>

</Layout>

)

export default IndexPage
