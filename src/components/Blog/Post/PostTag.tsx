import { FC } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

type PostTagProps = {
  content: string
}

const PostTagWrapper = styled(Link)`
    font-size: ${({ theme }) => theme.sizes.web.medium};
    background-color: ${({ theme }) => theme.colors.background.tag};
    color: ${({ theme }) => theme.colors.font.tag};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    padding-top: 5px;
    border-radius: 6px;
    white-space: nowrap;
    transition: all 0.1s linear;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.medium};
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.background.sub};
        color: ${({ theme }) => theme.colors.font.tag};
    }
`

const PostTag: FC<PostTagProps> = ({ content }) => {
  return (
    <PostTagWrapper to={`/posts/?tag=${content}`}>
      {content}
    </PostTagWrapper>
  )
}

export default PostTag