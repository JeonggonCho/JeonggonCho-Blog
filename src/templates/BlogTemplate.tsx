import React, { FC } from "react"
import Tabs from "components/Blog/Tabs"
import Template, { TemplateProps } from "./Template"
import styled from "@emotion/styled"
import { graphql } from "gatsby"

const BlogWrapper = styled.div`
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

const BlogTemplate: FC<TemplateProps> = ({
                                           title,
                                           description,
                                           url,
                                           image,
                                           children
                                         }) => {
  return (
    <Template
      title={title}
      description={description}
      url={url}
      image={image}
    >
      <BlogWrapper>
        <BlogContents>
          <BlogTitleIntroductionWrapper>
            <BlogTitle>블로그</BlogTitle>
            <BlogIntroduction>배우고 익힌 개발지식들을 정리한 기록공간</BlogIntroduction>
          </BlogTitleIntroductionWrapper>

          <Tabs />

          {children}
        </BlogContents>
      </BlogWrapper>
    </Template>
  )
}

export default BlogTemplate

export const getMetadata = graphql`
    query getMetadata {
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
        file(name: {eq: "meta-thumbnail"}) {
            publicURL
        }
    }
`