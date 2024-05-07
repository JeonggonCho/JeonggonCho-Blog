import { FC, useState } from "react"
import styled from "@emotion/styled"
import { PostTocProps } from "components/Blog/Post/PostToc"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"

const PostMobileTocWrapper = styled.div`
    display: none;

    @media (max-width: 1100px) {
        display: block;
        transform: translate(-50%, 0);
        position: fixed;
        top: 80px;
        left: 50%;
        width: 320px;
        max-width: 320px;
        height: auto;
        max-height: 400px;
        border-radius: 12px;
        background-color: ${({ theme }) => theme.colors.background.results};
        box-shadow: 0px 0px 8px ${({ theme }) => theme.colors.background.shadow};
        z-index: 4;
    }

    @media (max-width: 769px) {
        max-width: 300px;
    }

    @media (max-width: 550px) {
        max-width: 228px;
    }

    @media (max-width: 389px) {
        max-width: 200px;
    }
`

const PostMobileTocTitle = styled.div`
    width: 100%;
    display: none;

    &:hover {
        background-color: ${({ theme }) => theme.colors.background.resultHover};
    }

    @media (max-width: 1100px) {
        font-size: ${({ theme }) => theme.sizes.mobile.small};
        color: ${({ theme }) => theme.colors.font.sub};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 12px 0px;
        cursor: pointer;
        border-radius: 12px;
    }
`

const PostMobileContentsWrapper = styled.div`
    max-height: 300px;
    overflow: auto;
`

const PostMobileContents = styled.div<{ showToc: boolean }>`
    display: ${({ showToc }) => showToc ? "block" : "none"};
    padding: 8px;

    * {
        font-size: ${({ theme }) => theme.sizes.web.smallest};
        color: ${({ theme }) => theme.colors.font.link};
        font-weight: 100;
        transition: all 0.1s linear;
        margin-bottom: 16px;

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

const moreStyle = css`
    width: 12px;
    filter: invert(50%);
`

const PostMobileToc: FC<PostTocProps> = ({ getToc }) => {

  const { tableOfContents } = getToc

  const [showToc, setShowToc] = useState(false)

  const handleClickShowToc = () => {
    setShowToc(!showToc)
  }

  return (
    <PostMobileTocWrapper>
      <PostMobileTocTitle
        onClick={handleClickShowToc}
      >
        목 차
        {showToc ?
          <StaticImage
            src="../../../../static/up-arrow.svg"
            alt="down-arrow"
            css={moreStyle}
          /> :
          <StaticImage
            src="../../../../static/down-arrow.svg"
            alt="down-arrow"
            css={moreStyle}
          />
        }
      </PostMobileTocTitle>

      <PostMobileContentsWrapper>
        <PostMobileContents
          showToc={showToc}
          dangerouslySetInnerHTML={{ __html: tableOfContents }}
        />
      </PostMobileContentsWrapper>
    </PostMobileTocWrapper>
  )
}

export default PostMobileToc