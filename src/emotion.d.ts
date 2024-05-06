import "@emotion/react"

declare module "@emotion/react" {
  export interface Theme {
    sizes: {
      web: {
        smallest: string;
        small: string;
        medium: string;
        large: string;
        largest: string;
        max: string;
      }
      mobile: {
        smallest: string;
        small: string;
        medium: string;
        large: string;
        largest: string;
        max: string;
      }
    }

    colors: {
      font: {
        main: string;
        sub: string;
        link: string;
        tag: string;
      }
      background: {
        main: string;
        sub: string;
        button: string;
        tag: string;
        categoryItem: string;
        shadow: string;
        results: string;
        resultHover: string;
        prevNext: string;
      }
    }
  }
}