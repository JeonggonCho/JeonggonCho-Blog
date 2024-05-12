import { FC, useState } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import CarouselItem from 'components/Index/CarouselItem'
import { PostType } from '../../pages'

interface CarouselItemsProps {
  title: string;
  to: string;
  edges: PostType[];
}

const CarouselItemsWrapper = styled.div`
    width: 100%;
`

const CarouselItemsTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`

const CarouselItemsTitle = styled.h3`
    color: ${({ theme }) => theme.colors.font.main};
    font-size: ${({ theme }) => theme.sizes.web.large};
    font-weight: 600;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.large};
    }
`

const CarouselItemsMoreLink = styled(Link)`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme }) => theme.colors.font.link};

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.small};
    }

    &:hover {
        color: ${({ theme }) => theme.colors.font.main};
    }
`

const CarouselBtn = styled.button<{ role: string, breakPoint1: number, breakPoint2: number, idx: number }>`
    position: absolute;
    height: 36px;
    width: 36px;
    top: 26%;
    right: ${({ role }) => role === 'next' ? '8px' : ''};
    left: ${({ role }) => role === 'next' ? '' : '8px'};
    padding-left: ${({ role }) => role === 'next' ? '2px' : ''};
    padding-right: ${({ role }) => role === 'next' ? '' : '2px'};
    border: none;
    border-radius: 50%;
    font-size: ${({ theme }) => theme.sizes.web.medium};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.font.main};
    background-color: ${({ theme }) => theme.colors.background.main};
    cursor: pointer;
    transition: all 0.1s linear;
    visibility: hidden;
    display: ${({ breakPoint1, idx }) => breakPoint1 === idx ? 'none' : 'block'};
    z-index: 2;

    &:active {
        background-color: ${({ theme }) => theme.colors.background.sub};
    }

    @media (max-width: 650px) {
        top: 24%;
        display: ${({ breakPoint2, idx }) => breakPoint2 === idx ? 'none' : 'block'};
    }

    @media (max-width: 390px) {
        display: none;
    }
`

const CarouselItemsBtnsWrapper = styled.div`
    position: relative;

    &:hover {
        ${CarouselBtn} {
            visibility: visible;
        }
    }
`

const CarouselItemsPostsWrapper = styled.div`
    overflow: auto;

    &::-webkit-scrollbar {
        visibility: hidden;
    }
`

const CarouselItemsContainer = styled.div<{ idx: number }>`
    display: flex;
    width: fit-content;
    gap: 16px;
    transform: translateX(calc((((50vw - 32px) / 3) + 16px) * ${({ idx }) => -idx}));
    transition: all 0.3s linear;

    @media (max-width: 1100px) {
        transform: translateX(calc((((70vw - 32px) / 3) + 16px) * ${({ idx }) => -idx}));
    }

    @media (max-width: 769px) {
        transform: translateX(calc((((100vw - 72px) / 3) + 16px) * ${({ idx }) => -idx}));
    }

    @media (max-width: 650px) {
        transform: translateX(calc((100vw - 40px) * ${({ idx }) => -idx}));
    }
`

const CarouselItems: FC<CarouselItemsProps> = ({ title, to, edges }) => {
  const [idx, setIdx] = useState(0)

  const handleClickPrev = () => {
    if (idx === 0) return
    setIdx(prevState => prevState -= 1)
  }

  const handleClickNext = () => {
    if (idx === edges.length - 3) return
    setIdx(prevState => prevState += 1)
  }

  return (
    <CarouselItemsWrapper>
      <CarouselItemsTitleWrapper>
        <CarouselItemsTitle>{title}</CarouselItemsTitle>
        <CarouselItemsMoreLink to={to}>More →</CarouselItemsMoreLink>
      </CarouselItemsTitleWrapper>

      <CarouselItemsBtnsWrapper>
        <CarouselBtn
          role={'prev'}
          onClick={handleClickPrev}
          breakPoint1={0}
          breakPoint2={0}
          idx={idx}
        >〈</CarouselBtn>
        <CarouselBtn
          role={'next'}
          onClick={handleClickNext}
          breakPoint1={3}
          breakPoint2={2}
          idx={idx}
        >〉</CarouselBtn>
        <CarouselItemsPostsWrapper>
          <CarouselItemsContainer
            idx={idx}
          >
            {edges.map((post) => (
              <CarouselItem
                key={post.node.id}
                title={post.node.frontmatter.title}
                image={post.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
                date={post.node.frontmatter.date}
                slug={post.node.fields.slug}
              />
            ))}
          </CarouselItemsContainer>
        </CarouselItemsPostsWrapper>
      </CarouselItemsBtnsWrapper>
    </CarouselItemsWrapper>
  )
}

export default CarouselItems