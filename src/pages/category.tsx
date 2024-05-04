import { FC, useMemo } from "react"
import BlogTemplate from "../templates/BlogTemplate"
import CategoryItem from "components/Blog/CategoryItem"
import PostCards from "components/Blog/PostCards"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import { PostType } from "./index"
import queryString, { ParsedQuery } from "query-string"

type categoryPageProps = {
  location: {
    search: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    allMarkdownRemark: {
      edges: PostType[]
    }
    file: {
      publicURL: string
    }
  }
}

const CategoryWrapper = styled.div`
    display: flex;
    gap: 72px;
    width: 100%;
    height: 100%;

    @media (max-width: 769px) {
        flex-direction: column;
        gap: 60px;
    }
`

const categoryPage: FC<categoryPageProps> = ({
                                               location: { search },
                                               data: {
                                                 site: {
                                                   siteMetadata: { title, description, siteUrl }
                                                 },
                                                 allMarkdownRemark: { edges },
                                                 file: { publicURL }
                                               }
                                             }) => {

  const parsed: ParsedQuery<string> = queryString.parse(search)

  const selectedCategory: string = typeof parsed.category !== "string" || !parsed.category ? "" : parsed.category

  const selectedEdges = useMemo(() => (
    edges.filter(({ node: { frontmatter: { category } } }) => (
      category === selectedCategory
    ))
  ), [selectedCategory])

  return (
    <BlogTemplate
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <CategoryWrapper>
        <CategoryItem
          category={selectedCategory}
          active={false}
        />

        <PostCards edges={selectedEdges} />
      </CategoryWrapper>
    </BlogTemplate>
  )
}

export default categoryPage

export const getPostList = graphql`
    query getPostList {
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
        allMarkdownRemark(
            sort: {order:ASC, fields: [frontmatter___date, frontmatter___title]}
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date(formatString: "YYYY.MM.DD.")
                        tags
                        category
                        thumbnail {
                            childImageSharp {
                                gatsbyImageData(width: 300, height: 140)
                            }
                        }
                    }
                }
            }
        }
        file(name: {eq: "meta-thumbnail"}) {
            publicURL
        }
    }
`