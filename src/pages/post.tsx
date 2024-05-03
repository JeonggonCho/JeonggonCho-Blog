import { FC } from "react"
import Template from "../templates/Template"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"
import PostHeader from "components/Blog/PostHeader"
import PostTags from "components/Blog/PostTags"
import PostContent from "components/Blog/PostContent"

type PostPageProps = {
  data: {
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
            }
          }
        }
      }
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


const postPage: FC<PostPageProps> = ({
                                       data: {
                                         allMarkdownRemark: {
                                           edges
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
          }
        }
      }
    }
  } = edges[0]

  return (
    <Template>
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

export default postPage

export const queryMarkdownDataSlug = graphql`
    query getQueryMarkdownDataSlug($slug: String) {
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
                        }
                    }
                }
            }
        }
    }
`