import { FC } from "react"
import styled from "@emotion/styled"
import TagMenu from "components/Blog/TagMenu"
import PostCards from "components/Blog/PostCards"

const PostListWrapper = styled.div`
    display: flex;
    gap: 48px;
    width: 100%;

    @media (max-width: 769px) {
        flex-direction: column;
        gap: 24px;
    }
`

const PostCardsTitleContentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const PostCardsTitle = styled.h3`
    font-size: ${({ theme }) => theme.sizes.web.large};
    color: ${({ theme }) => theme.lightModeColors.font.darkGray};
    margin-bottom: 28px;

    @media (max-width: 769px) {
        display: none;
    }
`

const PostList: FC = () => {
  return (
    <PostListWrapper>
      <TagMenu />
      <PostCardsTitleContentsWrapper>
        <PostCardsTitle>All (52)</PostCardsTitle>
        <PostCards />
      </PostCardsTitleContentsWrapper>
    </PostListWrapper>
  )
}

export default PostList