import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { PostType } from "../../pages"

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
    background-color: ${({ theme }) => theme.colors.background.main};

    &:focus-within {
        outline: 1.5px solid dodgerblue;

        @media (max-width: 650px) {
            outline: none;
        }
    }
`

const SearchInputResetWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background.main};
    display: flex;
    align-items: center;

    @media (max-width: 650px) {
        position: fixed;
        top: 64px;
        width: 100vw;
        padding: 8px 20px;
        left: 50%;
        transform: translate(-50%, 0);
        border-top: 1px solid ${({ theme }) => theme.colors.font.sub};
        border-bottom: 1px solid ${({ theme }) => theme.colors.font.sub};
        z-index: 2;
    }
`

const SearchBarInput = styled.input`
    height: 30px;
    background-color: ${({ theme }) => theme.colors.background.main};
    border: none;
    outline: none;
    width: 172px;
    color: ${({ theme }) => theme.colors.font.main};

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-transition: background-color 9999s ease-out;
        -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.background.main} inset !important;
        -webkit-text-fill-color: ${({ theme }) => theme.colors.font.main} !important;
    }

    @media (max-width: 650px) {
        width: 100%;
    }
`

const SearchBarResetBtn = styled.div`
    display: flex;
    width: 12px;
    height: 12px;
    cursor: pointer;
    margin-right: 10px;

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
    cursor: pointer;
`

const SearchBarIconLightStyle = css`
    width: 14px;
    filter: invert(30%);
    transition: all 0.1s linear;

    &:hover {
        filter: invert(0%);
    }
`

const SearchBarIconDarkStyle = css`
    width: 14px;
    filter: invert(100%);
    transition: all 0.1s linear;

    &:hover {
        filter: invert(40%);
    }
`

const SearchResultsWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background.results};
    border-radius: 12px;
    position: absolute;
    top: 48px;
    box-shadow: 0px 12px 30px ${({ theme }) => theme.colors.background.shadow};
    display: flex;
    flex-direction: column;
    width: 400px;
    z-index: 2;

    @media (max-width: 1200px) {
        right: 0;
    }

    @media (max-width: 769px) {
        position: fixed;
        left: 50%;
        top: 64px;
        transform: translate(-50%, 0);
        width: 100vw;
        border-radius: 0;
        box-shadow: none;
    }

    @media (max-width: 650px) {
        top: 112px;
    }
`

const SearchResultsTitle = styled.p`
    color: ${({ theme }) => theme.colors.font.main};
    padding: 10px 20px;
    border-bottom: 0.1px solid ${({ theme }) => theme.colors.font.main};
    font-size: ${({ theme }) => theme.sizes.web.smallest};
`

const SearchResults = styled.div`
    max-height: 440px;
    overflow-y: scroll;

    @media (max-width: 769px) {
        max-height: 280px;
    }
`

const SearchResultLink = styled(Link)`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 20px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.background.resultHover};
    }
`

const SearchResultThumbnailWrapper = styled.div`
    width: 100px;
    height: 60px;
    overflow: hidden;
    border-radius: 4px;
    border: 0.1px solid black;
`

const SearchResultTitle = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.small};
    color: ${({ theme }) => theme.colors.font.sub};
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    width: 230px;

    @media (max-width: 769px) {
        width: 70vw;
    }

    @media (max-width: 550px) {
        width: 60vw;
    }

    @media (max-width: 395px) {
        width: 55vw;
    }
`

const SearchResultDate = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme }) => theme.colors.font.sub};
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
        //display: none;
        z-index: 1;
    }
`

const searchResultThumbnailStyle = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Search: FC = () => {

  const localThemeMode = JSON.parse(String(window.localStorage.getItem("isDarkMode")))

  const [query, setQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [showResetBtn, setShowResetBtn] = useState(false)
  const [showInputBox, setShowInputBox] = useState(false)
  const [showSearchBackground, setShowSearchBackground] = useState(false)

  const results = useRef(null)
  const inputBox = useRef()
  const resetBtn = useRef()
  const searchLabel = useRef()

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

  const handleClickSearchBarLabel = () => {
    setShowInputBox(!showInputBox)
    setShowSearchBackground(!showSearchBackground)
    setShowResults(!showResults)
  }

  const handleClickSearchBackground = () => {
    setShowInputBox(false)
    setShowSearchBackground(false)
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

  const filteredPosts = posts.filter((post: PostType) => {
    const { title, tags } = post.node.frontmatter

    const lowerTags = tags.map((tag: string) => tag.toLowerCase().replaceAll(" ", ""))
    const tagsQuery = lowerTags.includes(query.toLowerCase().replaceAll(" ", ""))

    const titleQuery = title.toLowerCase().replaceAll(" ", "").includes(query.toLowerCase().replaceAll(" ", ""))

    return (
      (titleQuery || tagsQuery) && query.replaceAll(" ", "").length !== 0
    )
  })

  return (
    <SearchWrapper>
      <SearchBarWrapper ref={inputBox}>
        {showInputBox &&
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
        }

        <SearchBarLabel
          htmlFor="search"
          ref={searchLabel}
          onClick={handleClickSearchBarLabel}
        >
          <StaticImage
            src="../../../static/search.svg"
            alt="search_label"
            css={localThemeMode ? SearchBarIconDarkStyle : SearchBarIconLightStyle}
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
      {showSearchBackground &&
        <SearchBackground
          onClick={handleClickSearchBackground}
        />
      }
    </SearchWrapper>
  )
}

export default Search