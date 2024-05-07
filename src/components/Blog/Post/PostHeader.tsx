import { FC } from "react"
import styled from "@emotion/styled"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

interface PostHeaderProps {
  title: string;
  date: string;
  image: IGatsbyImageData;
}

const PostHeaderWrapper = styled.div`
    width: 100vw;
    margin: -36px 0 0 -25vw;

    @media (max-width: 1100px) {
        margin: -36px 0 0 -15vw;
    }

    @media (max-width: 769px) {
        margin: -36px 0 0 -20px;
    }

    @media (max-width: 650px) {
        margin: -16px 0 0 -20px;
    }
`

const PostBackLink = styled.div`
    background-color: ${({ theme }) => theme.colors.background.results};
    position: absolute;
    top: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    vertical-align: center;
    padding-right: 3px;
    margin-left: 25vw;
    border-radius: 50%;
    font-size: ${({ theme }) => theme.sizes.web.large};
    font-weight: 900;
    color: ${({ theme }) => theme.colors.font.sub};
    cursor: pointer;
    transition: all 0.2s linear;
    z-index: 2;

    &:hover {
        font-size: ${({ theme }) => theme.sizes.web.largest};
    }

    @media (max-width: 1100px) {
        margin-left: 15vw;
    }

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.large};
        margin-left: 20px;
        top: 20px;
        width: 32px;
        height: 32px;
    }
`

const PostHeaderInfoWrapper = styled.div`
    width: 100%;
    height: 36vh;
    overflow: hidden;
    position: relative;

    @media (max-width: 769px) {
        height: 32vh;
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
        background: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%);
    }
`

const PostTitle = styled.h3`
    font-weight: normal;
    font-size: ${({ theme }) => theme.sizes.web.max};
    color: ${({ theme }) => theme.colors.font.tag};
    word-break: keep-all;
    position: absolute;
    bottom: 60px;
    margin-left: 25vw;
    margin-right: 25vw;
    z-index: 2;

    @media (max-width: 1100px) {
        margin-left: 15vw;
        margin-right: 15vw;
    }

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.max};
        bottom: 52px;
        margin-left: 20px;
        margin-right: 20px;
    }
`

const PostDate = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.small};
    color: ${({ theme }) => theme.colors.font.tag};
    position: absolute;
    bottom: 30px;
    margin-left: 25vw;
    z-index: 2;

    @media (max-width: 1100px) {
        margin-left: 15vw;
    }

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.smallest};
        bottom: 28px;
        margin-left: 20px;
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