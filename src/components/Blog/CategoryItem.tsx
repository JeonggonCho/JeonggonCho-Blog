import { FC } from "react"
import styled from "@emotion/styled"
import { graphql, navigate, useStaticQuery } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { css } from "@emotion/react"

type CategoryItemProps = {
  category: string
  active: boolean
}

type categoryType = {
  name: string
  image: IGatsbyImageData
  color: string
  to: string
}

interface ICategories {
  [git: string]: categoryType
}

const CategoryItemWrapper = styled.div<{ color: string, active: boolean }>`
    width: 100%;
    max-width: 160px;
    min-width: 148px;
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

const CategoryItemThumbnailStyle = css`
    position: absolute;
    transform: translate(-50%, -50%);
    bottom: 30px;
    left: 50%;
    width: 24px;
    height: 24px;
`

const CategoryItem: FC<CategoryItemProps> = ({ category, active }) => {

  const categoriesLogoData = useStaticQuery(graphql`
      query getCategoriesLogoData {
          gitLogo: file(name: {eq: "git"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          htmlLogo: file(name: {eq: "html"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          cssLogo: file(name: {eq: "css"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          javascriptLogo: file(name: {eq: "javascript"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          sqlLogo: file(name: {eq: "mysql"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          typescriptLogo: file(name: {eq: "typescript"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          reactLogo: file(name: {eq: "react"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          viteLogo: file(name: {eq: "vite"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          mongodbLogo: file(name: {eq: "mongodb"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }
      }
  `)

  const categories: ICategories = {
    git: {
      name: "Git",
      image: categoriesLogoData.gitLogo.childImageSharp.gatsbyImageData,
      color: "#EDBEA9",
      to: "/category/?category=git"
    },
    html: {
      name: "HTML",
      image: categoriesLogoData.htmlLogo.childImageSharp.gatsbyImageData,
      color: "#ECD9A8",
      to: "/category/?category=html"
    },
    css: {
      name: "CSS",
      image: categoriesLogoData.cssLogo.childImageSharp.gatsbyImageData,
      color: "#C8CDF2",
      to: "/category/?category=css"
    },
    javascript: {
      name: "JavaScript",
      image: categoriesLogoData.javascriptLogo.childImageSharp.gatsbyImageData,
      color: "#E5E6AC",
      to: "/category/?category=javascript"
    },
    sql: {
      name: "SQL",
      image: categoriesLogoData.sqlLogo.childImageSharp.gatsbyImageData,
      color: "#ADD6F4",
      to: "/category/?category=sql"
    },
    typescript: {
      name: "TypeScript",
      image: categoriesLogoData.typescriptLogo.childImageSharp.gatsbyImageData,
      color: "#9CBDD9",
      to: "/category/?category=typescript"
    },
    react: {
      name: "React",
      image: categoriesLogoData.reactLogo.childImageSharp.gatsbyImageData,
      color: "#ADC5E9",
      to: "/category/?category=react"
    },
    vite: {
      name: "Vite",
      image: categoriesLogoData.viteLogo.childImageSharp.gatsbyImageData,
      color: "#B5BAD9",
      to: "/category/?category=vite"
    },
    mongodb: {
      name: "MongoDB",
      image: categoriesLogoData.mongodbLogo.childImageSharp.gatsbyImageData,
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
      <GatsbyImage
        image={categories[category].image}
        alt="category_logo"
        css={CategoryItemThumbnailStyle}
      />
    </CategoryItemWrapper>
  )
}

export default CategoryItem