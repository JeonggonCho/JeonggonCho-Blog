import { FC } from "react"
import styled from "@emotion/styled"
import TagMenu from "components/Blog/TagMenu"
import Posts from "components/Blog/Posts"

const PostListWrapper = styled.div`
    display: flex;
    gap: 48px;
    width: 100%;

    @media (max-width: 769px) {
        flex-direction: column;
        gap: 24px;
    }
`

const PostList: FC = () => {
  return (
    <PostListWrapper>
      <TagMenu />
      <Posts />
    </PostListWrapper>
  )
}

export default PostList