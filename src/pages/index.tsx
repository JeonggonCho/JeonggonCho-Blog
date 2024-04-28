import React, { FC } from "react"
import Header from "components/Common/Header"
import Footer from "components/Common/Footer"
import Template from "../templates/Template"

const IndexPage: FC = () => {
  return (
    <Template>
      <Header />
      <Footer />
    </Template>
  )
}

export default IndexPage