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
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme }) => theme.lightModeColors.font.gray};
    margin-bottom: 24px;
    margin-left: 12px;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.lightModeColors.font.black};
    }

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.smallest};
        margin-top: 24px;
    }
`

const PostHeaderInfoWrapper = styled.div`
    width: 100%;
    height: 36vh;
    border-radius: 12px;
    overflow: hidden;
    position: relative;

    @media (max-width: 769px) {
        height: 24vh;
    }
`

const PostThumbnail = styled(GatsbyImage)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    position: relative;

    &:before {
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
        background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
    }
`

const PostTitle = styled.h3`
    font-weight: normal;
    font-size: ${({ theme }) => theme.sizes.web.max};
    color: ${({ theme }) => theme.lightModeColors.font.white};
    position: absolute;
    left: 30px;
    bottom: 60px;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.largest};
        left: 28px;
        bottom: 52px;
    }
`

const PostDate = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.small};
    color: ${({ theme }) => theme.lightModeColors.font.white};
    position: absolute;
    left: 30px;
    bottom: 30px;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.smallest};
        left: 28px;
        bottom: 28px;
    }
`

const PostHeader: FC<PostHeaderProps> = ({ title, date, image }) => {

  const handleBackLink = () => {
    window.history.back()
  }

  return (
    <PostHeaderWrapper>
      <PostBackLink onClick={handleBackLink}>← 뒤로가기</PostBackLink>
      <PostHeaderInfoWrapper>
        <PostTitle>{title}</PostTitle>
        <PostDate>{date}</PostDate>
        <PostThumbnail image={image} alt="post-thumbnail" />
      </PostHeaderInfoWrapper>
    </PostHeaderWrapper>
  )
}

export default PostHeader