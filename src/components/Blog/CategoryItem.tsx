import { FC } from "react"
import styled from "@emotion/styled"

interface CategoryItemProps {
  category: string;
  image: string;
  color: string;
}

const CategoryItemWrapper = styled.div<{ color: string }>`
    width: 100%;
    max-width: 140px;
    height: 160px;
    margin: auto;
    background-color: ${props => props.color};
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    transition: all 0.2s linear;

    &:before {
        position: absolute;
        content: "";
        border-left: 1px solid white;
        margin-left: 12px;
        padding-bottom: 200px;
    }

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0px 4px 25px ${({ theme }) => theme.lightModeColors.background.lightGray};
    }
`

const CategoryItemTitle = styled.h4`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50px;
    left: 50%;
    font-size: ${({ theme }) => theme.sizes.web.medium};
    color: ${({ theme }) => theme.lightModeColors.font.white};
    background-color: ${({ theme }) => theme.lightModeColors.background.lightBlack};
    padding: 3px 6px;
    padding-top: 4px;
`

const CategoryItemThumbnail = styled.img`
    position: absolute;
    transform: translate(-50%, -50%);
    bottom: 30px;
    left: 50%;
    width: 24px;
    height: 24px;
`

const CategoryItem: FC<CategoryItemProps> = ({ category, image, color }) => {
  return (
    <CategoryItemWrapper color={color}>
      <CategoryItemTitle>{category}</CategoryItemTitle>
      <CategoryItemThumbnail src={image} alt="category_logo" />
    </CategoryItemWrapper>
  )
}

export default CategoryItem