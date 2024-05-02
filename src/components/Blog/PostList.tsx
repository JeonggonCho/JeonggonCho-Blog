import { FC } from "react"
import styled from "@emotion/styled"
import TagMenu from "components/Blog/TagMenu"
import PostCards from "components/Blog/PostCards"
import { PostType, TagListProps } from "../../pages/posts"

interface PostListProps {
  edges: PostType[];
  tagList: TagListProps["tagList"];
}

const PostListWrapper = styled.div`
    display: flex;
    gap: 48px;
    width: 100%;

    @media (max-width: 769px) {
        flex-direction: column;
        gap: 0px;
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

const PostList: FC<PostListProps> = ({ edges, tagList }) => {
  return (
    <PostListWrapper>
      <TagMenu tagList={tagList} />
      <PostCardsTitleContentsWrapper>
        <PostCardsTitle>All (52)</PostCardsTitle>
        <PostCards edges={edges} />
      </PostCardsTitleContentsWrapper>
    </PostListWrapper>
  )
}

export default PostList