import { FC } from "react"
import styled from "@emotion/styled"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { Link } from "gatsby"

interface RecentItemProps {
  title: string;
  image: IGatsbyImageData;
  date: string;
  slug: string;
}

const RecentItemThumbnail = styled(GatsbyImage)`
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 0.2s linear;
`

const RecentItemWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 8px;
    cursor: pointer;

    &:hover {
        ${RecentItemThumbnail} {
            scale: 1.1;
        }
    }
`

const RecentItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-left: 8px;
`

const RecentItemTitle = styled.h4`
    font-size: ${({ theme }) => theme.sizes.web.small};
    color: ${({ theme }) => theme.colors.font.main};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    width: 200px;
`

const RecentItemSub = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme }) => theme.colors.font.link};
`

const RecentItemThumbnailWrapper = styled.div`
    height: 164px;
    width: 230px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 8px;
`

const RecentItem: FC<RecentItemProps> = ({ title, image, date, slug }) => {
  return (
    <RecentItemWrapper to={slug}>
      <RecentItemThumbnailWrapper>
        <RecentItemThumbnail image={image} alt="thumbnail" />
      </RecentItemThumbnailWrapper>

      <RecentItemInfo>
        <RecentItemTitle>{title}</RecentItemTitle>
        <RecentItemSub>{date}</RecentItemSub>
      </RecentItemInfo>
    </RecentItemWrapper>
  )
}

export default RecentItem