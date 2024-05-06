import { FC } from "react"
import styled from "@emotion/styled"
import CategoryItem from "components/Blog/Category/CategoryItem"

const CategoryListWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;

    @media (max-width: 910px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 769px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (max-width: 662px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }
`

const CategoryList: FC = () => {

  const categories = [
    "git",
    "html",
    "css",
    "javascript",
    "sql",
    "typescript",
    "react",
    "vite",
    "mongodb"
  ]

  return (
    <CategoryListWrapper>
      {categories.map((el, idx) => (
        <CategoryItem
          key={idx}
          category={el}
          active={true}
          position={"relative"}
        />
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList