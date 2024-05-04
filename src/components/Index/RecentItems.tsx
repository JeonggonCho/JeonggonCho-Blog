import { FC } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import RecentItem from "components/Index/RecentItem"
import { PostType } from "../../pages"

interface RecentItemsProps {
  title: string;
  to: string;
  edges: PostType[];
}

const RecentItemsWrapper = styled.div`
    width: 100%;
`

const RecentItemsTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`

const RecentItemsTitle = styled.h3`
    font-size: ${({ theme }) => theme.sizes.web.large};

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.large};
    }
`

const RecentItemsMoreLink = styled(Link)`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme }) => theme.lightModeColors.font.gray};

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.smallest};
    }
`

const RecentItemsPostsWrapper = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    overflow: hidden;
`

const RecentItems: FC<RecentItemsProps> = ({ title, to, edges }) => {
  return (
    <RecentItemsWrapper>
      <RecentItemsTitleWrapper>
        <RecentItemsTitle>{title}</RecentItemsTitle>
        <RecentItemsMoreLink to={to}>More →</RecentItemsMoreLink>
      </RecentItemsTitleWrapper>

      <RecentItemsPostsWrapper>
        {edges.map((post) => (
          <RecentItem
            key={post.node.id}
            title={post.node.frontmatter.title}
            image={post.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
            date={post.node.frontmatter.date}
            slug={post.node.fields.slug}
          />
        ))}
      </RecentItemsPostsWrapper>
    </RecentItemsWrapper>
  )
}

export default RecentItems