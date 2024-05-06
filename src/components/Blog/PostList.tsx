import { FC } from "react"
import styled from "@emotion/styled"
import TagMenu from "components/Blog/TagMenu"
import PostCards from "components/Blog/PostCards"
import { TagListProps } from "../../pages/posts"
import { PostType } from "../../pages"

interface PostListProps {
  edges: PostType[];
  tagList: TagListProps["tagList"];
  selectedTag: string;
}

const PostListWrapper = styled.div`
    display: flex;
    gap: 48px;
    width: 100%;

    @media (max-width: 769px) {
        flex-direction: column;
        gap: 0;
    }
`

const PostCardsTitleContentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const PostCardsTitle = styled.h3`
    font-size: ${({ theme }) => theme.sizes.web.large};
    color: ${({ theme }) => theme.colors.font.sub};
    margin-bottom: 28px;

    @media (max-width: 769px) {
        display: none;
    }
`

const PostList: FC<PostListProps> = ({ edges, tagList, selectedTag }) => {
  return (
    <PostListWrapper>
      <TagMenu
        tagList={tagList}
        selectedTag={selectedTag}
      />
      <PostCardsTitleContentsWrapper>
        <PostCardsTitle>{selectedTag}</PostCardsTitle>
        <PostCards edges={edges} />
      </PostCardsTitleContentsWrapper>
    </PostListWrapper>
  )
}

export default PostList