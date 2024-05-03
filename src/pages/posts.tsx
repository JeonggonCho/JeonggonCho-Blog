import React, { FC, useMemo } from "react"
import PostList from "components/Blog/PostList"
import BlogTemplate from "../templates/BlogTemplate"
import { graphql } from "gatsby"
import { PostType } from "./index"
import queryString, { ParsedQuery } from "query-string"

interface postsPageProps {
  location: {
    search: string;
  }
  data: {
    allMarkdownRemark: {
      edges: PostType[];
    }
  }
}

export type TagListProps = {
  tagList: {
    [key: string]: number
  }
}

const postsPage: FC<postsPageProps> = ({
                                         location: { search },
                                         data: {
                                           allMarkdownRemark: { edges }
                                         }
                                       }) => {

  const parsed: ParsedQuery<string> = queryString.parse(search)

  const selectedTag: string = typeof parsed.tag !== "string" || !parsed.tag ? "All" : parsed.tag

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

  const selectedEdges = useMemo(() => (
    edges.filter(({ node: { frontmatter: { tags } } }) => (
      selectedTag !== "All" ? tags.includes(selectedTag) : true
    ))
  ), [selectedTag])

  return (
    <BlogTemplate>
      <PostList
        edges={selectedEdges}
        tagList={tagList}
        selectedTag={selectedTag}
      />
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
    }
`
