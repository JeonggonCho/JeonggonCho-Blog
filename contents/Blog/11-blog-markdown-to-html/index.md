---
date: '2024-06-04'
title: '블로그 개발 - 마크다운(Markdown) 문서를 HTML로 출력하기'
category: 'blog'
tags: [ 'blog', 'project', 'gatsby', 'markdown', 'html' ]
thumbnail: './thumbnail.png'
---

# Gatsby와 마크다운

블로그의 내용은 마크다운(markdown) 파일로 작성되며, 이를 Gatsby에서 가져와 최종적으로 블로그에 출력하는 과정에 대해 알아보았다.

<br/>

## 1. gatsby-node.js 설정하기

블로그의 디테일한 포스트 페이지를 만들기 위해서는 `gatsby-node.js`를 설정해주어야 한다. gatsby-node.js 파일은 빌드 시, 동적인 페이지를 생성하는데 사용되며 GraphQL 쿼리를 통해
데이터를 가져오고 이를 바탕으로 페이지를 동적으로 생성할 수 있다.

```js
// gatsby-node.js

// createPages 함수 생성
exports.createPages = async ({ actions, graphql, reporter }) => {

  // actions 객체에서 createPage 메서드 가져오기
  const { createPage } = actions;

  // queryAllMarkdownData 변수 데이터 생성
  // 데이터에는 slug를 포함한다.
  const queryAllMarkdownData = await graphql(
    `
          {
              allMarkdownRemark(
                  sort: {
                      order:DESC
                      fields: [frontmatter___date, frontmatter___title]
                  }
              ) {
                  edges {
                      node {
                          id
                          fields {
                              slug
                          }
                      }
                  }
              }
          }
    `
  );

  // 빌드 중에 에러 발생 시, 에러 메시지 출력하고 빌드 중단하기
  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`);
    return;
  }

  // 쿼리한 데이터의 edges를 posts 변수에 담기
  const posts = queryAllMarkdownData.data.allMarkdownRemark.edges;

  // posts 순회하기
  posts.forEach((post, index) => {
    // 이전 포스트와 다음 포스트의 id
    const prevPostId = index === 0 ? null : posts[index - 1].node.id;
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].node.id;

    // createPage 메서드 사용하여 동적 페이지 생성하기
    // 페이지의 경로는 slug이며,
    // 페이지는 PostTemplate 컴포넌트로 만들어진다.
    // 페이지에 이전 포스트와 다음 포스트의 id를 담아서 생성
    createPage({
      path: post.node.fields.slug,
      component: path.resolve(__dirname, "src/templates/PostTemplate.tsx"),
      context: {
        slug: post.node.fields.slug,
        prevPostId,
        nextPostId
      }
    })
  })
};
```

<br/>

## 2. 라이브러리

마크다운을 처리하기 위해서 gatsby에서는 여러가지 라이브러리를 제공하며, 각각의 라이브러리의 역할은 아래와 같다.

<br/>

### 2-1. gatsby-transformer-remark

마크다운 파일들을 `파싱(parse)`하여 GraphQL 데이터로 변환하여 `쿼리할 수 있도록` 도와준다.

또한 마크다운 파일에는 frontmatter라는 제목, 태그, 작성일, 썸네일 등의 메타데이터 블록을 가지는데 해당 라이브러리가 마크다운을 파싱할 때, 마크다운 파일의 frontmatter 부분의 정보 역시
GraphQL로 쿼리할 수 있도록 해준다.

<br/>

1. 라이브러리 설치하기

```bash
$ npm install gatsby-transformer-remark
```

<br/>

2. gatsby-config.js 파일에 플러그인 등록하기

```js
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // 옵션은 필요 시, 설정
      },
    },
  ],
}
```

<br/>

3. 마크다운 파일에 frontmatter 작성

마크다운 파일에서 (---)블록으로 둘러싸인 부분이 frontmatter의 역할을 한다.

```markdown
[//]: # (마크다운 문서)

[//]: # (frontmatter 부분 -> 내용은 필요에 따라서 구성 가능)
---
date: '2024-06-02'
title: '제목'
category: 'blog'
tags: [ 'blog', 'project', 'gatsby', 'markdown', 'html' ]
thumbnail: './thumbnail.png'
---

[//]: # (본문 작성)
```

<br/>

4. GraphQL로 쿼리하기

node의 html에 마크다운의 본문내용이 담겨있으며, frontmatter의 각각의 내용도 쿼리할 수 있다.

```graphql
{
    allMarkdownRemark {
        edges {
            node {
                html
                frontmatter {
                    title
                    date(formatString: "YYYY.MM.DD.")
                    tags
                    category
                    thumbnail {
                        childImageSharp {
                            gatsbyImageData
                        }
                        publicURL
                    }
                }
            }
        }
    }
}
```

<br/>

### 2-2. gatsby-remark-images

마크다운 문서 내에서 사용한 `이미지를 최적화`해주는 라이브러리로 gatsby에 사용되는 정적 이미지와 동적이미지를 최적화
해주었던 `gatsby-plugin-sharp`, `gatsby-transformer-remark`와 함께 사용한다.

<br/>

1. 라이브러리 설치하기

```bash
$ npm install gatsby-remark-images gatsby-plugin-sharp
```

<br/>

2. gatsby-config.js 파일에 등록하기

```js
// gatsby-config.js

plugins: [
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            // 옵션은 필요 시, 설정
          },
        },
      ],
    },
  },
]
```

<br/>

3. 마크다운 내에서 이미지 넣기

```markdown
[//]: # (이미지 넣기)

![이미지 alt(이름) 넣기](./image.jpg)
```

<br/>

### 2-3. gatsby-remark-prismjs

마크다운 문서에서는 백틱 3개(```) 사용하여 `코드블럭`을 작성할 수 있는데 이를 위해 `PrismJS`를 사용한다.

