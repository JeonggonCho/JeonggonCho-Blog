import { FC, useMemo } from "react"
import styled from "@emotion/styled"
import PostCard from "components/Blog/PostCard"
import { PostType } from "../../pages"

type PostCardsProps = {
  edges: PostType[]
  selectedTag: string
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

const PostCards: FC<PostCardsProps> = ({ edges, selectedTag }) => {

  // posts를 selectedTag로 필터링하기
  // useMemo로 최적화 및 selectedTag 변화 시, 리렌더링
  const postListData = useMemo(() => (
    edges.filter(({ node: { frontmatter: { tags } } }) => (
      selectedTag !== "All" ? tags.includes(selectedTag) : true
    ))
  ), [selectedTag])

  return (
    <PostCardsWrapper>
      <PostCardsPostCardWrapper>
        {postListData.map((el) => (
          <PostCard
            title={el.node.frontmatter.title}
            date={el.node.frontmatter.date}
            tags={el.node.frontmatter.tags}
            image={el.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
          />
        ))}
      </PostCardsPostCardWrapper>
    </PostCardsWrapper>
  )
}

export default PostCards