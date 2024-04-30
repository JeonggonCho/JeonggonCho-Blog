import { FC } from "react"
import styled from "@emotion/styled"
import CategoryItem from "components/Blog/CategoryItem"

const CategoryListWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;

    @media (max-width: 910px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 769px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (max-width: 662px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }
`

const CategoryList: FC = () => {

  const dummyCategory = [
    {
      id: 0,
      category: "Git",
      image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      color: "#EDBEA9"
    },
    {
      id: 1,
      category: "HTML",
      image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      color: "#ECD9A8"
    },
    {
      id: 2,
      category: "CSS",
      image: "https://cdn.iconscout.com/icon/free/png-256/free-css-131-722685.png",
      color: "#C8CDF2"
    },
    {
      id: 3,
      category: "JavaScript",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      color: "#E5E6AC"
    },
    {
      id: 4,
      category: "SQL",
      image: "https://seeklogo.com/images/A/azure-sql-database-logo-D7A32C9CD9-seeklogo.com.png",
      color: "#ADD6F4"
    },
    {
      id: 5,
      category: "TypeScript",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
      color: "#9CBDD9"
    },
    {
      id: 6,
      category: "React",
      image: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
      color: "#ADC5E9"
    },
    {
      id: 7,
      category: "Vite",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png",
      color: "#B5BAD9"
    },
    {
      id: 8,
      category: "MongoDB",
      image: "https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png",
      color: "#C0EBDD"
    }
  ]

  return (
    <CategoryListWrapper>
      {dummyCategory.map((el) => (
        <CategoryItem key={el.id} category={el.category} image={el.image} color={el.color} />
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList