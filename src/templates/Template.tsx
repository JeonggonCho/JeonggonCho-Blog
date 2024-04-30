import { FC, FormEvent, ReactNode, useState } from "react"
import styled from "@emotion/styled"
import GlobalStyle from "../styles/GlobalStyle"
import { ThemeProvider } from "@emotion/react"
import theme from "../styles/theme.style"
import Header from "components/Common/Header"
import Footer from "components/Common/Footer"

export type TemplateProps = {
  children: ReactNode
}

const Container = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const Template: FC<TemplateProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const ToggleIsDarkMode = (e: FormEvent) => {
    e.preventDefault()
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Container>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header isDarkMode={isDarkMode} ToggleIsDarkMode={ToggleIsDarkMode} />
        {children}
        <Footer />
      </ThemeProvider>
    </Container>
  )
}

export default Template