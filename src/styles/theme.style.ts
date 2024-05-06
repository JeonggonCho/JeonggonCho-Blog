import { Theme } from "@emotion/react"

const sizes = {
  web: {
    smallest: "14px",
    small: "16px",
    medium: "18px",
    large: "20px",
    largest: "24px",
    max: "32px"
  },
  mobile: {
    smallest: "12px",
    small: "14px",
    medium: "16px",
    large: "18px",
    largest: "20px",
    max: "24px"
  }
}

export const lightTheme: Theme = {
  sizes: sizes,
  colors: {
    font: {
      main: "#000000",
      sub: "#454545",
      link: "#AEAEAE",
      tag: "#FFFFFF"
    },
    background: {
      main: "#FFFFFF",
      sub: "#D2D2D2",
      button: "#E4E4E4",
      tag: "#AEAEAE",
      categoryItem: "#454545",
      shadow: "#8A8A8A",
      results: "#FFFFFF",
      resultHover: "#F4F4F4"
    }
  }
}

export const darkTheme: Theme = {
  sizes: sizes,
  colors: {
    font: {
      main: "#FFFFFF",
      sub: "#D9D9D9",
      link: "#8A8A8A",
      tag: "#D9D9D9"
    },
    background: {
      main: "#1F1E20",
      sub: "#000000",
      button: "#2A2A2A",
      tag: "#3D3D3D",
      categoryItem: "#3D3D3D",
      shadow: "#000000",
      results: "#2A2A2A",
      resultHover: "#1F1E20"
    }
  }
}