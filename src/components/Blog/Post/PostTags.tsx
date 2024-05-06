import { FC } from "react"
import styled from "@emotion/styled"
import PostTag from "components/Blog/Post/PostTag"

type PostTagsProps = {
  tags: string[]
}

const PostTagsWrapper = styled.div`
    width: 100%;
`

const PostTagsContentsWrapper = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
    flex-wrap: wrap;

    @media (max-width: 769px) {
        max-height: 22px;
        gap: 8px;
    }
`

const PostTags: FC<PostTagsProps> = ({ tags }) => {
  return (
    <PostTagsWrapper>
      <PostTagsContentsWrapper>
        {tags.map((tag) => (
          <PostTag content={tag} />
        ))}
      </PostTagsContentsWrapper>
    </PostTagsWrapper>
  )
}

export default PostTags