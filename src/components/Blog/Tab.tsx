import { FC } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

interface SelectBtnProps {
  to: string;
  value: string;
}

const TabBtn = styled(Link)`
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.sizes.web.medium};
    color: ${({ theme }) => theme.colors.font.link};
    background: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.font.link};
    padding-bottom: 12px;
    cursor: pointer;
    transition: all 0.1s linear;

    &:hover {
        color: ${({ theme }) => theme.colors.font.main};
    }

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.medium};
    }
`

const Tab: FC<SelectBtnProps> = ({ to, value }) => {
  return (
    <TabBtn to={to}>{value}</TabBtn>
  )
}

export default Tab