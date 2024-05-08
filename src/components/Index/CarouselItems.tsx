import { FC } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import CarouselItem from "components/Index/CarouselItem"
import { PostType } from "../../pages"

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

const CarouselItemsPostsWrapper = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    overflow: hidden;
`

const CarouselItems: FC<CarouselItemsProps> = ({ title, to, edges }) => {
  return (
    <CarouselItemsWrapper>
      <CarouselItemsTitleWrapper>
        <CarouselItemsTitle>{title}</CarouselItemsTitle>
        <CarouselItemsMoreLink to={to}>More →</CarouselItemsMoreLink>
      </CarouselItemsTitleWrapper>

      <CarouselItemsPostsWrapper>
        {edges.map((post) => (
          <CarouselItem
            key={post.node.id}
            title={post.node.frontmatter.title}
            image={post.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
            date={post.node.frontmatter.date}
            slug={post.node.fields.slug}
          />
        ))}
      </CarouselItemsPostsWrapper>
    </CarouselItemsWrapper>
  )
}

export default CarouselItems