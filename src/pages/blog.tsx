import { FC } from "react"
import { Link } from "gatsby"
import Template from "../templates/Template"

const blogPage: FC = () => {
  return (
    <Template>
      <div>blog</div>
      <Link to="/">홈으로</Link>
    </Template>
  )
}

export default blogPage