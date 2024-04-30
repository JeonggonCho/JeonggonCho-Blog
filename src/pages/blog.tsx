import React, { FC, useState } from "react"
import styled from "@emotion/styled"
import Template from "../templates/Template"
import Tabs from "components/Blog/Tabs"
import PostList from "components/Blog/PostList"
import CategoryList from "components/Blog/CategoryList"

const BlogWrapper = styled.div`
    background-color: ${({ theme }) => theme.lightModeColors.background.body};
    min-height: 100vh;
    display: flex;
    justify-content: center;
`

const BlogContents = styled.div`
    margin: 100px auto;
    width: 50vw;
    display: flex;
    flex-direction: column;

    @media (max-width: 1100px) {
        width: 70vw;
    }

    @media (max-width: 769px) {
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
    }

    @media (max-width: 650px) {
        margin-top: 80px;
        margin-bottom: 80px;
    }
`

const BlogTitleIntroductionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const BlogTitle = styled.h3`
    font-size: ${({ theme }) => theme.sizes.web.largest};

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.largest};
    }
`

const BlogIntroduction = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.medium};
    color: ${({ theme }) => theme.lightModeColors.font.darkGray};
    margin-bottom: 40px;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.medium};
        margin-bottom: 28px;
    }
`

const blogPage: FC = () => {

  const [tab, setTab] = useState("포스트별")

  const tabList = [
    { value: "포스트별" },
    { value: "카테고리별" }
  ]

  const handleTab = (value: string) => {
    setTab(value)
  }
  return (
    <Template>
      <BlogWrapper>
        <BlogContents>
          <BlogTitleIntroductionWrapper>
            <BlogTitle>블로그</BlogTitle>
            <BlogIntroduction>배우고 익힌 개발지식들을 정리한 기록공간</BlogIntroduction>
          </BlogTitleIntroductionWrapper>

          <Tabs handleTab={handleTab} tabList={tabList} />

          {tab === "포스트별" ? <PostList /> : <CategoryList />}
        </BlogContents>
      </BlogWrapper>
    </Template>
  )
}

export default blogPage