import { FC } from "react"
import styled from "@emotion/styled"

interface RecentItemProps {
  title: string;
  image: string;
  date: string;
}

const RecentItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    cursor: pointer;
`

const RecentItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-left: 8px;
`

const RecentItemTitle = styled.h4`
    font-size: ${({theme}) => theme.sizes.web.small};
`

const RecentItemSub = styled.p`
    font-size: ${({theme}) => theme.sizes.web.smallest};
    color: ${({theme}) => theme.lightModeColors.font.darkGray};
`

const RecentItemThumbnailWrapper = styled.div`
    height: 164px;
    width: 230px;
    border-radius: 12px;
    overflow: hidden;
    
`

const RecentItemThumbnail = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const RecentItem:FC<RecentItemProps> = ({title, image, date}) => {
  return (
    <RecentItemWrapper>
      <RecentItemThumbnailWrapper>
        <RecentItemThumbnail src={image} alt={image} />
      </RecentItemThumbnailWrapper>

      <RecentItemInfo>
        <RecentItemTitle>{title}</RecentItemTitle>
        <RecentItemSub>{date}</RecentItemSub>
      </RecentItemInfo>
    </RecentItemWrapper>
  )
}

export default RecentItem;