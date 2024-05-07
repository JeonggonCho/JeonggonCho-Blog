import { FC, Fragment } from "react"
import { css, Global } from "@emotion/react"

const defaultStyle = css`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Toss Product Sans', 'Apple SD Gothic Neo', 'Nanum Gothic', sans-serif;
        scroll-margin-top: 80px;
    }

    html {
        scroll-behavior: smooth;
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
    <Fragment>
      <link rel="stylesheet" href="https://static.toss.im/tps/main.css" />
      <link rel="stylesheet" href="https://static.toss.im/tps/others.css" />
      <Global styles={defaultStyle} />
    </Fragment>
  )
}

export default GlobalStyle