import { FC } from "react"
import styled from "@emotion/styled"

interface SelectBtnProps {
  handleTab: (value: string) => void;
  value: string;
}

const TabBtn = styled.button`
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.sizes.web.medium};
    color: ${({ theme }) => theme.lightModeColors.font.gray};
    background: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.lightModeColors.font.gray};
    padding-bottom: 12px;
    cursor: pointer;
    transition: all 0.1s linear;

    &:hover {
        color: ${({ theme }) => theme.lightModeColors.font.darkGray};
    }

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.medium};
    }
`

const Tab: FC<SelectBtnProps> = ({ handleTab, value }) => {
  return (
    <TabBtn onClick={() => handleTab(value)}>{value}</TabBtn>
  )
}

export default Tab