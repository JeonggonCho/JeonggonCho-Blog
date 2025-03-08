import { FC } from 'react'
import styled from '@emotion/styled'
import { graphql, navigate, useStaticQuery } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

type CategoryItemProps = {
  category: string
  active: boolean
  position: string
}

type categoryType = {
  name: string
  image: IGatsbyImageData
  color: string
  to: string
}

interface ICategories {
  [category: string]: categoryType
}

const CategoryItemWrapper = styled.div<{ color: string, active: boolean, position: string }>`
    width: 100%;
    max-width: 160px;
    min-width: 148px;
    height: 180px;
    margin: 0 auto;
    background-color: ${props => props.color};
    border-radius: 8px;
    cursor: ${props => props.active ? 'pointer' : 'default'};
    position: ${props => props.position};
    top: ${props => props.position === 'sticky' ? '100px' : '0px'};
    transition: all 0.2s linear;
    z-index: 2;

    &:before {
        position: absolute;
        content: "";
        border-left: 1px solid white;
        margin-left: 12px;
        padding-bottom: 180px;
    }

    &:hover {
        transform: ${props => props.active ? 'translateY(-6px)' : 'none'};
    }

    @media (max-width: 769px) {
        top: 0;
        position: relative;
    }
`

const CategoryItemTitle = styled.h4`
    word-break: keep-all;
    position: absolute;
    text-align: center;
    transform: translate(-50%, -50%);
    top: 50px;
    left: 50%;
    font-size: ${({ theme }) => theme.sizes.web.medium};
    color: ${({ theme }) => theme.colors.font.tag};
    background-color: ${({ theme }) => theme.colors.background.categoryItem};
    padding: 4px 6px 3px;
`

const CategoryItemThumbnailStyle = css`
    position: absolute;
    transform: translate(-50%, -50%);
    bottom: 30px;
    left: 50%;
    width: auto;
    height: 24px;
`

