import React, { FC } from "react"
import styled from "@emotion/styled"
import Template from "../templates/Template"
import Profile from "components/Index/Profile"
import RecentItems from "components/Index/RecentItems"
import { graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

export type PostType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      category: string
      date: string
      tags: string[]
      thumbnail: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
}

export type PostsType = {
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

const IndexWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background.main};
    min-height: 100vh;
    display: flex;
    justify-content: center;
`

const IndexContents = styled.div`
    margin: 100px auto;
    width: 50vw;
    display: flex;
    flex-direction: column;
    gap: 64px;

    @media (max-width: 1100px) {
        width: 70vw;
    }

    @media (max-width: 769px) {
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
    }

    @media (max-width: 650px) {
        margin-top: 80px;
        margin-bottom: 80px;
    }
`

const IndexPage: FC<PostsType> = ({
                                    data: {
                                      site: {
                                        siteMetadata: { title, description, siteUrl }
                                      },
                                      allMarkdownRemark: { edges },
                                      file: {
                                        publicURL
                                      }
                                    }
                                  }) => {
  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <IndexWrapper>
        <IndexContents>
          <Profile />
          <RecentItems title="Recent Posts" to="/posts/" edges={edges} />
          {/*<RecentItems title="Recent Projects" to="/projects/" edges={edges} />*/}
        </IndexContents>
      </IndexWrapper>
    </Template>
  )
}

export default IndexPage

export const getRecentPostList = graphql`
    query getRecentPostList {
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
        allMarkdownRemark(
            sort: {order:DESC, fields: [frontmatter___date, frontmatter___title]}
            limit: 6
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
