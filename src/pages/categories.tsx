import React, { FC } from "react"
import BlogTemplate from "../templates/BlogTemplate"
import CategoryList from "components/Blog/CategoryList"
import { graphql } from "gatsby"

interface CategoriesPageProps {
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

const categoriesPage: FC<CategoriesPageProps> = ({
                                                   data: {
                                                     site: {
                                                       siteMetadata: { title, description, siteUrl }
                                                     },
                                                     file: { publicURL }
                                                   }
                                                 }) => {
  return (
    <BlogTemplate
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <CategoryList />
    </BlogTemplate>
  )
}

export default categoriesPage

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