const CategoryItem: FC<CategoryItemProps> = ({ category, active, position }) => {

  const categoriesLogoData = useStaticQuery(graphql`
      query getCategoriesLogoData {
          markdownLogo: file(name: {eq: "markdown"}) {
              childImageSharp {
                  gatsbyImageData(width: 40, height: 24)
              }
          }

          gitLogo: file(name: {eq: "git"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          pythonLogo: file(name: {eq: "python"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          djangoLogo: file(name: {eq: "django"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          mysqlLogo: file(name: {eq: "mysql"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          mongodbLogo: file(name: {eq: "mongodb"}) {
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

          nodejsLogo: file(name: {eq: "nodejs"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          expressLogo: file(name: {eq: "expressjs"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          typescriptLogo: file(name: {eq: "typescript"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          webpackLogo: file(name: {eq: "webpack"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          viteLogo: file(name: {eq: "vite"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          reactLogo: file(name: {eq: "react"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          nextjsLogo: file(name: {eq: "nextjs"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          graphqlLogo: file(name: {eq: "graphql"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          apolloLogo: file(name: {eq: "apollo"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          dockerLogo: file(name: {eq: "docker"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          datastructureLogo: file(name: {eq: "data"}) {
              childImageSharp {
                  gatsbyImageData(width: 23, height: 27)
              }
          }

          csLogo: file(name: {eq: "computer_science"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          gatsbyLogo: file(name: {eq: "gatsby"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          reduxLogo: file(name: {eq: "redux"}) {
              childImageSharp {
                  gatsbyImageData(width: 28, height: 25)
              }
          }

          hearLogo: file(name: {eq: "hear"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          dolbomLogo: file(name: {eq: "dolbom"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }

          mureokLogo: file(name: {eq: "mureok"}) {
              childImageSharp {
                  gatsbyImageData(width: 24, height: 24)
              }
          }
      }
  `)

  const categories: ICategories = {
    markdown: {
      name: 'Markdown',
      image: categoriesLogoData.markdownLogo.childImageSharp.gatsbyImageData,
      color: '#d2d2d2',
      to: '/category/?category=markdown',
    },
    git: {
      name: 'Git',
      image: categoriesLogoData.gitLogo.childImageSharp.gatsbyImageData,
      color: '#EDBEA9',
      to: '/category/?category=git',
    },
    python: {
      name: 'Python',
      image: categoriesLogoData.pythonLogo.childImageSharp.gatsbyImageData,
      color: '#9CBDD9',
      to: '/category/?category=python',
    },
    django: {
      name: 'Django',
      image: categoriesLogoData.djangoLogo.childImageSharp.gatsbyImageData,
      color: '#94CDA4',
      to: '/category/?category=django',
    },
    mysql: {
      name: 'MySQL',
      image: categoriesLogoData.mysqlLogo.childImageSharp.gatsbyImageData,
      color: '#ADD6F4',
      to: '/category/?category=mysql',
    },
    mongodb: {
      name: 'MongoDB',
      image: categoriesLogoData.mongodbLogo.childImageSharp.gatsbyImageData,
      color: '#C0EBDD',
      to: '/category/?category=mongodb',
    },
    html: {
      name: 'HTML',
      image: categoriesLogoData.htmlLogo.childImageSharp.gatsbyImageData,
      color: '#ECD9A8',
      to: '/category/?category=html',
    },
    css: {
      name: 'CSS',
      image: categoriesLogoData.cssLogo.childImageSharp.gatsbyImageData,
      color: '#C8CDF2',
      to: '/category/?category=css',
    },
    javascript: {
      name: 'JavaScript',
      image: categoriesLogoData.javascriptLogo.childImageSharp.gatsbyImageData,
      color: '#E5E6AC',
      to: '/category/?category=javascript',
    },
    nodejs: {
      name: 'Node.js',
      image: categoriesLogoData.nodejsLogo.childImageSharp.gatsbyImageData,
      color: '#C2E2AE',
      to: '/category/?category=nodejs',
    },
    express: {
      name: 'Express.js',
      image: categoriesLogoData.expressLogo.childImageSharp.gatsbyImageData,
      color: '#C0C0C0',
      to: '/category/?category=express',
    },
    typescript: {
      name: 'TypeScript',
      image: categoriesLogoData.typescriptLogo.childImageSharp.gatsbyImageData,
      color: '#9CBDD9',
      to: '/category/?category=typescript',
    },
    webpack: {
      name: 'Webpack',
      image: categoriesLogoData.webpackLogo.childImageSharp.gatsbyImageData,
      color: '#BAECFC',
      to: '/category/?category=webpack',
    },
    vite: {
      name: 'Vite',
      image: categoriesLogoData.viteLogo.childImageSharp.gatsbyImageData,
      color: '#B5BAD9',
      to: '/category/?category=vite',
    },
    react: {
      name: 'React',
      image: categoriesLogoData.reactLogo.childImageSharp.gatsbyImageData,
      color: '#ADC5E9',
      to: '/category/?category=react',
    },
    nextjs: {
      name: 'Next.js',
      image: categoriesLogoData.nextjsLogo.childImageSharp.gatsbyImageData,
      color: '#E5E5E5',
      to: '/category/?category=nextjs',
    },
    redux: {
      name: 'Redux',
      image: categoriesLogoData.reduxLogo.childImageSharp.gatsbyImageData,
      color: '#ECDFFF',
      to: '/category/?category=redux',
    },
    graphql: {
      name: 'GraphQL',
      image: categoriesLogoData.graphqlLogo.childImageSharp.gatsbyImageData,
      color: '#F5D6EE',
      to: '/category/?category=graphql',
    },
    apollo: {
      name: 'Apollo',
      image: categoriesLogoData.apolloLogo.childImageSharp.gatsbyImageData,
      color: '#D6CDF8',
      to: '/category/?category=apollo',
    },
    docker: {
      name: 'Docker',
      image: categoriesLogoData.dockerLogo.childImageSharp.gatsbyImageData,
      color: '#BEE7FF',
      to: '/category/?category=docker',
    },
    data_structure: {
      name: 'Data Structure',
      image: categoriesLogoData.datastructureLogo.childImageSharp.gatsbyImageData,
      color: '#FCE4A8',
      to: '/category/?category=data_structure',
    },
    computer_science: {
      name: 'Computer Science',
      image: categoriesLogoData.csLogo.childImageSharp.gatsbyImageData,
      color: '#F8CDD0',
      to: '/category/?category=computer_science',
    },
    mureok: {
      name: '무럭무럭 [프로젝트]',
      image: categoriesLogoData.mureokLogo.childImageSharp.gatsbyImageData,
      color: '#D3F4E0',
      to: '/category/?category=mureok',
    },
    blog: {
      name: '블로그 [프로젝트]',
      image: categoriesLogoData.gatsbyLogo.childImageSharp.gatsbyImageData,
      color: '#BFB7DF',
      to: '/category/?category=blog',
    },
    hear: {
      name: 'HEAR [프로젝트]',
      image: categoriesLogoData.hearLogo.childImageSharp.gatsbyImageData,
      color: '#F0F4FF',
      to: '/category/?category=hear',
    },
    dolbom: {
      name: '돌봄 [프로젝트]',
      image: categoriesLogoData.dolbomLogo.childImageSharp.gatsbyImageData,
      color: '#FFE6C9',
      to: '/category/?category=dolbom',
    },
  }

  const handleCategoryItemClick = () => {
    if (active && categories[category]) {
      navigate(categories[category].to)
    }
  }

  return (
    <CategoryItemWrapper
      onClick={handleCategoryItemClick}
      color={categories[category]?.color || ''}
      active={active}
      position={position}
    >
      <CategoryItemTitle>{categories[category]?.name || ''}</CategoryItemTitle>
      <GatsbyImage
        image={categories[category]?.image || ''}
        alt="category_logo"
        css={CategoryItemThumbnailStyle}
      />
    </CategoryItemWrapper>
  )
}

export default CategoryItem