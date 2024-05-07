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
    h2 {
        color: ${({ theme }) => theme.colors.font.main};
        font-weight: 500;
        margin-bottom: 10px;
    }


    h3 {
        color: ${({ theme }) => theme.colors.font.main};
        font-weight: 800;
        margin-bottom: 10px;
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
        border-left: 2px solid ${({ theme }) => theme.colors.font.tag};
        font-weight: 800;
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
        color: ${({ theme }) => theme.colors.font.link};
        text-decoration: underline;

        &:hover {
            color: ${({ theme }) => theme.colors.font.main};
        }
    }

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