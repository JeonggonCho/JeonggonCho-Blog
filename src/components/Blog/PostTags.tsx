import { FC } from "react"
import styled from "@emotion/styled"
import Tag from "components/Blog/Tag"

type PostTagsProps = {
  tags: string[]
}

const PostTagsWrapper = styled.div`
    width: 100%;
`

const PostTagsTitle = styled.h4`
    color: ${({ theme }) => theme.colors.font.main};
    font-size: ${({ theme }) => theme.sizes.web.largest};
    margin-bottom: 20px;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.largest};
    }
`

const PostTagsContentsWrapper = styled.div`
    display: flex;
    gap: 4px;
    margin-bottom: 12px;
    flex-wrap: wrap;
    max-height: 24px;
    overflow: hidden;

    @media (max-width: 769px) {
        max-height: 22px;
    }
`

const PostTags: FC<PostTagsProps> = ({ tags }) => {
  return (
    <PostTagsWrapper>
      <PostTagsTitle>Tags</PostTagsTitle>
      <PostTagsContentsWrapper>
        {tags.map((tag) => (
          <Tag content={tag} />
        ))}
      </PostTagsContentsWrapper>
    </PostTagsWrapper>
  )
}

export default PostTags