<br/>

1. 라이브러리 설치하기

```bash
$ npm install gatsby-transformer-remark gatsby-remark-prismjs prismjs
```

<br/>

2. gatsby-config.js 파일에 등록하기

```js
// gatsby-config.js

plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            // 옵션은 필요 시, 설정
          },
        },
      ],
    },
  },
]
```

<br/>

3. gatsby-browser.js 파일에서 코드블럭 CSS 테마 설정하기

테마는 PrismJS에서 여러가지를 지원한다. 원하는 테마를 적용하면 된다.

https://github.com/PrismJS/prism/tree/1d5047df37aacc900f8270b1c6215028f6988eb1/themes

```js
// gatsby-browser.js

import "prismjs/themes/prism-tomorrow.css";
```

<br/>

### 2-4. gatsby-remark-smartypants

마크다운 내의 문장 부호들을 좀 더 `깔끔한 부호`로 대체하는 기능을 한다.

https://retextjs.github.io/retext-smartypants/

<br/>

1. 라이브러리 설치하기

```bash
$ npm install gatsby-remark-smartypants
```

<br/>

2. gatsby-config.js 파일에 등록하기

```js
// gatsby-config.js

plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-smartypants",
          options: {
            // 옵션 필요 시, 사용
          },
        },
      ],
    },
  },
]
```

<br/>

### 2-5. gatsby-remark-copy-linked-files

마크다운 파일에 사용된 이미지, pdf 등 링크된 `파일`들을 Gatsby 빌드 시, `빌드 폴더(public)로 자동으로 복사`해주는 역할을 한다.

<br/>

1. 라이브러리 설치하기

```bash
$ npm install gatsby-remark-copy-linked-files
```

<br/>

2. gatsby-config.js 파일에 등록하기

```js
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              // 옵션 필요 시, 사용
            },
          },
        ],
      },
    },
  ],
}
```

<br/>

### 2-6. gatsby-remark-external-links

마크다운 내에서 사용되는 `링크 태그들의 target, rel 등의 속성을 설정`하는 라이브러리이다.

<br/>

1. 라이브러리 설치하기

```bash
$ yarn add gatsby-remark-external-links
```

<br/>

2. gatsby-config.js 파일에 등록하기

```js
// gatsby-config.js

plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-external-links",
          options: {
            // 옵션 필요 시, 사용
          }
        }
      ]
    }
  },
]
```

<br/>
<br/>

## 3. 파싱한 마크다운 본문을 HTML로 출력하기

위의 라이브러리 중, 첫번째로 소개한 `gatsby-transformer-remark`를 통해 GraphQL로 본문을 쿼리할 수 있다.

아래 쿼리문의 html에 본문 내용이 담겨 있다.

그렇다면 해당 데이터를 어떻게 HTML 형태로 출력할 수 있을까?

```graphql
{
    allMarkdownRemark {
        edges {
            node {
                html
                frontmatter {
                    title
                    date(formatString: "YYYY.MM.DD.")
                    tags
                    category
                    thumbnail {
                        childImageSharp {
                            gatsbyImageData
                        }
                        publicURL
                    }
                }
            }
        }
    }
}
```

<br/>

### 3-1. dangerouslySetInnerHTML 속성

`dangerouslySetInnerHTML` 속성의 `__html`에 쿼리한 html을 담아 전달하면 된다.

```tsx
// 마크다운에서 GraphQL로 쿼리한 본문 데이터 html로 출력하기

<div dangerouslySetInnerHTML={{ __html: html }} />
```

<br/>
<br/>

---

## Sources

### - Gatsby 공식문서 : Gatsby Node APIs

https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

### - remark.js

https://remark.js.org/

### - Gatsby 공식문서 : gatsby-transformer-remark

https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/

### - Gatsby 공식문서 : gatsby-remark-images

https://www.gatsbyjs.com/plugins/gatsby-remark-images/

### - Gatsby 공식문서 : gatsby-remark-prismjs

https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/

### - Gatsby 공식문서 : gatsby-remark-smartypants

https://www.gatsbyjs.com/plugins/gatsby-remark-smartypants/

### - Gatsby 공식문서 : gatsby-remark-copy-linked-files

https://www.gatsbyjs.com/plugins/gatsby-remark-copy-linked-files/

### - Gatsby 공식문서 : gatsby-remark-external-links

https://www.gatsbyjs.com/plugins/gatsby-remark-external-links/

### - JeonggonCho_Blog 템플릿 레포지토리

https://github.com/JeonggonCho/JeonggonCho_Blog