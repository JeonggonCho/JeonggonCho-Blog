import { FC } from "react"
import styled from "@emotion/styled"

type TagProps = {
  content: string
}

const TagWrapper = styled.div`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    background-color: ${({ theme }) => theme.lightModeColors.background.darkGray};
    color: ${({ theme }) => theme.lightModeColors.font.white};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 6px;
    padding-top: 3px;
    border-radius: 4px;
    white-space: nowrap;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.smallest};
    }
`

const Tag: FC<TagProps> = ({ content }) => {
  return (
    <TagWrapper>{content}</TagWrapper>
  )
}

export default Tag