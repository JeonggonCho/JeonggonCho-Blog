import { useEffect, useState } from "react"
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
    background-color: ${({ theme }) => theme.lightModeColors.background.lightGray};
    border: none;
    position: fixed;
    right: 64px;
    bottom: 64px;
    cursor: pointer;
    z-index: 3;
`

const upArrow = css`
    width: 20px;
    height: 20px;
`

const TopBtn = () => {

  const [showBtn, setShowBtn] = useState(false)

  const handleTopBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    const handleShowBtn = () => {
      if (window.scrollY > 200) {
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

  return (
    showBtn && (
      <TopBtnWrapper onClick={handleTopBtn}>
        <StaticImage src="../../images/up-arrow.svg" alt="top" css={upArrow} />
      </TopBtnWrapper>
    )
  )
}

export default TopBtn