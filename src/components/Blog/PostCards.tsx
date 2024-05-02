import { FC } from "react"
import styled from "@emotion/styled"
import PostCard from "components/Blog/PostCard"
import { PostType } from "../../pages"

type PostCardsProps = {
  edges: PostType[]
}

const PostCardsWrapper = styled.div`
    flex-grow: 1;
`

const PostCardsPostCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 769px) {
        gap: 24px;
    }
`

const PostCards: FC<PostCardsProps> = ({ edges }) => {
  return (
    <PostCardsWrapper>
      <PostCardsPostCardWrapper>
        {edges.map((el) => (
          <PostCard
            title={el.node.frontmatter.title}
            date={el.node.frontmatter.date}
            tags={el.node.frontmatter.tags}
            image={el.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
          />
        ))}
      </PostCardsPostCardWrapper>
    </PostCardsWrapper>
  )
}

export default PostCards