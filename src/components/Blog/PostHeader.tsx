import { FC } from "react"
import styled from "@emotion/styled"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

interface PostHeaderProps {
  title: string;
  date: string;
  image: IGatsbyImageData;
}

const PostHeaderWrapper = styled.div`
    width: 100%;
`

const PostBackLink = styled.div`
    background-color: ${({ theme }) => theme.colors.background.main};
    position: absolute;
    top: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding-top: 2px;
    padding-right: 3px;
    border-radius: 20px;
    font-size: ${({ theme }) => theme.sizes.web.large};
    font-weight: 900;
    color: ${({ theme }) => theme.colors.font.sub};
    margin-left: 28px;
    cursor: pointer;
    transition: all 0.2s linear;
    z-index: 2;

    &:hover {
        color: ${({ theme }) => theme.colors.font.main};
        font-size: ${({ theme }) => theme.sizes.web.largest};
    }

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.large};
        margin-left: 20px;
        top: 20px;
    }
`

const PostHeaderInfoWrapper = styled.div`
    width: 100%;
    height: 36vh;
    border-radius: 12px;
    overflow: hidden;
    position: relative;

    @media (max-width: 769px) {
        height: 32vh;
    }

    @media (max-width: 550px) {
        height: 28vh;
    }
`

const PostThumbnail = styled(GatsbyImage)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;

    &:before {
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
        background: linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%);
    }
`

const PostTitle = styled.h3`
    font-weight: normal;
    font-size: ${({ theme }) => theme.sizes.web.max};
    color: ${({ theme }) => theme.colors.font.tag};
    word-break: break-all;
    position: absolute;
    bottom: 60px;
    margin-left: 28px;
    margin-right: 28px;
    z-index: 2;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.max};
        bottom: 52px;
        margin-left: 20px;
        margin-right: 20px;
    }
`

const PostDate = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.small};
    color: ${({ theme }) => theme.colors.font.link};
    position: absolute;
    bottom: 30px;
    margin-left: 28px;
    margin-right: 28px;
    z-index: 2;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.smallest};
        bottom: 28px;
        margin-left: 20px;
        margin-right: 20px;
    }
`

const PostHeader: FC<PostHeaderProps> = ({ title, date, image }) => {

  const handleBackLink = () => {
    window.history.back()
  }

  return (
    <PostHeaderWrapper>
      <PostHeaderInfoWrapper>
        <PostBackLink onClick={handleBackLink}>〈</PostBackLink>
        <PostTitle>{title}</PostTitle>
        <PostDate>{date}</PostDate>
        <PostThumbnail image={image} alt="post-thumbnail" />
      </PostHeaderInfoWrapper>
    </PostHeaderWrapper>
  )
}

export default PostHeader