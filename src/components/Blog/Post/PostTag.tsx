import { FC } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

type PostTagProps = {
  content: string
}

const PostTagWrapper = styled(Link)`
    font-size: ${({ theme }) => theme.sizes.web.small};
    background-color: ${({ theme }) => theme.colors.background.tag};
    color: ${({ theme }) => theme.colors.font.tag};
    padding: 5px 10px;
    vertical-align: center;
    text-align: center;
    border-radius: 6px;
    white-space: nowrap;
    transition: all 0.1s linear;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.small};
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.background.sub};
        color: ${({ theme }) => theme.colors.font.tag};
    }
`

const PostTag: FC<PostTagProps> = ({ content }) => {
  return (
    <PostTagWrapper to={`/posts/?tag=${content}&page=1`}>
      {content}
    </PostTagWrapper>
  )
}

export default PostTag