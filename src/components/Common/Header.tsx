import React, { FC, FormEvent } from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import Search from "components/Common/Search"

interface HeaderProps {
  isDarkMode: boolean;
  ToggleIsDarkMode: (e: FormEvent) => void;
}

const HeaderWrapper = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background.sub};
    position: fixed;
    top: 0;
    z-index: 5;
`

const HeaderContents = styled.div`
    margin: auto;
    width: 70vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3vw;

    @media (max-width: 1200px) {
        width: 100%;
        margin: 0 20px;
    }
`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 5vw;
`

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: 3vw;
`

const HeaderIndexLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
`

const HeaderTitle = styled.h1`
    font-size: ${({ theme }) => theme.sizes.web.large};
    color: ${({ theme }) => theme.colors.font.sub};

    @media (max-width: 768px) {
        display: none;
    }
`

const HeaderMenus = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5vw;
`

const HeaderMenu = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.sizes.web.small};
    color: ${({ theme }) => theme.colors.font.sub};
    transition: all 0.1s linear;

    &:hover {
        color: ${({ theme }) => theme.colors.font.main};
    }

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.sizes.mobile.small};
    }
`

const ToggleMode = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.background.main};
`

const staticImageLightStyle = css`
    filter: invert(30%);
    transition: all 0.1s linear;

    &:hover {
        filter: invert(0%);
    }
`

const staticImageDarkStyle = css`
    filter: invert(100%);
    transition: all 0.1s linear;

    &:hover {
        filter: invert(40%);
    }
`

const Header: FC<HeaderProps> = ({
                                   isDarkMode,
                                   ToggleIsDarkMode
                                 }) => {

  const localThemeMode = JSON.parse(String(window.localStorage.getItem("isDarkMode")))

  const menus = {
    // About: "/about/",
    Blog: "/posts/"
    // Projects: "/projects/"
  }

  return (
    <HeaderWrapper>
      <HeaderContents>

        <HeaderLeft>
          <HeaderIndexLink to="/">
            <StaticImage
              src="../../../static/logo.svg"
              alt="logo"
              css={localThemeMode ? staticImageDarkStyle : staticImageLightStyle}
              width="16"
            />
            <HeaderTitle>Jeonggon</HeaderTitle>
          </HeaderIndexLink>

          <HeaderMenus>
            {Object.entries(menus).map(([menu, link]) => (
              <HeaderMenu key={menu} to={link}>{menu}</HeaderMenu>
            ))}
          </HeaderMenus>
        </HeaderLeft>

        <HeaderRight>
          <Search />

          <Link to="https://github.com/JeonggonCho" target="_blank">
            <StaticImage
              src="../../../static/github-mark.svg"
              alt="github"
              css={localThemeMode ? staticImageDarkStyle : staticImageLightStyle}
              width="28"
            />
          </Link>

          <ToggleMode onClick={ToggleIsDarkMode}>
            {isDarkMode ?
              <StaticImage
                src="../../../static/mode-light.svg"
                alt="mode"
                css={localThemeMode ? staticImageDarkStyle : staticImageLightStyle}
              /> :
              <StaticImage
                src="../../../static/mode-dark.svg"
                alt="mode"
                css={localThemeMode ? staticImageDarkStyle : staticImageLightStyle}
              />
            }
          </ToggleMode>
        </HeaderRight>

      </HeaderContents>
    </HeaderWrapper>
  )
}

export default Header