import { FC } from "react"
import styled from "@emotion/styled"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

interface RecentItemProps {
  title: string;
  image: IGatsbyImageData;
  date: string;
}

const RecentItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    cursor: pointer;

    &:hover {
        img {
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
`

const RecentItemSub = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme }) => theme.lightModeColors.font.gray};
`

const RecentItemThumbnailWrapper = styled.div`
    height: 164px;
    width: 230px;
    border-radius: 12px;
    overflow: hidden;

`

const RecentItemThumbnail = styled(GatsbyImage)`
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 0.2s linear;
`

const RecentItem: FC<RecentItemProps> = ({ title, image, date }) => {
  return (
    <RecentItemWrapper>
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