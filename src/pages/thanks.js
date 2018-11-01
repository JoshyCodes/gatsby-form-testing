import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const ThanksPage = () => (
  <Layout>
    <h1>Thank You for informing us of you issue.</h1>
    <p>Our team will now be looking at this issue and will let you know what done broke!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThanksPage
