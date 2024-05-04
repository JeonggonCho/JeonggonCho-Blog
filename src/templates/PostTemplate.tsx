import { FC } from "react"
import { IGatsbyImageData } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import PostHeader from "components/Blog/PostHeader"
import PostContent from "components/Blog/PostContent"
import PostTags from "components/Blog/PostTags"
import { graphql } from "gatsby"
import Template from "./Template"

type PostTemplateProps = {
  location: {
    href: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
        author: string
      }
    }
    allMarkdownRemark: {
      edges: {
        node: {
          html: string
          frontmatter: {
            title: string
            date: string
            tags: string[]
            thumbnail: {
              childImageSharp: {
                gatsbyImageData: IGatsbyImageData
              }
              publicURL: string
            }
          }
        }
      }[]
    }
  }
}

const PostWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
`

const PostContents = styled.div`
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

const PostTemplate: FC<PostTemplateProps> = ({
                                               location: { href },
                                               data: {
                                                 allMarkdownRemark: { edges },
                                                 site: {
                                                   siteMetadata: {
                                                     author
                                                   }
                                                 }
                                               }
                                             }) => {

  const {
    node: {
      html,
      frontmatter: {
        title,
        date,
        tags,
        thumbnail: {
          childImageSharp: {
            gatsbyImageData
          },
          publicURL
        }
      }
    }
  } = edges[0]

  return (
    <Template
      title={`${author} | ${title}`}
      description={title}
      url={href}
      image={publicURL}
    >
      <PostWrapper>
        <PostContents>
          <PostHeader title={title} date={date} image={gatsbyImageData} />
          <PostContent html={html} />
          <PostTags tags={tags} />
        </PostContents>
      </PostWrapper>
    </Template>
  )
}

export default PostTemplate

export const queryMarkdownDataSlug = graphql`
    query queryMarkdownDataBySlug($slug: String) {
        site {
            siteMetadata {
                author
            }
        }
        allMarkdownRemark(filter: {fields: {slug: {eq: $slug}}}) {
            edges {
                node {
                    html
                    frontmatter {
                        title
                        date(formatString: "YYYY.MM.DD.")
                        tags
                        thumbnail {
                            childImageSharp {
                                gatsbyImageData
                            }
                            publicURL
                        }
                    }
                }
            }
        }
    }
`