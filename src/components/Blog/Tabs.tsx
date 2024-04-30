import { FC } from "react"
import styled from "@emotion/styled"
import Tab from "components/Blog/Tab"

const TabsWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 24px;
    margin-bottom: 32px;

    @media (max-width: 769px) {
        margin-bottom: 24px;
    }
`

const tabs: FC = () => {
  const tabList = [
    {
      value: "포스트별",
      to: "/posts/"
    },
    {
      value: "카테고리별",
      to: "/categories/"
    }
  ]

  return (
    <TabsWrapper>
      {tabList.map((el, idx) => (
        <Tab to={el.to} value={el.value} key={idx} />
      ))}
    </TabsWrapper>
  )
}

export default tabs