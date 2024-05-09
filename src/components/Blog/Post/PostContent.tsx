import { FC } from "react"
import styled from "@emotion/styled"

type PostContentProps = {
  html: string
}

const PostContentRenderer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    word-break: break-all;
    padding-bottom: 28px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.font.sub};

    // Markdown Style
    line-height: 1.8;
    font-size: 16px;
    font-weight: 400;

    p {
        padding: 2px 0;
        color: ${({ theme }) => theme.colors.font.sub};
    }

    h1,
    h2,
    h3 {
        color: ${({ theme }) => theme.colors.font.main};
        font-weight: 700;
        margin-bottom: 10px;
        word-break: keep-all;
    }

    * + h1,
    * + h2,
    * + h3 {
        margin-top: 24px;
    }

    hr + h1,
    hr + h2,
    hr + h3 {
        margin-top: 0;
    }

    h1 {
        font-size: 30px;

        @media (max-width: 769px) {
            font-size: 24px;
        }
    }

    h2 {
        font-size: 25px;

        @media (max-width: 769px) {
            font-size: 20px;
        }
    }

    h3 {
        font-size: 20px;

        @media (max-width: 769px) {
            font-size: 18px;
        }
    }

    blockquote {
        margin: 30px 0;
        padding: 5px 15px;
        border-left: 4px solid ${({ theme }) => theme.colors.font.sub};
        font-weight: 500;
        background-color: ${({ theme }) => theme.colors.background.prevNext};
    }

    ol,
    ul {
        margin-left: 20px;
        padding: 0px 0px 20px 0px;
    }

    li {
        color: ${({ theme }) => theme.colors.font.sub};
    }

    hr {
        border-bottom: 1px solid ${({ theme }) => theme.colors.font.sub};
        margin: 36px 0;
    }

    a {
        color: dodgerblue;
        text-decoration: underline;
    }

    table {
        width: 100%;
        border: 1px solid ${({ theme }) => theme.colors.font.sub};
        border-collapse: collapse;
        margin-bottom: 16px;
    }

    th, td {
        border: 1px solid ${({ theme }) => theme.colors.font.sub};
        padding: 10px
    }

    th {
        background-color: ${({ theme }) => theme.colors.background.button};
        color: ${({ theme }) => theme.colors.font.main};
    }

    td {
        color: ${({ theme }) => theme.colors.font.sub};
    }

    img {
        max-width: 100%;
        height: auto;
        border: 1px solid ${({ theme }) => theme.colors.background.button};
    }

    span {
        margin-bottom: 16px;
    }

    pre[class*='language-'] {
        margin: 30px 0;
        padding: 15px;
        font-size: 15px;

        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.5);
            border-radius: 3px;
        }

        code[class*='language-'] {
            background: inherit;
            color: white;
            padding: 0;
            font-weight: 300;

            text, span {
                font-weight: 100;
            }
        }
    }

    code[class*='language-'] {
        color: ${({ theme }) => theme.colors.font.main};
        font-weight: 500;
        background: ${({ theme }) => theme.colors.background.button};
        padding-top: 5px;
        padding-right: 5px;
        padding-left: 5px;
    }

    code[class*='language-'],
    pre[class*='language-'] {
        tab-size: 2;
    }
`

const PostContent: FC<PostContentProps> = ({ html }) => {
  return (
    <PostContentRenderer dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default PostContent