import React, { FC } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const PostProfileWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
`

const PostProfileInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const PostProfileTitle = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.large};
    color: ${({ theme }) => theme.colors.font.main};
    font-weight: 600;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.large};
    }
`

const PostProfileIntroduction = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.small};
    color: ${({ theme }) => theme.colors.font.link};
    margin-bottom: 6px;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.small};
    }
`

const PostProfileLinkWrapper = styled.div`
    display: flex;
    gap: 12px;
`

const profileStyle = css`
    width: 76px;
    height: 76px;
    border-radius: 50%;

    @media (max-width: 769px) {
        width: 72px;
        height: 72px;
    }
`

const staticImage = css`
    width: 18px;
    filter: invert(60%);
`

const PostProfile: FC = () => {

  const profileImageData = useStaticQuery(graphql`
      query getPostProfileImageData {
          postProfileImage: file(name: {eq: "profile-img"}) {
              childImageSharp {
                  gatsbyImageData(width: 82, height: 82)
              }
          }
      }
  `)

  return (
    <PostProfileWrapper>
      <GatsbyImage
        image={profileImageData.postProfileImage.childImageSharp.gatsbyImageData}
        alt="profile"
        css={profileStyle}
      />

      <PostProfileInfoWrapper>
        <PostProfileTitle>조정곤</PostProfileTitle>
        <PostProfileIntroduction>주니어 프론트엔드 개발자</PostProfileIntroduction>
        <PostProfileLinkWrapper>
          <Link to="https://github.com/JeonggonCho" target="_blank">
            <StaticImage src="../../../../static/github-mark.svg" alt="github" css={staticImage} />
          </Link>
          <Link to="https://www.linkedin.com/in/%EC%A0%95%EA%B3%A4-%EC%A1%B0-6097b7256/" target="_blank">
            <StaticImage src="../../../../static/linkedin-mark.svg" alt="linkedin" css={staticImage} />
          </Link>
          <Link to="https://www.instagram.com/jeong_goni/" target="_blank">
            <StaticImage src="../../../../static/instagram-mark.svg" alt="instagram" css={staticImage} />
          </Link>
          <Link to="mailto:jeonggon.dev@gmail.com">
            <StaticImage src="../../../../static/gmail-mark.svg" alt="email" css={staticImage} />
          </Link>
        </PostProfileLinkWrapper>
      </PostProfileInfoWrapper>
    </PostProfileWrapper>
  )
}

export default PostProfile