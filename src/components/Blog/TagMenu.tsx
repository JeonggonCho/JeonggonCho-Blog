import { FC } from "react"
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
    min-width: 140px;

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

const TagMenuItem = styled(({ active, ...props }: TagMenuItemProps) => (
  <Link {...props} />
))`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme, active }) => (active ? theme.colors.font.main : theme.colors.font.link)};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
    transition: all 0.1s linear;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
        color: ${({ theme }) => theme.colors.font.main};
    }

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.small};
    }
`

const TagMenu: FC<TagMenuProps> = ({ tagList, selectedTag }) => {
  return (
    <TagMenuWrapper>
      <TagMenuTitle>Tags</TagMenuTitle>
      <TagMenuList>
        {Object.entries(tagList).map(([name, count]) => (
          <TagMenuItem
            to={`/posts/?tag=${name}`}
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