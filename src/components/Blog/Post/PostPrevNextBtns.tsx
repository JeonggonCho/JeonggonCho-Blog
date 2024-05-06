import { FC } from "react"
import styled from "@emotion/styled"
import PostPrevNextBtn from "components/Blog/Post/PostPrevNextBtn"

type PrevNextType = {
  fields: {
    slug: string;
  }
  frontmatter: {
    title: string;
  }
}

interface PostPrevNextBtnProps {
  previous: PrevNextType | null
  next: PrevNextType | null
}

const PostPrevNextBtnsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 12px;
`


const PostPrevNextBtns: FC<PostPrevNextBtnProps> = ({ previous, next }) => {
  const prevSlug = previous ? previous.fields.slug : ""
  const prevTitle = previous ? previous.frontmatter.title : ""
  const nextSlug = next ? next.fields.slug : ""
  const nextTitle = next ? next.frontmatter.title : ""

  return (
    <PostPrevNextBtnsWrapper>
      <PostPrevNextBtn
        label={"이전글"}
        slug={prevSlug}
        title={prevTitle}
      />
      <PostPrevNextBtn
        label={"다음글"}
        slug={nextSlug}
        title={nextTitle}
      />
    </PostPrevNextBtnsWrapper>
  )
}

export default PostPrevNextBtns