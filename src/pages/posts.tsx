import React, { FC } from "react"
import PostList from "components/Blog/PostList"
import BlogTemplate from "../templates/BlogTemplate"

const postsPage: FC = () => {
  return (
    <BlogTemplate>
      <PostList />
    </BlogTemplate>
  )
}

export default postsPage