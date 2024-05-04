import { FC } from "react"
import Template from "../templates/Template"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"

const NotFoundWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
`

const NotFoundContents = styled.div`
    margin: 100px auto;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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

const NotFoundTitle = styled.h3`
    font-size: 72px;
    color: ${({ theme }) => theme.lightModeColors.font.darkGray};
`

const NotFoundText = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.largest};
    color: ${({ theme }) => theme.lightModeColors.font.gray};
    line-height: 40px;
    margin-bottom: 20px;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.largest};
    }
`

const NotFoundIndexLink = styled(Link)`
    font-size: ${({ theme }) => theme.sizes.web.large};
    color: ${({ theme }) => theme.lightModeColors.font.gray};
    text-decoration: underline;

    &:hover {
        text-decoration: underline;

    }
`

const SadImageStyle = css`
    width: 100px;
    margin-bottom: 20px;
`

const NotFoundPage: FC = () => {
  return (
    <Template>
      <NotFoundWrapper>
        <NotFoundContents>
          <NotFoundTitle>404</NotFoundTitle>
          <StaticImage src="../../static/sad.png" alt="sad-emoji" css={SadImageStyle} />
          <NotFoundText>
            해당 페이지를 찾을 수 없습니다.<br />
            다른 컨텐츠를 보러 가시겠어요?
          </NotFoundText>
          <NotFoundIndexLink to="/">홈으로</NotFoundIndexLink>
        </NotFoundContents>
      </NotFoundWrapper>
    </Template>
  )
}

export default NotFoundPage