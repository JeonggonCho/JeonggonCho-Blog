import { Theme } from "@emotion/react"

const theme: Theme = {
  lightModeColors: {
    font: {
      black: "#000000",
      white: "#FFFFFF",
      darkGray: "#454545",
      gray: "#AEAEAE"
    },
    background: {
      body: "#EDEDED",
      search: "#E3E3E3",
      lightGray: "#E4E4E4",
      gray: "#D2D2D2",
      darkGray: "#AEAEAE",
      white: "#FFFFFF"
    }
  },

  darkModeColors: {
    font: {
      white: "#FFFFFF",
      lightGray: "#D9D9D9"
    },
    background: {
      body: "#1F1E20",
      search: "#121112",
      black: "#000000",
      lightGray: "#4D4D4D",
      gray: "#3D3D3D"
    }
  },

  sizes: {
    web: {
      min: "12px",
      smallest: "14px",
      small: "16px",
      medium: "18px",
      large: "20px",
      largest: "24px",
      max: "32px"
    },
    mobile: {
      min: "10px",
      smallest: "12px",
      small: "14px",
      medium: "16px",
      large: "18px",
      largest: "20px"
    }
  }
}

export default theme