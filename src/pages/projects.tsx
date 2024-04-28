import { FC } from "react"
import { Link } from "gatsby"
import Template from "../templates/Template"

const projectsPage: FC = () => {
  return (
    <Template>
      <div>projects</div>
      <Link to="/">홈으로</Link>
    </Template>
  )
}

export default projectsPage