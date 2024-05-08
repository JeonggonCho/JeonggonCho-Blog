import { FC } from "react"
import styled from "@emotion/styled"
import TagMenu from "components/Blog/TagMenu"
import PostCards from "components/Blog/Post/PostCards"
import { TagListProps } from "../../../pages/posts"
import { PostType } from "../../../pages"
import PostPagination from "components/Blog/Post/PostPagination"

interface PostListProps {
  edges: PostType[];
  tagList: TagListProps["tagList"];
  selectedTag: string;
  currentPage: number;
  numPages: number;
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

const PostList: FC<PostListProps> = ({
                                       edges,
                                       tagList,
                                       selectedTag,
                                       currentPage,
                                       numPages
                                     }) => {
  return (
    <PostListWrapper>
      <TagMenu
        tagList={tagList}
        selectedTag={selectedTag}
      />
      <PostCardsTitleContentsWrapper>
        <PostCardsTitle>{selectedTag}</PostCardsTitle>
        <PostCards edges={edges} />
        {edges.length !== 0 &&
          <PostPagination
            selectedTag={selectedTag}
            currentPage={currentPage}
            numPages={numPages}
          />}
      </PostCardsTitleContentsWrapper>
    </PostListWrapper>
  )
}

export default PostList