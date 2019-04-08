import React from "react"
// import { Link } from "gatsby"
// import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello From Home</h1>
  </Layout>
)

export default IndexPage
