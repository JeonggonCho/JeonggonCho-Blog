import { FC, useState } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"

interface PostSameCategoryProps {
  posts: {
    node: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
        category: string;
      };
    };
  }[]
  category: string
}

const PostSameCategoryWrapper = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.background.prevNext};
    border-radius: 12px;
`

const PostSameCategoryTitleMoreWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.background.button};
    }
`

const PostSameCategoryTitle = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.small};
    color: ${({ theme }) => theme.colors.font.sub};
`

const PostSameCategoryLinkWrapper = styled.div<{ showLink: boolean }>`
    display: ${({ showLink }) => showLink ? "flex" : "none"};
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
    margin-bottom: 16px;
    margin-left: 16px;
    margin-right: 16px;
`

const PostSameCategoryLink = styled(Link)`
    width: fit-content;
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme }) => theme.colors.font.link};

    word-break: keep-all;

    &:hover {
        color: ${({ theme }) => theme.colors.font.main};
    }
`

const moreStyle = css`
    width: 16px;
    filter: invert(50%);
`

const PostSameCategory: FC<PostSameCategoryProps> = ({ posts, category }) => {

  const [showLink, setShowLink] = useState(false)

  const handleClickShowLink = () => {
    setShowLink(!showLink)
  }

  return (
    <PostSameCategoryWrapper>
      <PostSameCategoryTitleMoreWrapper
        onClick={handleClickShowLink}
      >
        <PostSameCategoryTitle><b>{category.toUpperCase()}</b> 포스트 ({posts.length})</PostSameCategoryTitle>
        {showLink ?
          <StaticImage
            src="../../../../static/up-arrow.svg"
            alt="down-arrow"
            css={moreStyle}
          /> :
          <StaticImage
            src="../../../../static/down-arrow.svg"
            alt="down-arrow"
            css={moreStyle}
          />
        }
      </PostSameCategoryTitleMoreWrapper>

      <PostSameCategoryLinkWrapper
        showLink={showLink}
      >
        {posts.map((post) => (
          <PostSameCategoryLink
            to={post.node.fields.slug}
          >
            {post.node.frontmatter.title}
          </PostSameCategoryLink>
        ))}
      </PostSameCategoryLinkWrapper>
    </PostSameCategoryWrapper>
  )
}

export default PostSameCategory