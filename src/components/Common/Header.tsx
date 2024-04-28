import styled from "@emotion/styled"
import { FC } from "react"

const HeaderWrapper = styled.div`
    width: 100%;
    height: 64px;
    background-color: ${({ theme }) => theme.lightModeColors.background.gray};
`

const Header: FC = () => {
  return (
    <HeaderWrapper>

    </HeaderWrapper>
  )
}

export default Header