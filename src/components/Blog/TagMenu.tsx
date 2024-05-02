import { FC } from "react"
import styled from "@emotion/styled"
import { TagListProps } from "../../pages/posts"
import { Link } from "gatsby"

const TagMenuWrapper = styled.div`
    width: 140px;
    min-width: 180px;

    @media (max-width: 1300px) {
        min-width: 100px;
    }

    @media (max-width: 769px) {
        width: 100%;
    }
`

const TagMenuTitle = styled.h3`
    font-size: ${({ theme }) => theme.sizes.web.large};
    color: ${({ theme }) => theme.lightModeColors.font.darkGray};
    margin-bottom: 28px;

    @media (max-width: 769px) {
        display: none;
    }
`

const TagMenuList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (max-width: 769px) {
        flex-direction: row;
        height: 40px;
        overflow: scroll;
        ::-webkit-scrollbar {
            display: none;
        }
    }
`

const TagMenuItem = styled(Link)`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme }) => theme.lightModeColors.font.gray};
    transition: all 0.1s linear;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
        color: ${({ theme }) => theme.lightModeColors.font.darkGray};
    }

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.small};
    }
`

const TagMenu: FC<TagListProps> = ({ tagList }) => {
  return (
    <TagMenuWrapper>
      <TagMenuTitle>Tags</TagMenuTitle>
      <TagMenuList>
        {Object.entries(tagList).map(([name, count]) => (
          <TagMenuItem
            to={`/posts/?tag=${name}`}
            key={name}
          >
            {name} ({count})
          </TagMenuItem>
        ))}
      </TagMenuList>
    </TagMenuWrapper>
  )
}

export default TagMenu