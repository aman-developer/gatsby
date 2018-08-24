import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = () => (
  <Layout>
    <h1>About Us</h1>
    <p>Welcome to about us page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


export default About