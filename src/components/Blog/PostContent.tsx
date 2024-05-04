import { FC } from "react"
import styled from "@emotion/styled"

type PostContentProps = {
  html: string
}

const PostContentRenderer = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 0 auto;
    word-break: break-all;
    padding-bottom: 28px;
    border-bottom: 1px solid black;

    // Markdown Style
    line-height: 1.8;
    font-size: 16px;
    font-weight: 400;

    // Apply Padding Attribute to All Elements

    p {
        padding: 2px 0;
    }

    // Adjust Heading Element Style

    h1,
    h2,
    h3 {
        font-weight: 800;
        margin-bottom: 10px;
    }

    * + h1,
    * + h2,
    * + h3 {
        margin-top: 30px;
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

    // Adjust Quotation Element Style

    blockquote {
        margin: 30px 0;
        padding: 5px 15px;
        border-left: 2px solid #000000;
        font-weight: 800;
    }

    // Adjust List Element Style

    ol,
    ul {
        margin-left: 20px;
        padding: 0px 0px 20px 0px;
    }

    // Adjust Horizontal Rule style

    hr {
        border-bottom: 1px solid black;
        margin: 36px 0;
    }

    // Adjust Link Element Style

    a {
        color: ${({ theme }) => theme.lightModeColors.font.gray};
        text-decoration: underline;

        &:hover {
            color: ${({ theme }) => theme.lightModeColors.font.black};
        }
    }

    // Adjust Code Style

    pre[class*='language-'] {
        margin: 30px 0;
        padding: 15px;
        font-size: 15px;

        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.5);
            border-radius: 3px;
        }
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