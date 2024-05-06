import { FC } from "react"
import styled from "@emotion/styled"
import PostCard from "components/Blog/PostCard"
import { PostType } from "../../pages"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"

type PostCardsProps = {
  edges: PostType[]
}

const PostCardsWrapper = styled.div`
    flex-grow: 1;
`

const PostCardsPostCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 769px) {
        gap: 24px;
    }
`

const PostCardsNoContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 28px;
    min-height: 200px;
    color: ${({ theme }) => theme.colors.font.link};
    font-size: ${({ theme }) => theme.sizes.web.large};
`

const emptyImageStyle = css`
    width: 100px;
    margin-bottom: 32px;
`

const PostCards: FC<PostCardsProps> = ({ edges }) => {

  return (
    <PostCardsWrapper>
      <PostCardsPostCardWrapper>
        {edges.length !== 0 ? edges.map((el) => (
            <PostCard
              key={el.node.id}
              title={el.node.frontmatter.title}
              date={el.node.frontmatter.date}
              tags={el.node.frontmatter.tags}
              image={el.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
              slug={el.node.fields.slug}
            />
          )) :
          <PostCardsNoContent>
            <StaticImage
              src="../../../static/empty.png"
              alt="no-content"
              css={emptyImageStyle}
            />
            게시물이 없어요<br />
            <b>No Content</b>
          </PostCardsNoContent>
        }
      </PostCardsPostCardWrapper>
    </PostCardsWrapper>
  )
}

export default PostCards