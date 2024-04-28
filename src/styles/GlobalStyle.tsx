import { FC } from "react"
import { css, Global } from "@emotion/react"

const defaultStyle = css`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Apple SD Gothic Neo', 'Nanum Gothic', sans-serif;
    }

    html,
    body,
    #___gatsby {
        height: 100%;
    }

    a,
    a:hover {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
`

const GlobalStyle: FC = () => {
  return (
    <Global styles={defaultStyle} />
  )
}

export default GlobalStyle