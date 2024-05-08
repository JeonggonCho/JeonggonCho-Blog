import { FC, useState } from "react"
import styled from "@emotion/styled"

export type PostTocProps = {
  getToc: {
    tableOfContents: string
  }
}

const PostTocWrapper = styled.div`
    position: absolute;
    width: 100%;
    max-width: 16vw;
    height: 100%;
    left: 55vw;

    @media (max-width: 1100px) {
        display: none;
    }
`

const PostTocContentsWrapper = styled.div<{ hoverToc: boolean }>`
    max-height: 62vh;
    position: sticky;
    top: 100px;
    border-left: 1px solid ${({ theme }) => theme.colors.background.button};
    padding-left: 4px;
    overflow-y: auto;
    padding-right: 10px;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background-color: ${({ theme }) => theme.colors.background.button};
        visibility: ${({ hoverToc }) => hoverToc ? "visible" : "hidden"};
        cursor: pointer;
    }
`

const PostTocContents = styled.div`
    position: sticky;
    top: 100px;

    * {
        font-size: ${({ theme }) => theme.sizes.web.smallest};
        color: ${({ theme }) => theme.colors.font.link};
        font-weight: 100;
        transition: all 0.1s linear;
        margin-bottom: 8px;

        &::marker {
            display: none;
        }
    }

    p,
    a {
        &:hover {
            color: ${({ theme }) => theme.colors.font.sub};
        }
    }

    ul {
        list-style: none;
        padding-left: 8px;
    }
`

const PostToc: FC<PostTocProps> = ({ getToc }) => {

  const { tableOfContents } = getToc

  const [hoverToc, setHoverToc] = useState(false)

  const handleHoverToc = () => {
    setHoverToc(!hoverToc)
  }


  return (
    <PostTocWrapper>
      <PostTocContentsWrapper
        hoverToc={hoverToc}
        onMouseEnter={handleHoverToc}
        onMouseLeave={handleHoverToc}
      >
        <PostTocContents
          dangerouslySetInnerHTML={{ __html: tableOfContents }}
        />
      </PostTocContentsWrapper>
    </PostTocWrapper>
  )
}

export default PostToc