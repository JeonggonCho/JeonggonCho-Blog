import { FC } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

type PostPrevNextBtnProps = {
  label: string
  slug: string
  title: string
}

const PostPrevNextBtnWrapper = styled(Link)<({ label: string, slug: string })>`
    display: flex;
    visibility: ${({ slug }) => slug === "" ? "hidden" : "visible"};
    flex-direction: column;
    gap: 12px;
    width: 100%;
    height: auto;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.background.prevNext};
    border-radius: 12px;
    transition: all 0.1s linear;
    text-align: ${({ label }) => label === "다음글" ? "right" : "left"};

    &:hover {
        background-color: ${({ theme }) => theme.colors.background.button};
    }
`

const PostPrevNextBtnLabel = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme }) => theme.colors.font.link};
`

const PostPrevNextBtnTitle = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.small};
    color: ${({ theme }) => theme.colors.font.sub};
    word-break: keep-all;
    line-height: 24px;
`

const PostPrevNextBtn: FC<PostPrevNextBtnProps> = ({ label, slug, title }) => {
  return (
    <PostPrevNextBtnWrapper
      to={slug}
      label={label}
      slug={slug}
    >
      <PostPrevNextBtnLabel>{label}</PostPrevNextBtnLabel>
      <PostPrevNextBtnTitle>{title}</PostPrevNextBtnTitle>
    </PostPrevNextBtnWrapper>
  )
}

export default PostPrevNextBtn