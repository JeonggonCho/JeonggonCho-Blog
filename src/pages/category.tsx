import { FC } from "react"
import BlogTemplate from "../templates/BlogTemplate"
import CategoryItem from "components/Blog/CategoryItem"
import PostCards from "components/Blog/PostCards"
import styled from "@emotion/styled"

const CategoryWrapper = styled.div`
    display: flex;
    gap: 72px;
    width: 100%;

    @media (max-width: 769px) {
        flex-direction: column;
        gap: 60px;
    }
`

const category: FC = () => {

  const dummyCategory = {
    id: 0,
    category: "Git",
    image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    color: "#EDBEA9"
  }

  return (
    <BlogTemplate>
      <CategoryWrapper>
        <CategoryItem
          key={dummyCategory.id}
          category={dummyCategory.category}
          image={dummyCategory.image}
          color={dummyCategory.color}
        />

        <PostCards />
      </CategoryWrapper>
    </BlogTemplate>
  )
}

export default category