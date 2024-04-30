import { FC } from "react"
import styled from "@emotion/styled"
import Tab from "components/Blog/Tab"

interface TabsProps {
  handleTab: (value: string) => void;
  tabList: { value: string; }[];
}

const TabsWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 24px;
    margin-bottom: 32px;

    @media (max-width: 769px) {
        margin-bottom: 24px;
    }
`

const tabs: FC<TabsProps> = ({ handleTab, tabList }) => {
  return (
    <TabsWrapper>
      {tabList.map((el, idx) => (
        <Tab handleTab={handleTab} value={el.value} key={idx} />
      ))}
    </TabsWrapper>
  )
}

export default tabs