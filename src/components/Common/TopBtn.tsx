import React, { FC, useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const TopBtnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.background.button};
    border: none;
    position: fixed;
    right: 64px;
    bottom: 64px;
    cursor: pointer;
    z-index: 5;

    @media (max-width: 650px) {
        right: 20px;
        bottom: 20px;
    }
`

const upArrowLightStyle = css`
    width: 20px;
    height: 20px;
    filter: invert(0);
`

const upArrowDarkStyle = css`
    width: 20px;
    height: 20px;
    filter: invert(100);
`

const TopBtn: FC = () => {
  const localThemeMode = JSON.parse(String(window.localStorage.getItem("isDarkMode")))

  const [showBtn, setShowBtn] = useState(false)

  const handleTopBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    const handleShowBtn = () => {
      if (window.scrollY > 150) {
        setShowBtn(true)
      } else {
        setShowBtn(false)
      }
    }

    window.addEventListener("scroll", handleShowBtn)
    return () => {
      window.removeEventListener("scroll", handleShowBtn)
    }
  })

  if (!showBtn) {
    return null
  }

  return (
    <TopBtnWrapper onClick={handleTopBtn}>
      <StaticImage
        src="../../../static/up-arrow.svg"
        alt="top"
        css={localThemeMode ? upArrowDarkStyle : upArrowLightStyle}
      />
    </TopBtnWrapper>
  )
}

export default TopBtn