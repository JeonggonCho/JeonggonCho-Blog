import React, { FC } from "react"
import { graphql, Link } from "gatsby"
import Template from "../templates/Template"

interface AboutPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
      }
    }
    file: {
      publicURL: string
    }
  }
}

const aboutPage: FC<AboutPageProps> = ({
                                         data: {
                                           site: {
                                             siteMetadata: { title, description, siteUrl }
                                           },
                                           file: { publicURL }
                                         }
                                       }) => {
  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>about</div>
      <Link to="/">홈으로</Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Template>
  )
}

export default aboutPage

export const getMetadata = graphql`
    query getMetadata {
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
        file(name: {eq: "meta-thumbnail"}) {
            publicURL
        }
    }
`