import { FC } from "react"
import styled from "@emotion/styled"
import { navigate } from "gatsby"

type CategoryItemProps = {
  category: string
  active: boolean
}

type categoryType = {
  name: string
  image: string
  color: string
  to: string
}

interface ICategories {
  [git: string]: categoryType
}

const CategoryItemWrapper = styled.div<{ color: string, active: boolean }>`
    width: 100%;
    max-width: 160px;
    min-width: 120px;
    height: 180px;
    margin: 0 auto;
    background-color: ${props => props.color};
    border-radius: 8px;
    cursor: ${props => props.active ? "pointer" : "default"};
    position: relative;
    transition: all 0.2s linear;

    &:before {
        position: absolute;
        content: "";
        border-left: 1px solid white;
        margin-left: 12px;
        padding-bottom: 180px;
    }

    &:hover {
        transform: ${props => props.active ? "translateY(-6px)" : "none"};
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

const CategoryItem: FC<CategoryItemProps> = ({ category, active }) => {

  const categories: ICategories = {
    git: {
      name: "Git",
      image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      color: "#EDBEA9",
      to: "/category/?category=git"
    },
    html: {
      name: "HTML",
      image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      color: "#ECD9A8",
      to: "/category/?category=html"
    },
    css: {
      name: "CSS",
      image: "https://cdn.iconscout.com/icon/free/png-256/free-css-131-722685.png",
      color: "#C8CDF2",
      to: "/category/?category=css"
    },
    javascript: {
      name: "JavaScript",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      color: "#E5E6AC",
      to: "/category/?category=javascript"
    },
    sql: {
      name: "SQL",
      image: "https://seeklogo.com/images/A/azure-sql-database-logo-D7A32C9CD9-seeklogo.com.png",
      color: "#ADD6F4",
      to: "/category/?category=sql"
    },
    typescript: {
      name: "TypeScript",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
      color: "#9CBDD9",
      to: "/category/?category=typescript"
    },
    react: {
      name: "React",
      image: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
      color: "#ADC5E9",
      to: "/category/?category=react"
    },
    vite: {
      name: "Vite",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png",
      color: "#B5BAD9",
      to: "/category/?category=vite"
    },
    mongodb: {
      name: "MongoDB",
      image: "https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png",
      color: "#C0EBDD",
      to: "/category/?category=mongodb"
    }
  }

  const handleCategoryItemClick = () => {
    if (active) {
      navigate(categories[category].to)
    }
  }

  return (
    <CategoryItemWrapper
      onClick={handleCategoryItemClick}
      color={categories[category].color}
      active={active}
    >
      <CategoryItemTitle>{categories[category].name}</CategoryItemTitle>
      <CategoryItemThumbnail src={categories[category].image} alt="category_logo" />
    </CategoryItemWrapper>
  )
}

export default CategoryItem