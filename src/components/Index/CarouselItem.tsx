import { FC } from "react"
import styled from "@emotion/styled"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { Link } from "gatsby"

interface CarouselItemProps {
  title: string;
  image: IGatsbyImageData;
  date: string;
  slug: string;
}

const CarouselItemThumbnail = styled(GatsbyImage)`
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 0.2s linear;
`

const CarouselItemWrapper = styled(Link)`
    width: calc((50vw - 32px) / 3);
    display: flex;
    flex-direction: column;
    gap: 8px;
    cursor: pointer;

    &:hover {
        ${CarouselItemThumbnail} {
            scale: 1.1;
        }
    }

    @media (max-width: 1100px) {
        width: calc((70vw - 32px) / 3);
    }

    @media (max-width: 769px) {
        width: calc((100vw - 72px) / 3);
    }

    @media (max-width: 650px) {
        width: calc((100vw - 56px) / 2);
    }
`

const CarouselItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 0 8px;
`

const CarouselItemTitle = styled.h4`
    font-size: ${({ theme }) => theme.sizes.web.small};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.font.main};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    width: inherit;
`

const CarouselItemSub = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme }) => theme.colors.font.link};
`

const CarouselItemThumbnailWrapper = styled.div`
    height: 164px;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 8px;

    @media (max-width: 650px) {
        height: 134px;
    }
`

const CarouselItem: FC<CarouselItemProps> = ({ title, image, date, slug }) => {
  return (
    <CarouselItemWrapper to={slug}>
      <CarouselItemThumbnailWrapper>
        <CarouselItemThumbnail image={image} alt="thumbnail" />
      </CarouselItemThumbnailWrapper>

      <CarouselItemInfo>
        <CarouselItemTitle>{title}</CarouselItemTitle>
        <CarouselItemSub>{date}</CarouselItemSub>
      </CarouselItemInfo>
    </CarouselItemWrapper>
  )
}

export default CarouselItem