import React, { FC } from "react"
import BlogTemplate from "../templates/BlogTemplate"
import CategoryList from "components/Blog/CategoryList"

const categoriesPage: FC = () => {
  return (
    <BlogTemplate>
      <CategoryList />
    </BlogTemplate>
  )
}

export default categoriesPage