import { FC } from "react"
import styled from "@emotion/styled"
import Tag from "components/Blog/Tag"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { Link } from "gatsby"

interface PostCardProps {
  title: string;
  date: string;
  tags: string[];
  image: IGatsbyImageData;
  slug: string;
}

const PostCardThumbnailWrapper = styled.div`
    width: 300px;
    height: 140px;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.1s linear;

    @media (max-width: 769px) {
        border-radius: 12px;
        height: 120px;
    }
`

const PostCardWrapper = styled(Link)`
    display: flex;
    gap: 24px;
    width: 100%;
    border-radius: 12px;
    cursor: pointer;

    &:hover {
        ${PostCardThumbnailWrapper} {
            transform: translateY(-4px);
            box-shadow: 0px 3px 10px ${({ theme }) => theme.colors.background.shadow};
        }
    }

    @media (max-width: 769px) {
        padding: 0;
        gap: 12px;

        &:hover {
            background: none;
        }
    }
`

const PostCardThumbnail = styled(GatsbyImage)`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const PostCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`

const PostCardTitle = styled.h3`
    color: ${({ theme }) => theme.colors.font.main};
    font-size: ${({ theme }) => theme.sizes.web.medium};
    margin-top: 12px;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.medium};
    }
`

const PostCardTitleDateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const PostCardDate = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme }) => theme.colors.font.sub};

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.smallest};
    }
`

const PostCardTagWrapper = styled.div`
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

const PostCard: FC<PostCardProps> = ({
                                       title,
                                       date,
                                       tags,
                                       image,
                                       slug
                                     }) => {
  return (
    <PostCardWrapper to={slug}>
      <PostCardThumbnailWrapper>
        <PostCardThumbnail image={image} alt="post thumbnail" />
      </PostCardThumbnailWrapper>

      <PostCardInfo>
        <PostCardTitleDateWrapper>
          <PostCardTitle>{title}</PostCardTitle>
          <PostCardDate>{date}</PostCardDate>
        </PostCardTitleDateWrapper>

        <PostCardTagWrapper>
          {tags.map((el) => (
            <Tag content={el} />
          ))}
        </PostCardTagWrapper>
      </PostCardInfo>
    </PostCardWrapper>
  )
}

export default PostCard