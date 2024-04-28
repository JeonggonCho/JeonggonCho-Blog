import { FC } from "react"
import { Link } from "gatsby"
import Template from "../templates/Template"

const aboutPage: FC = () => {
  return (
    <Template>
      <div>about</div>
      <Link to="/">홈으로</Link>
    </Template>
  )
}

export default aboutPage