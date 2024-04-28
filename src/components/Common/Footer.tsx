import { FC } from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { css } from "@emotion/react"

const FooterWrapper = styled.div`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.lightModeColors.background.gray};
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
    font-size: ${({theme}) => theme.sizes.web.smallest};
    color: ${({theme}) => theme.lightModeColors.font.darkGray};

    @media (max-width: 650px) {
        font-size: ${({theme}) => theme.sizes.mobile.min};
    }
`

const staticImage = css`
    filter: invert(60%);
`

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterContents>
        <FooterLinks>
          <Link to="https://github.com/JeonggonCho" target="_blank">
            <StaticImage src="../../images/github-mark.svg" alt="github" css={staticImage} width="28"/>
          </Link>
          <Link to="https://www.linkedin.com/in/%EC%A0%95%EA%B3%A4-%EC%A1%B0-6097b7256/" target="_blank">
            <StaticImage src="../../images/linkedin-mark.svg" alt="github" css={staticImage} width="28"/>
          </Link>
          <Link to="https://www.instagram.com/jeong_goni/" target="_blank">
            <StaticImage src="../../images/instagram-mark.svg" alt="github" css={staticImage} width="28"/>
          </Link>
        </FooterLinks>

        <FooterRights>Copyright © 2024. 조정곤 All rights reserved.</FooterRights>

      </FooterContents>
    </FooterWrapper>
  )
}

export default Footer