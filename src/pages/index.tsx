import React, { FC } from "react"
import styled from "@emotion/styled"
import Template from "../templates/Template"
import Profile from "components/Index/Profile"
import RecentItems from "components/Index/RecentItems"

const IndexWrapper = styled.div`
    background-color: ${({theme}) => theme.lightModeColors.background.body};
    min-height: 100vh;
    display: flex;
    justify-content: center;
`

const IndexContents = styled.div`
    margin: 100px auto;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;

    @media (max-width: 1100px) {
        width: 70vw;
    }

    @media (max-width: 769px) {
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
    }
    
    @media (max-width: 650px) {
        margin-top: 80px;
        margin-bottom: 80px;
    }
`

const IndexPage: FC = () => {
  return (
    <Template>
      <IndexWrapper>
        <IndexContents>
          <Profile/>
          <RecentItems title="Recent Posts" to="/blog/"/>
          <RecentItems title="Recent Projects" to="/projects/"/>
        </IndexContents>
      </IndexWrapper>
    </Template>
  )
}

export default IndexPage