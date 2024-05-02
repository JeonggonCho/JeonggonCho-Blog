import React, { FC, useMemo } from "react"
import PostList from "components/Blog/PostList"
import BlogTemplate from "../templates/BlogTemplate"
import { graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

export type PostType = {
  node: {
    id: string
    frontmatter: {
      title: string
      summary: string
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

export type postPageProps = {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: PostType[]
    }
  }
}

export type TagListProps = {
  tagList: {
    [key: string]: number
  }
}

const postsPage: FC<postPageProps> = ({
                                        data: {
                                          allMarkdownRemark: { edges }
                                        }
                                      }) => {

  const tagList = useMemo(() => edges.reduce(
    (
      list: TagListProps["tagList"],
      {
        node: {
          frontmatter: { tags }
        }
      }: PostType
    ) => {
      tags.forEach((tag: string) => {
        if (list[tag] === undefined) list[tag] = 1
        else list[tag]++
      })
      list["All"]++
      return list
    },
    { All: 0 }
  ), [])

  return (
    <BlogTemplate>
      <PostList edges={edges} tagList={tagList} />
    </BlogTemplate>
  )
}

export default postsPage

export const getPostList = graphql`
    query getPostList {
        allMarkdownRemark(
            sort: {order:DESC, fields: [frontmatter___date, frontmatter___title]}
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        summary
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
    }
`
