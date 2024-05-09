import { FC, useState } from "react"
import styled from "@emotion/styled"
import { TagListProps } from "../../pages/posts"
import { Link } from "gatsby"

interface TagMenuProps extends TagListProps {
  selectedTag: string;
}

interface TagMenuItemProps {
  children: (string | number)[];
  to: string;
  active: boolean;
}

const TagMenuWrapper = styled.div`
    min-width: 160px;

    @media (max-width: 1300px) {
        min-width: 132px;
    }

    @media (max-width: 769px) {
        width: 100%;
    }
`

const TagMenuTitle = styled.h3`
    font-size: ${({ theme }) => theme.sizes.web.large};
    color: ${({ theme }) => theme.colors.font.sub};
    margin-bottom: 28px;

    @media (max-width: 769px) {
        display: none;
    }
`

const TagMenuList = styled.div<{ hoverTagMenu: boolean }>`
    top: 100px;
    position: sticky;
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 55vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.background.button};
        border-radius: 2px;
        visibility: ${({ hoverTagMenu }) => hoverTagMenu ? "visible" : "hidden"};
        cursor: pointer;
    }

    @media (max-width: 769px) {
        position: static;
        flex-direction: row;
        height: 24px;
        overflow: scroll;
        margin-bottom: 36px;
        margin-top: 8px;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`

const TagMenuItem = styled(({ active, ...props }: TagMenuItemProps) => (
  <Link {...props} />
))`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme, active }) => (active ? theme.colors.font.sub : theme.colors.font.link)};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
    transition: all 0.1s linear;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
        color: ${({ theme }) => theme.colors.font.main};
    }

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.medium};
    }
`

const TagMenu: FC<TagMenuProps> = ({ tagList, selectedTag }) => {

  const [hoverTagMenu, setHoverTagMenu] = useState(false)

  const handleHoverTagMenu = () => {
    setHoverTagMenu(!hoverTagMenu)
  }

  return (
    <TagMenuWrapper>
      <TagMenuTitle>Tags</TagMenuTitle>
      <TagMenuList
        hoverTagMenu={hoverTagMenu}
        onMouseEnter={handleHoverTagMenu}
        onMouseLeave={handleHoverTagMenu}
      >
        {Object.entries(tagList).map(([name, count]) => (
          <TagMenuItem
            to={`/posts/?tag=${name}&page=1`}
            key={name}
            active={(name === selectedTag)}
          >
            {name} ({count})
          </TagMenuItem>
        ))}
      </TagMenuList>
    </TagMenuWrapper>
  )
}

export default TagMenu