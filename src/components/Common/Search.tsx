import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { graphql, Link, useStaticQuery } from "gatsby"

const SearchWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    position: relative;
`

const SearchBarWrapper = styled.div`
    padding: 0 11px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    gap: 2px;
    background-color: ${({ theme }) => theme.lightModeColors.background.white};
`

const SearchInputResetWrapper = styled.div`
    background-color: ${({ theme }) => theme.lightModeColors.background.white};
    display: flex;
    align-items: center;

    @media (max-width: 650px) {
        position: fixed;
        top: 64px;
        width: 100vw;
        padding: 8px 20px;
        left: 50%;
        transform: translate(-50%, 0);
        border-top: 1px solid ${({ theme }) => theme.lightModeColors.font.gray};
        border-bottom: 1px solid ${({ theme }) => theme.lightModeColors.font.gray};
        z-index: 2;
    }
`

const SearchBarInput = styled.input`
    height: 30px;
    background-color: ${({ theme }) => theme.lightModeColors.background.white};
    border: none;
    outline: none;
    width: 172px;

    @media (max-width: 650px) {
        width: 100%;
    }
`

const SearchBarResetBtn = styled.div`
    display: flex;
    width: 12px;
    height: 12px;
    cursor: pointer;
    margin-right: 20px;

    &:hover {
        filter: brightness(0.5);
    }

    @media (max-width: 650px) {
        margin: 0;
    }
`

const SearchBarLabel = styled.label`
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SearchBarIconStyle = css`
    width: 14px;
    filter: invert(30%);
    transition: all 0.1s linear;

    &:hover {
        filter: invert(0%);
    }
`

const SearchResultsWrapper = styled.div`
    background-color: ${({ theme }) => theme.lightModeColors.background.white};
    border-radius: 12px;
    position: absolute;
    top: 48px;
    box-shadow: 0px 0px 10px ${({ theme }) => theme.lightModeColors.background.gray};
    display: flex;
    flex-direction: column;
    width: 400px;
    z-index: 2;

    @media (max-width: 768px) {
        position: fixed;
        left: 50%;
        top: 64px;
        transform: translate(-50%, 0);
        width: 100vw;
        border-radius: 0;
        box-shadow: 0px 30px 50px black;
    }

    @media (max-width: 650px) {
        top: 112px;
    }
`

const SearchResultsTitle = styled.p`
    padding: 10px 20px;
    border-bottom: 0.1px solid ${({ theme }) => theme.lightModeColors.background.lightBlack};
    font-size: ${({ theme }) => theme.sizes.web.smallest};
`

const SearchResults = styled.div`
    max-height: 250px;
    overflow-y: scroll;
`

const SearchResultLink = styled(Link)`
    padding: 10px 20px;
    border-top: 0.1px solid lightgrey;
    display: flex;
    align-items: center;
    gap: 20px;

    &:hover {
        background-color: #f1f1f1;
    }
`

const SearchResultThumbnailWrapper = styled.div`
    width: 100px;
    height: 60px;
    overflow: hidden;
    border-radius: 4px;

`

const SearchResultTitle = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.small};
    color: ${({ theme }) => theme.lightModeColors.font.darkGray};
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    width: 230px;
`

const SearchResultDate = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme }) => theme.lightModeColors.font.gray};
`

const SearchBackground = styled.div`
    @media (max-width: 768px) {
        width: 100vw;
        height: 100vh;
        background-color: black;
        opacity: 0.8;
        transform: translate(-50%, 0);
        position: fixed;
        top: 64px;
        left: 50%;
        z-index: 1;
    }
`

const searchResultThumbnailStyle = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Search: FC = () => {

  const [query, setQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [showResetBtn, setShowResetBtn] = useState(false)

  const results: React.MutableRefObject<undefined> = useRef()
  const inputBox: React.MutableRefObject<undefined> = useRef()
  const resetBtn: React.MutableRefObject<undefined> = useRef()

  // 검색 결과 영역 바깥 클릭 시, 검색 결과 영역 숨기기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (results.current && !results.current.contains(e.target)) {
        setShowResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // 검색 결과 영역이 숨겨진 상태에서 다시 input 클릭 시, 검색 결과 영역 보이게하기
  useEffect(() => {
    const handleClickInputBox = (e: MouseEvent) => {
      if (inputBox.current && inputBox.current.contains(e.target)) {
        setShowResults(true)
      }
    }

    document.addEventListener("mousedown", handleClickInputBox)

    return () => {
      document.removeEventListener("mousedown", handleClickInputBox)
    }
  }, [])

  // 검색 리셋 버튼을 input에 검색어가 있을때만 보이게 하기
  useEffect(() => {
    if (query.length !== 0) {
      setShowResetBtn(true)
    } else {
      setShowResetBtn(false)
    }
  }, [query])

  const handleSearchBar = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setQuery(e.target.value)
    setShowResults(true)
  }

  const handleSearchReset = () => {
    setQuery("")
  }

  const data = useStaticQuery(graphql`
      query getAllMarkdownRemark {
          allMarkdownRemark(sort: {order:DESC, fields: [frontmatter___date, frontmatter___title]}) {
              edges {
                  node {
                      id
                      fields {
                          slug
                      }
                      frontmatter {
                          title
                          date(formatString: "YYYY.MM.DD.")
                          tags
                          thumbnail {
                              childImageSharp {
                                  gatsbyImageData(width: 300, height: 140)
                              }
                          }
                      }
                  }
              }
          }
      }
  `)

  const posts = data.allMarkdownRemark.edges

  const filteredPosts = posts.filter((post) => {
    const { title } = post.node.frontmatter
    return (
      title.toLowerCase().replaceAll(" ", "").includes(query.toLowerCase()) && query.length !== 0
    )
  })

  return (
    <SearchWrapper>
      <SearchBarWrapper ref={inputBox}>
        <SearchInputResetWrapper>
          <SearchBarInput
            type="text"
            value={query}
            onChange={handleSearchBar}
            placeholder="Search..."
            id="search"
          />
          {showResetBtn &&
            <SearchBarResetBtn
              onClick={handleSearchReset}
              ref={resetBtn}
            >
              <StaticImage src="../../../static/x.png" alt="x-button" />
            </SearchBarResetBtn>}
        </SearchInputResetWrapper>

        <SearchBarLabel htmlFor="search">
          <StaticImage
            src="../../../static/search.svg"
            alt="search_label"
            css={SearchBarIconStyle}
          />
        </SearchBarLabel>
      </SearchBarWrapper>

      {filteredPosts.length !== 0 && showResults &&
        <SearchResultsWrapper ref={results}>
          <SearchResultsTitle>검색 결과는 <b>{filteredPosts.length}</b> 개 입니다</SearchResultsTitle>
          <SearchResults>
            {filteredPosts.map(({ node }) => (
              <SearchResultLink to={node.fields.slug}>
                <SearchResultThumbnailWrapper>
                  <GatsbyImage
                    alt="thumbnail"
                    image={node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
                    css={searchResultThumbnailStyle}
                  />
                </SearchResultThumbnailWrapper>
                <div>
                  <SearchResultTitle>{node.frontmatter.title}</SearchResultTitle>
                  <SearchResultDate>{node.frontmatter.date}</SearchResultDate>
                </div>
              </SearchResultLink>
            ))}
          </SearchResults>
        </SearchResultsWrapper>
      }
      <SearchBackground />
    </SearchWrapper>
  )
}

export default Search