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
    color: ${({ theme }) => theme.colors.font.main};
    font-size: ${({ theme }) => theme.sizes.web.largest};
    font-weight: 600;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.largest};
    }
`

const HomeLink = styled(Link)`
    color: ${({ theme }) => theme.colors.font.link};
    font-size: ${({ theme }) => theme.sizes.web.medium};

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.medium};
    }
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
          <AboutTitle>소개 페이지 제작 예정...</AboutTitle>
          <HomeLink to="/">홈으로</HomeLink>
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