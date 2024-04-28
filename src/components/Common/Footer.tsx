import { FC } from "react"
import styled from "@emotion/styled"

const FooterWrapper = styled.div`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.lightModeColors.background.gray};
`

const Footer: FC = () => {
  return (
    <FooterWrapper>

    </FooterWrapper>
  )
}

export default Footer