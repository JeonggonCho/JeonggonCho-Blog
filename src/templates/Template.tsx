import { FC, ReactNode } from "react"
import styled from "@emotion/styled"
import GlobalStyle from "../styles/GlobalStyle"
import { ThemeProvider } from "@emotion/react"
import theme from "../styles/theme.style"

type TemplateProps = {
  children: ReactNode
}

const Container = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const Template: FC<TemplateProps> = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Container>
  )
}

export default Template