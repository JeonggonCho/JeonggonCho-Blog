import React, { FC } from "react"
import { graphql, Link } from "gatsby"
import Template from "../templates/Template"
import styled from "@emotion/styled"

interface AboutPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
      }
    }
    file: {
      publicURL: string
    }
  }
}

const AboutWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background.main};
    min-height: 100vh;
    display: flex;
    justify-content: center;
`

const AboutContents = styled.div`
    margin: 100px auto;
    width: 50vw;
    display: flex;
    flex-direction: column;
    gap: 64px;

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

const AboutTitle = styled.h3`
    font-size: ${({ theme }) => theme.sizes.web.large};
    color: ${({ theme }) => theme.colors.font.main};
    margin-bottom: 28px;
`

const aboutPage: FC<AboutPageProps> = ({
                                         data: {
                                           site: {
                                             siteMetadata: { title, description, siteUrl }
                                           },
                                           file: { publicURL }
                                         }
                                       }) => {
  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <AboutWrapper>
        <AboutContents>
          <AboutTitle>about 페이지 아직 작업 중...</AboutTitle>
          <Link to="/">홈으로</Link>
        </AboutContents>
      </AboutWrapper>
    </Template>
  )
}

export default aboutPage

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