import React, { FC } from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { css } from "@emotion/react"

const FooterWrapper = styled.div`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.colors.background.sub};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 650px) {
        height: 162px;
    }
`

const FooterContents = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    gap: 20px;
`

const FooterLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;
`

const FooterRights = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme }) => theme.colors.font.sub};

    @media (max-width: 650px) {
        font-size: ${({ theme }) => theme.sizes.mobile.smallest};
    }
`

const staticImage = css`
    width: 28px;
    filter: invert(60%);
`

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterContents>
        <FooterLinks>
          <Link to="https://github.com/JeonggonCho" target="_blank">
            <StaticImage src="../../../static/github-mark.svg" alt="github" css={staticImage} />
          </Link>
          <Link to="https://www.linkedin.com/in/%EC%A0%95%EA%B3%A4-%EC%A1%B0-6097b7256/" target="_blank">
            <StaticImage src="../../../static/linkedin-mark.svg" alt="linkedin" css={staticImage} />
          </Link>
          <Link to="https://www.instagram.com/jeong_goni/" target="_blank">
            <StaticImage src="../../../static/instagram-mark.svg" alt="instagram" css={staticImage} />
          </Link>
          <Link to="mailto:jeonggon.dev@gmail.com">
            <StaticImage src="../../../static/gmail-mark.svg" alt="email" css={staticImage} />
          </Link>
        </FooterLinks>

        <FooterRights>Copyright © 2024. 조정곤 All rights reserved.</FooterRights>

      </FooterContents>
    </FooterWrapper>
  )
}

export default Footer