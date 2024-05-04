import React, { FC } from "react"
import Template from "../templates/Template"
import { graphql, Link } from "gatsby"

interface SearchPageProps {
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

const searchPage: FC<SearchPageProps> = ({
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
      <div>search</div>
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

export default searchPage

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