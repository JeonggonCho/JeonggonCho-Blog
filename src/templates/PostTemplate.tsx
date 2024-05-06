import { FC } from "react"
import { IGatsbyImageData } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import PostHeader from "components/Blog/Post/PostHeader"
import PostContent from "components/Blog/Post/PostContent"
import PostTags from "components/Blog/Post/PostTags"
import { graphql } from "gatsby"
import Template from "./Template"
import PostPrevNextBtns from "components/Blog/Post/PostPrevNextBtns"
import PostSameCategory from "components/Blog/Post/PostSameCategory"

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
            category: string
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

    previous: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    } | null

    next: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    } | null

    getAllPosts: {
      edges: {
        node: {
          fields: {
            slug: string
          }
          frontmatter: {
            title: string
            category: string
          }
        }
      }[]
    }
  }
}

const PostWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background.main};
    min-height: 100vh;
    display: flex;
    justify-content: center;
`

const PostContents = styled.div`
    margin: 100px auto;
    width: 50vw;
    display: flex;
    flex-direction: column;
    gap: 40px;

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
                                                 },
                                                 next,
                                                 previous,
                                                 getAllPosts
                                               }
                                             }) => {

  const {
    node: {
      html,
      frontmatter: {
        title,
        date,
        tags,
        category,
        thumbnail: {
          childImageSharp: {
            gatsbyImageData
          },
          publicURL
        }
      }
    }
  } = edges[0]

  const posts = getAllPosts.edges

  const filteredPosts = posts.filter((post) => {
    return post.node.frontmatter.category === category
  })

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
          <PostPrevNextBtns
            previous={previous}
            next={next}
          />
          <PostSameCategory category={category} posts={filteredPosts} />
        </PostContents>
      </PostWrapper>
    </Template>
  )
}

export default PostTemplate

export const queryMarkdownDataSlug = graphql`
    query queryMarkdownDataBySlug($slug: String, $prevPostId: String, $nextPostId: String) {
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
                        category
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
        previous: markdownRemark(id: {eq: $prevPostId}) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        next: markdownRemark(id: {eq: $nextPostId}) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        getAllPosts: allMarkdownRemark(
            sort: {order: ASC, fields: [frontmatter___date, frontmatter___title]}
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        category
                    }
                }
            }
        }
    }
`